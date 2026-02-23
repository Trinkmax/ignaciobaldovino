import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionShellProps {
    id: string;
    children: ReactNode;
    className?: string;
    innerClassName?: string;
}

export function SectionShell({ id, children, className, innerClassName }: SectionShellProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-16 md:py-24 overflow-hidden pt-safe pb-safe",
                className
            )}
        >
            <div className={cn("container px-5 md:px-6 mx-auto relative z-10", innerClassName)}>
                {children}
            </div>
        </section>
    );
}
