import { useState, useEffect } from "react";
import { SectionId, SECTIONS } from "@/lib/section-map";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<SectionId>("hero");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calcular section activa
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let current: SectionId = "hero";

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition) {
                    current = section.id;
                }
            }
            setActiveSection(current);

            // Calcular progreso total de página
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, currentProgress)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { activeSection, progress };
}
