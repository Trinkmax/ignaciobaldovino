"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

export function Footer() {
    const { ref, isInView } = useIntersection<HTMLElement>({ threshold: 0.2 });

    return (
        <footer ref={ref} className="border-t border-border/50 py-8 md:py-10 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/5 blur-[80px] -z-10 rounded-full" />

            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row px-5 md:px-6 mx-auto">
                <motion.div
                    className="flex flex-col items-center gap-4 px-4 md:flex-row md:gap-3 md:px-0 w-full md:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src="/brand/IB.png"
                        alt="IB Consultoría"
                        width={24}
                        height={24}
                        className="dark:invert opacity-60 grayscale hover:grayscale-0 transition-all"
                    />
                    <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
                        Diseñado y construido por{" "}
                        <span className="font-mono text-foreground/90 font-medium">Ignacio Baldovino</span>.
                    </p>
                </motion.div>

                <motion.div
                    className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center w-full md:w-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    <Link
                        href="https://github.com/nachobaldovino"
                        target="_blank"
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors p-2 sm:px-3 hover:bg-muted/60 rounded-full font-mono border border-transparent hover:border-border/50"
                    >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline-block">GitHub</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50 sm:hidden" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/ignaciobaldovino"
                        target="_blank"
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors p-2 sm:px-3 hover:bg-muted/60 rounded-full font-mono border border-transparent hover:border-border/50"
                    >
                        <Linkedin className="h-4 w-4" />
                        <span className="hidden sm:inline-block">LinkedIn</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50 sm:hidden" />
                    </Link>
                    <Link
                        href="mailto:contacto@ignaciobaldovino.com"
                        className="flex items-center gap-2 text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors p-2 sm:px-3 hover:bg-primary/10 rounded-full font-mono border border-transparent hover:border-primary/20"
                    >
                        <Mail className="h-4 w-4" />
                        <span className="hidden sm:inline-block">Email</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50 sm:hidden" />
                    </Link>
                </motion.div>
            </div>
        </footer>
    );
}
