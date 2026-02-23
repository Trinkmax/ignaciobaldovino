"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { SECTIONS } from "@/lib/section-map";

export function StoryProgress() {
    const { activeSection, progress } = useActiveSection();

    return (
        <div className="fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border shadow-sm pt-2 pb-2 px-5 md:px-6">
            <div className="container mx-auto flex flex-col gap-1.5 max-w-7xl">
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground w-full">
                    <span className="flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                        Paso actual:{" "}
                        <span className="text-foreground font-semibold">
                            {SECTIONS.find(s => s.id === activeSection)?.label || "Inicio"}
                        </span>
                    </span>
                    <span className="shrink-0">{Math.round(progress)}% Leído</span>
                </div>
                {/* Status Bar Track */}
                <div className="h-1 bg-border rounded-full overflow-hidden w-full">
                    {/* Status Bar Fill */}
                    <div
                        className="h-full bg-foreground transition-all duration-300 ease-out rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
