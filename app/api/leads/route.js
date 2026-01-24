import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma'; // Prisma disabled for now

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

        // 2. Helper to extract values
        // Note: Frontend sends standard JSON keys, but logic supports "fields[key][value]" format if needed
        const extractFieldValue = (field) =>
            rawData[field] ||
            rawData[`fields[${field}][value]`] ||
            rawData[`fields[${field}][raw_value]`] ||
            rawData[`fields[${field}][raw_value]`] ||
            '';

        // 3. Spam Check (Honeypot)
        if (extractFieldValue('_honey')) {
            // Silently reject bots (Return success so they don't retry)
            return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
        }

        // 4. Process Standard Fields (BHK, Budget)
        const bhkString = extractFieldValue('bhk');
        const bhk = bhkString ? bhkString.split(',').map((v) => v.trim()) : ['2', '3']; // Default fallback

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

        // 4. Note construction
        const noteContent = `${extractFieldValue('note')}`;

        // ============================================================
        // 5. CONSTRUCT PAYLOAD AS URLSEARCHPARAMS
        // ============================================================
        const sellDoData = new URLSearchParams();

        // -- Standard Fields --
        sellDoData.append('sell_do[form][lead][name]', extractFieldValue('name'));
        sellDoData.append('sell_do[form][lead][email]', extractFieldValue('email'));
        sellDoData.append('sell_do[form][lead][phone]', extractFieldValue('phone'));
        // Fallback Project ID if not sent - Replace 'project_id' with real Sell.do Project ID if known
        sellDoData.append('sell_do[form][lead][project_id]', extractFieldValue('project_id') || '670783300f33a908a5436662');

        // -- Campaign / Source --
        // Use 'Website' or similar as default source if not provided
        sellDoData.append('sell_do[campaign][srd]', extractFieldValue('srd') || '57a461320ef4bb1fc08c3e83');
        sellDoData.append('sell_do[form][lead][sub_source]', extractFieldValue('sub_source') || 'Direct Traffic');

        // -- Note --
        sellDoData.append('sell_do[form][note][content]', noteContent);

        // -- Requirements --
        // In this project context, we might only get 'interest' (3 BHK, 4 BHK etc) from the form
        // We'll map that to BHK array if possible, or just pass as note/custom field
        const interest = extractFieldValue('interest');
        if (interest && interest.includes('BHK')) {
            // Extract number from "3 BHK" -> "3"
            const bhkVal = interest.split(' ')[0];
            sellDoData.append('sell_do[form][requirement][bhk][]', bhkVal);
        } else {
            // Default BHKs if not specified or commercial
            bhk.forEach(b => sellDoData.append('sell_do[form][requirement][bhk][]', b));
        }

        sellDoData.append('sell_do[form][requirement][min_budget]', selectedBudget.min);
        sellDoData.append('sell_do[form][requirement][max_budget]', selectedBudget.max);

        // Map Category to Property Type
        const category = extractFieldValue('category');
        const propertyTypeMap = { 'Residential': 'flat', 'Commercial': 'office_space' };
        sellDoData.append('sell_do[form][requirement][property_type]', propertyTypeMap[category] || 'flat');

        sellDoData.append('sell_do[form][requirement][purpose]', 'end_use');

        // -- CUSTOM FIELDS --
        const purpose = extractFieldValue('purpose_of_purchase');
        const type = extractFieldValue('interest'); // Using 'interest' as the specific type (e.g. Bungalows, Shops)

        if (purpose) sellDoData.append('sell_do[form][custom][custom_purpose_of_purchase]', purpose);
        if (type) sellDoData.append('sell_do[form][custom][custom_property_type_interested_in]', type);

        // -- Analytics / UTMs --
        const utmSource = extractFieldValue('utm_source');
        const utmMedium = extractFieldValue('utm_medium');
        const utmCampaign = extractFieldValue('utm_campaign');
        const utmTerm = extractFieldValue('utm_term');
        const utmContent = extractFieldValue('utm_content');

        if (utmSource) sellDoData.append('sell_do[analytics][utm_source]', utmSource);
        if (utmMedium) sellDoData.append('sell_do[analytics][utm_medium]', utmMedium);
        if (utmCampaign) sellDoData.append('sell_do[analytics][utm_campaign]', utmCampaign);
        if (utmTerm) sellDoData.append('sell_do[analytics][utm_term]', utmTerm);
        if (utmContent) sellDoData.append('sell_do[analytics][utm_content]', utmContent);

        // API Key
        const API_KEY = extractFieldValue('api_key') || 'e90c80d27f7ba2858b7e8d045b1d9f18';

        // 6. Send to Sell.do
        const sellDoPromise = fetch(`https://app.sell.do/api/leads/create?api_key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: sellDoData.toString(),
        }).then(res => res.json());

        // 7. Send to Google Sheets (Async/Parallel)
        // Requires: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID
        const googleSheetPromise = (async () => {
            if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
                console.warn("Google Sheets credentials missing. Skipping.");
                return { skipped: true };
            }

            try {
                const { GoogleSpreadsheet } = require('google-spreadsheet');
                const { JWT } = require('google-auth-library');

                // Initialize auth - this is key for service account
                const serviceAccountAuth = new JWT({
                    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                    key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    scopes: [
                        'https://www.googleapis.com/auth/spreadsheets',
                    ],
                });

                const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[0]; // Assumes first sheet

                await sheet.addRow({
                    Name: extractFieldValue('name'),
                    Phone: extractFieldValue('phone'),
                    Email: extractFieldValue('email'),
                    Project: extractFieldValue('project_id'),
                    SRD: extractFieldValue('srd'),
                    Source: extractFieldValue('sub_source'),
                    Date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                    UserAgent: extractFieldValue('user_agent'),
                    Referrer: extractFieldValue('referrer'),
                    UTM_Source: utmSource,
                    UTM_Medium: utmMedium,
                    UTM_Campaign: utmCampaign
                });
                return { success: true };
            } catch (sheetErr) {
                console.error("Google Sheet Error:", sheetErr);
                return { error: sheetErr.message };
            }
        })();

        // Wait for both (or just Sell.do if you want valid response first)
        const [result, sheetResult] = await Promise.all([sellDoPromise, googleSheetPromise]);

        // Assuming success if Sell.do accepts it, or just returning result
        // We return a mock entryId since DB is disabled
        return NextResponse.json({ success: true, result, sheetResult, entryId: "mock-id" }, { status: 200 });

    } catch (err) {
        console.error('Webhook Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
