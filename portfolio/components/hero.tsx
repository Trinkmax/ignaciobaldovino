"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Workflow, GitBranch, Play } from "lucide-react";
import { motion } from "framer-motion";
import { ProcessRail } from "@/components/process-rail";

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



    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] w-full pt-[108px] pb-14 md:pt-[116px] md:pb-24 flex flex-col overflow-hidden bg-background"
        >
            <div className="container px-5 md:px-6 z-20 mx-auto flex-1 flex flex-col justify-start md:justify-center pt-2 md:pt-6">
                <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
                    {/* Process-style header indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge
                            variant="outline"
                            className="w-fit max-w-full bg-foreground/5 text-foreground border-foreground/20 backdrop-blur-sm px-3 py-1.5 rounded-sm text-[10px] sm:text-xs md:text-sm font-mono shadow-sm uppercase tracking-wider whitespace-normal text-left"
                        >
                            <Workflow className="h-3 w-3 mr-2 shrink-0" />
                            <span>Ingeniería industrial | Desarrollo de software</span>
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
                            Soy Ignacio Baldovino, estudiante de Ingeniería Industrial (UTN FRC). Diseño e implemento soluciones a medida para transformar operaciones complejas en procesos claros, medibles y escalables.
                        </p>

                        {showContent && (
                            <ProcessRail
                                steps={[
                                    { icon: GitBranch, label: "Diagnóstico" },
                                    { icon: Workflow, label: "Desarrollo" },
                                    { icon: Play, label: "Ejecución", active: true },
                                ]}
                            />
                        )}

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
                                    Ver Soluciones{" "}
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
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
