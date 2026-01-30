import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma'; // Prisma not set up, using Supabase fallback

export async function POST(req) {
    try {
        const contentType = req.headers.get('content-type') || '';
        let rawData = {};

        // 1. Parse incoming data
        if (contentType.includes('application/x-www-form-urlencoded')) {
            const rawText = await req.text();
            const params = new URLSearchParams(rawText);
            params.forEach((value, key) => { rawData[key] = value; });
        } else if (contentType.includes('application/json')) {
            rawData = await req.json();
        } else {
            return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
        }

        console.log('Raw incoming form data:', rawData);

        // 2. Helper to extract values
        const extractFieldValue = (field) =>
            rawData[field] ||
            rawData[`fields[${field}][value]`] ||
            rawData[`fields[${field}][raw_value]`] ||
            '';

        // 3. Spam Check (Honeypot)
        if (extractFieldValue('_honey')) {
            return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
        }

        // ============================================================
        // 4. CONFIGURATION & MAPPING
        // ============================================================

        // Project ID & SRD Configuration
        const PROJECT_CONFIG = {
            residential: { srd: '68ea21610d1851d31ac6e512', project_id: '6300c1064443ae6b0631d143' },
            commercial: { srd: '68ea2175e1148734f842f632', project_id: '6300c0914443ae24651836c6' },
        };

        // Determine Project Type (from 'category' or 'project' field)
        // Frontend sends 'category' (Residential/Commercial), snippet expects 'project'
        const rawProject = extractFieldValue('project') || extractFieldValue('category');
        const selectedProject = rawProject ? rawProject.toLowerCase() : '';

        const projectConfig = PROJECT_CONFIG[selectedProject] || {
            srd: extractFieldValue('srd') || '68ea21610d1851d31ac6e512', // Fallback to Residential SRD
            project_id: extractFieldValue('project_id') || '6300c1064443ae6b0631d143', // Fallback to Residential ID
        };

        // BHK Mapping
        const bhkString = extractFieldValue('bhk') || extractFieldValue('interest') || ''; // Frontend sends 'interest' e.g. "3 BHK"
        let bhk = [];
        if (bhkString && bhkString.includes('BHK')) {
            // Extract number from "3 BHK" -> "3"
            const val = bhkString.split(' ')[0];
            if (!isNaN(parseInt(val))) bhk.push(parseInt(val));
        } else if (bhkString) {
            // Handle comma separated string "2,3"
            bhk = bhkString.split(',').map((v) => parseInt(v.trim(), 10)).filter(n => !isNaN(n));
        }
        if (bhk.length === 0) bhk = [2, 3]; // Default fallback

        // Budget Mapping
        const budgetRanges = {
            'below_50_lac': { min: '100000', max: '5000000' },
            '50lac_to_1cr': { min: '5000000', max: '10000000' },
            '1cr_to_1_5cr': { min: '10000000', max: '15000000' },
            '1_5cr_to_2cr': { min: '15000000', max: '20000000' },
            '2cr_and_above': { min: '20000000', max: '100000000' }
        };

        const selectedBudgetKey = extractFieldValue('budget') || 'below_50_lac';
        const selectedBudget = budgetRanges[selectedBudgetKey] || { min: '100000', max: '100000000' };

        // Property Type Map
        const propertyTypeMap = { 'residential': 'flat', 'commercial': 'office_space' };
        const propertyType = extractFieldValue('property_type') || propertyTypeMap[selectedProject] || 'flat';

        // ============================================================
        // 5. CONSTRUCT SELL.DO PAYLOAD (JSON)
        // ============================================================
        const payload = {
            form_id: rawData['form[id]'] || 'website_lead_form',
            sell_do: {
                campaign: {
                    srd: projectConfig.srd,
                    campaign_id: extractFieldValue('campaign_id'), // Optional
                },
                form: {
                    lead: {
                        name: extractFieldValue('name'),
                        email: extractFieldValue('email'),
                        phone: extractFieldValue('phone'),
                        project_id: projectConfig.project_id,
                        campaign_id: extractFieldValue('campaign_id'), // Optional
                        sales: '',
                        sub_source: extractFieldValue('sub_source') || 'Direct Traffic',
                        profile: {
                            company: extractFieldValue('company'),
                        },
                    },
                    custom: {
                        c_one: extractFieldValue('custom'), // Custom field placeholder
                        // Add specific custom fields if needed
                        custom_purpose_of_purchase: extractFieldValue('purpose_of_purchase'),
                        custom_property_type_interested_in: extractFieldValue('interest')
                    },
                    note: {
                        content: extractFieldValue('note'),
                    },
                    requirement: {
                        bhk: bhk,
                        property_type: propertyType,
                        purpose: extractFieldValue('purpose') || 'end_use',
                        locations: extractFieldValue('locations'),
                        min_budget: selectedBudget.min,
                        max_budget: selectedBudget.max,
                    },
                },
            },
            api_key: extractFieldValue('api_key') || 'e90c80d27f7ba2858b7e8d045b1d9f18',
        };

        console.log('Sending to Sell.do:', JSON.stringify(payload, null, 2));

        // 6. Send to Sell.do
        const response = await fetch('https://app.sell.do/api/leads/create.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        console.log('Response from Sell.Do:', result);

        // 7. Save to Database (Supabase) - Replacing Prisma
        const addToDbPromise = (async () => {
            // Fallback to Supabase since Prisma is not configured
            const supabase = require('@/lib/supabase').default;
            if (!supabase) return { skipped: true };

            try {
                const { error } = await supabase
                    .from('leads')
                    .insert([
                        {
                            name: extractFieldValue('name'),
                            email: extractFieldValue('email'),
                            phone: extractFieldValue('phone'),
                            project_id: projectConfig.project_id,
                            srd: projectConfig.srd,
                            source: extractFieldValue('sub_source'),
                            user_agent: extractFieldValue('user_agent'),
                            referrer: extractFieldValue('referrer'),
                            metadata: {
                                sell_do_response: result,
                                budget: selectedBudgetKey,
                                payload: payload
                            }
                        }
                    ]);
                if (error) console.error("Supabase Error:", error);
                return { success: !error };
            } catch (dbErr) {
                return { error: dbErr.message };
            }
        })();

        // 8. Google Sheet (Legacy support, optional)
        const googleSheetPromise = (async () => {
            if (!process.env.GOOGLE_SHEET_ID) return { skipped: true };
            // ... Logic would go here if needed, keeping it simple for now to focus on Sell.do
            return { skipped: true };
        })();

        await Promise.all([addToDbPromise, googleSheetPromise]);

        // Return result
        return NextResponse.json({ success: true, result, entryId: "db-entry" }, { status: 200 });

    } catch (err) {
        console.error('Webhook Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
