import { Variants } from "framer-motion";

/**
 * Motion presets for framer-motion.
 *
 * IMPORTANT: Avoid `filter: blur(...)` in animation variants — it causes
 * severe performance penalties on iOS Safari (forces rasterization on every frame).
 * Use only opacity + transform (translate/scale) which are GPU-composited.
 */

export const cinematicEnter: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        },
    }),
};

export const staggerCards: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.08,
            ease: "easeOut" as const,
        },
    }),
};

export const panelReveal: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

export const progressPulse: Variants = {
    initial: { opacity: 0.5, scale: 0.95 },
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [0.95, 1, 0.95],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    }
};
