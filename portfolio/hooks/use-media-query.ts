import { useSyncExternalStore } from "react";

/**
 * Robust media query hook using useSyncExternalStore.
 *
 * Key improvements over the previous implementation:
 * 1. Uses useSyncExternalStore to avoid hydration mismatch flashes
 * 2. Compatible with older Safari (addListener/removeListener fallback)
 * 3. SSR-safe: returns false on server, then immediately correct value on client
 */
export function useMediaQuery(query: string): boolean {
    return useSyncExternalStore(
        (callback) => subscribeToMediaQuery(query, callback),
        () => getMediaQuerySnapshot(query),
        () => false // Server snapshot: always false
    );
}

function getMediaQuerySnapshot(query: string): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
}

function subscribeToMediaQuery(query: string, callback: () => void): () => void {
    if (typeof window === "undefined") return () => { };

    const mql = window.matchMedia(query);

    // Safari 13 and older iOS Safari don't support addEventListener on MediaQueryList
    if (typeof mql.addEventListener === "function") {
        mql.addEventListener("change", callback);
        return () => mql.removeEventListener("change", callback);
    } else if (typeof mql.addListener === "function") {
        // Legacy fallback for older Safari
        mql.addListener(callback);
        return () => mql.removeListener(callback);
    }

    return () => { };
}
