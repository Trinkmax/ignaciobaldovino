"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Workflow, GitBranch, Play, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TITLE_LINE_1 = "Tecnología aplicada a";
const TITLE_LINE_2 = "Operaciones Reales.";
const TYPING_SPEED = 45;
const PAUSE_BETWEEN_LINES = 400;

export function Hero() {
    const [displayedLine1, setDisplayedLine1] = useState("");
    const [displayedLine2, setDisplayedLine2] = useState("");
    const [phase, setPhase] = useState<"line1" | "pause" | "line2" | "done">("line1");
    const [showContent, setShowContent] = useState(false);

    const typeLine = useCallback(
        (
            text: string,
            setter: (val: string) => void,
            onComplete: () => void
        ) => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    setter(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                    onComplete();
                }
            }, TYPING_SPEED);
            return interval;
        },
        []
    );

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;

        if (phase === "line1") {
            interval = typeLine(TITLE_LINE_1, setDisplayedLine1, () => {
                setPhase("pause");
            });
        } else if (phase === "pause") {
            timeout = setTimeout(() => setPhase("line2"), PAUSE_BETWEEN_LINES);
        } else if (phase === "line2") {
            interval = typeLine(TITLE_LINE_2, setDisplayedLine2, () => {
                setPhase("done");
            });
        } else if (phase === "done") {
            timeout = setTimeout(() => setShowContent(true), 300);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [phase, typeLine]);

    const cursorActive = phase !== "done";

    return (
        <section
            id="hero"
            className="relative min-h-[100svh] py-24 md:py-32 flex flex-col justify-center overflow-hidden bg-background"
        >
            <div className="container px-5 md:px-6 z-20 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
                    {/* Process-style header indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            variant="outline"
                            className="w-fit bg-foreground/5 text-foreground border-foreground/20 backdrop-blur-sm px-3 py-1.5 rounded-sm text-xs sm:text-sm font-mono shadow-sm uppercase tracking-wider"
                        >
                            <Workflow className="h-3 w-3 mr-2" />
                            Ingenieur | Developer
                        </Badge>
                    </motion.div>

                    {/* Typewriter Title */}
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground">
                            <span className="block text-foreground/80">
                                {displayedLine1}
                                {phase === "line1" && (
                                    <span className="inline-block w-[3px] h-[0.85em] bg-foreground ml-0.5 align-baseline animate-pulse" />
                                )}
                            </span>
                            <span className="block text-foreground mt-1">
                                {displayedLine2}
                                {phase === "line2" && (
                                    <motion.span
                                        className="inline-block w-[3px] h-[0.85em] bg-foreground/80 ml-[2px] align-baseline"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                                    />
                                )}
                            </span>
                        </h1>
                    </div>

                    {/* Description + Process Flow + CTA — fade in after typing */}
                    <motion.div
                        className="flex flex-col items-start gap-7 md:gap-9 max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={showContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <p className="max-w-[700px] text-base sm:text-lg text-muted-foreground md:text-xl md:leading-8 font-light">
                            Soy{" "}
                            <strong className="text-foreground font-semibold">
                                Ignacio &quot;Nacho&quot; Baldovino
                            </strong>
                            . No solo escribo código; optimizo y escalo sistemas. Combino mapeo de procesos,
                            eficiencia y métricas precisas con ejecución técnica para construir
                            arquitecturas operativas que funcionan.
                        </p>

                        {/* Engineering Process Flow visual snippet */}
                        <motion.div
                            className="w-fit flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-muted-foreground bg-muted/30 border border-border/50 p-3 sm:p-4 rounded-md"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={showContent ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2 p-2 bg-background border border-border/40 rounded shadow-sm">
                                <GitBranch className="h-3 w-3 sm:h-4 sm:w-4 text-foreground/70" />
                                <span className="uppercase tracking-widest font-semibold flex-1 sm:flex-none text-center">Diagnóstico</span>
                            </div>

                            <div className="hidden sm:flex h-px bg-border/80 w-6 items-center shrink-0" />
                            <div className="flex sm:hidden w-px h-3 bg-border/80 my-0.5 relative">
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border/80" />
                            </div>

                            <div className="flex items-center gap-2 p-2 bg-background border border-border/40 rounded shadow-sm">
                                <Workflow className="h-3 w-3 sm:h-4 sm:w-4 text-foreground/70" />
                                <span className="uppercase tracking-widest font-semibold flex-1 sm:flex-none text-center">Desarrollo</span>
                            </div>

                            <div className="hidden sm:flex h-px bg-border/80 w-6 items-center shrink-0" />
                            <div className="flex sm:hidden w-px h-3 bg-border/80 my-0.5 relative">
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border/80" />
                            </div>

                            <div className="flex items-center gap-2 p-2 bg-foreground text-background border border-foreground rounded shadow-sm">
                                <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span className="uppercase tracking-widest font-semibold flex-1 sm:flex-none text-center">Ejecución</span>
                            </div>
                        </motion.div>

                        {/* Buttons mt-2 for a bit of separation */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className="h-12 px-8 text-sm sm:text-base font-medium shadow-none bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-95 rounded-sm"
                                asChild
                            >
                                <Link href="#projects">
                                    Ver Arquitecturas{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 px-8 text-sm sm:text-base font-medium border-border/80 text-foreground hover:bg-muted/50 rounded-sm transition-colors"
                                asChild
                            >
                                <Link href="#contact">Contactar</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle monochrome background geometric lines */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

            <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-foreground/5 rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/4" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">scroll</span>
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/50 to-muted-foreground/0"
                    initial={{}}
                >
                    <motion.div
                        className="w-[3px] h-3 bg-foreground -ml-[1px] rounded-full"
                        animate={{ y: [0, 40, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
