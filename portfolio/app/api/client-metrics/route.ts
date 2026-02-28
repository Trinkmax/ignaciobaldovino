import { NextResponse } from "next/server";
import type { ClientPerfEvent } from "@/lib/types/perf";

/**
 * POST /api/client-metrics
 *
 * Receives client-side performance events for RUM analysis.
 * Returns 204 (no body) on success.
 *
 * In production, you would forward these to:
 * - Vercel Analytics / Speed Insights
 * - A logging service (Datadog, Axiom, etc.)
 * - A database for custom dashboards
 *
 * For now, we log to stdout (visible in Vercel function logs).
 */
export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ClientPerfEvent;

        // Basic validation
        if (!body.event || !body.path) {
            return new NextResponse(null, { status: 400 });
        }

        // Log for Vercel function logs / stdout
        console.log(
            JSON.stringify({
                _type: "client_perf",
                event: body.event,
                path: body.path,
                iosSafari: body.iosSafari,
                timeSinceNavStartMs: body.timeSinceNavStartMs,
                deviceHints: body.deviceHints,
                webVitals: body.webVitals,
                ua: body.ua?.substring(0, 120), // Truncate UA to avoid log bloat
                ts: new Date().toISOString(),
            })
        );

        return new NextResponse(null, { status: 204 });
    } catch {
        return new NextResponse(null, { status: 400 });
    }
}
