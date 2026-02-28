"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";


export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background py-10 md:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

            <div className="container flex flex-col items-center justify-between gap-6 md:flex-row px-5 md:px-6 mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
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
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    <Link
                        href="https://github.com/Trinkmax"
                        target="_blank"
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors p-2 sm:px-3 hover:bg-muted/60 rounded-full font-mono border border-transparent hover:border-border/50"
                    >
                        <Github className="h-4 w-4" />
                        <span className="hidden sm:inline-block">GitHub</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50 sm:hidden" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ignacio-baldovino"
                        target="_blank"
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors p-2 sm:px-3 hover:bg-muted/60 rounded-full font-mono border border-transparent hover:border-border/50"
                    >
                        <Linkedin className="h-4 w-4" />
                        <span className="hidden sm:inline-block">LinkedIn</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50 sm:hidden" />
                    </Link>
                    <Link
                        href="mailto:ignacio.baldovino@hotmail.com"
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
