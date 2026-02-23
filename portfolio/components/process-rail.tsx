"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

interface ProcessStep {
    icon: React.ElementType;
    label: string;
    active?: boolean;
}

interface ProcessRailProps {
    steps: ProcessStep[];
    className?: string;
}

export function ProcessRail({ steps, className }: ProcessRailProps) {
    const { ref, isInView } = useIntersection<HTMLDivElement>({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            className={cn(
                "w-fit flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-muted-foreground",
                className
            )}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <div
                        className={cn(
                            "flex items-center gap-2 p-2 rounded shadow-sm flex-1 sm:flex-none w-full sm:w-auto",
                            step.active
                                ? "bg-foreground text-background border border-foreground"
                                : "bg-card border border-border/40"
                        )}
                    >
                        <step.icon
                            className={cn(
                                "h-3 w-3 sm:h-4 sm:w-4",
                                !step.active && "text-foreground/70"
                            )}
                        />
                        <span className="uppercase tracking-widest font-semibold flex-1 text-center sm:text-left">
                            {step.label}
                        </span>
                    </div>

                    {idx < steps.length - 1 && (
                        <>
                            <div className="hidden sm:flex h-px bg-border w-6 items-center shrink-0" />
                            <div className="flex sm:hidden w-px h-4 bg-border relative">
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </motion.div>
    );
}
