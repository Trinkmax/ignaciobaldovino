"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
    }),
};

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
            <div className="container px-5 md:px-6 mx-auto relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center max-w-3xl mx-auto">
                    <motion.div
                        className="space-y-3 md:space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                            ¿Listo para mejorar tu operación?
                        </h2>
                        <p className="text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl">
                            Si buscas optimizar procesos, desarrollar productos digitales o
                            necesitas una consultoría técnica con enfoque de negocio, estoy
                            disponible.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-5 md:gap-6 w-full max-w-md bg-card/60 backdrop-blur border p-6 sm:p-8 rounded-2xl shadow-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        variants={fadeUp}
                    >
                        <div className="space-y-2 text-left">
                            <h3 className="font-semibold text-base sm:text-lg">
                                ¿Qué puedo hacer por ti?
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    "Desarrollar tu MVP Mobile/Web",
                                    "Automatizar flujos de trabajo",
                                    "Auditoría de procesos y tecnología",
                                ].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.4 + i * 0.1,
                                        }}
                                    >
                                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                            <Button
                                className="w-full text-base sm:text-lg h-11 sm:h-12 gap-3 shadow-lg hover:shadow-primary/25 transition-all"
                                size="lg"
                                asChild
                            >
                                <a href="mailto:contacto@ignaciobaldovino.com">
                                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                    Enviar Correo
                                </a>
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button
                                    variant="outline"
                                    className="w-full h-10 sm:h-11 gap-2 text-xs sm:text-sm hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950/30 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://linkedin.com/in/ignaciobaldovino"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full h-10 sm:h-11 gap-2 text-xs sm:text-sm hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 transition-colors"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/nachobaldovino"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        GitHub
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
