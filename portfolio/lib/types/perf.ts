/**
 * Client performance event types for RUM (Real User Monitoring).
 * Sent from client to POST /api/client-metrics.
 */
export interface ClientPerfEvent {
    /** Event type identifier */
    event: "page_boot" | "hero_ready" | "hero_fallback" | "hydration_done";
    /** Path of the page */
    path: string;
    /** User agent string */
    ua: string;
    /** Whether the client is iOS Safari */
    iosSafari: boolean;
    /** Time since navigation start in milliseconds */
    timeSinceNavStartMs: number;
    /** Optional Web Vitals metrics */
    webVitals?: {
        TTFB?: number;
        FCP?: number;
        LCP?: number;
        CLS?: number;
        INP?: number;
    };
    /** Device capability hints */
    deviceHints?: {
        hardwareConcurrency?: number | null;
        deviceMemory?: number | null;
    };
}
