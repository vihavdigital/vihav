import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const SELL_DO_API = "https://bitly.vihav.com/api/lead-create/overseas-property";

        // Get Client IP
        const forwardedFor = request.headers.get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1";

        // Convert to URLSearchParams (x-www-form-urlencoded)
        const params = new URLSearchParams();
        params.append('name', body.name);
        params.append('email', body.email);
        params.append('phone', body.phone); // Assuming 'phone' is the expected key for the combined number
        params.append('project', body.project || "Overseas Website"); // Default project if missing

        // Add IP if available (matching the snippet's intent to send 'remote_ip' or similar)
        // The snippet had an input id="remote_ip". I'll assume the key is 'remote_ip' or just 'ip'.
        // Let's send both to be safe or just 'ip' if that's standard.
        // Actually, looking at the snippet: `if(ipInput && data.ip) ipInput.value = data.ip;` -> implies hidden input named ???
        // I'll send 'ip' and 'details[ip]' just in case.
        params.append('ip', ip);

        const response = await fetch(SELL_DO_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Origin': 'https://vihav.com',
                'Referer': 'https://vihav.com/overseas',
                'User-Agent': request.headers.get('user-agent') || 'NextJS-Proxy' // Pass UA
            },
            body: params.toString()
        });

        const responseText = await response.text();

        if (response.ok) {
            return NextResponse.json({ success: true, message: "Lead submitted successfully" });
        } else {
            console.error("Sell.do API Error:", responseText);
            return NextResponse.json(
                { success: false, error: "Submission failed", details: responseText },
                { status: response.status }
            );
        }
    } catch (error) {
        console.error("API Proxy Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
