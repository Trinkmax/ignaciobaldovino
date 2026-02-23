"use client";

import { Badge } from "@/components/ui/badge";
import { UserCheck, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { staggerCards, cinematicEnter } from "@/lib/motion-presets";

const stepsData = [
    { number: "01", text: "Definir el problema real." },
    { number: "02", text: "Modelar procesos y puntos de control." },
    { number: "03", text: "Implementar solución y adopción operativa." },
    { number: "04", text: "Medir, iterar y mejorar.", highlight: true },
];

export function About() {
    return (
        <SectionShell id="about" className="bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

                {/* Left content: Core Narrative */}
                <div className="space-y-8 md:space-y-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cinematicEnter}
                        className="space-y-4"
                    >
                        <Badge
                            variant="outline"
                            className="bg-muted text-muted-foreground font-mono tracking-widest text-[10px] sm:text-xs px-3 py-1 border-border/50 uppercase shadow-sm"
                        >
                            {"// SOBRE_MÍ"}
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-[1.1]">
                            Diseño e Implemento sistemas con foco operativo.
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light mt-4">
                            Trabajo en la intersección entre negocio, operación y tecnología: diagnostico cuellos de botella, diseño flujos y ejecuto sistemas que ordenan ventas, reservas, inventario y atención al cliente. Cada implementación se mide con indicadores para mejorar de forma continua.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-4 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-border hidden sm:block"></div>

                        {[
                            {
                                icon: UserCheck,
                                title: "Enfoque Operativo",
                                text: 'Trabajo sobre operación real: ventas diarias, caja, clientes y reservas. El objetivo no es “hacer software”, sino mejorar cómo funciona el negocio.',
                            },
                            {
                                icon: Briefcase,
                                title: "Consultoría IT",
                                text: "Diagnóstico → Propuesta → Implementación → Seguimiento. Resultados medibles y trazabilidad.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="group flex gap-4 sm:gap-6 items-start bg-card/50 border border-border/40 p-4 sm:p-5 rounded-lg hover:bg-muted/30 transition-colors relative z-10"
                                initial="hidden"
                                whileInView="visible" // Replaced animate with whileInView
                                viewport={{ once: true, amount: 0.2 }} // Added viewport prop
                                custom={i}
                                variants={staggerCards}
                            >
                                <div className="p-2 sm:p-2.5 bg-foreground text-background rounded-sm shrink-0">
                                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <div>
                                    <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground uppercase tracking-widest mb-1.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right content — "Principios Operativos" */}
                <motion.div
                    className="relative flex flex-col pt-4 lg:pt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={2}
                    variants={cinematicEnter}
                >
                    <div className="bg-muted/20 border border-border/50 rounded-xl p-5 sm:p-6 md:p-8 relative overflow-hidden backdrop-blur-sm shadow-sm group hover:border-border transition-colors">
                        <div className="flex items-center gap-3 mb-6 sm:mb-8 border-b border-border/40 pb-4">
                            <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                            <h3 className="text-sm sm:text-base font-mono font-bold text-foreground tracking-widest uppercase">
                                Principios Operativos
                            </h3>
                        </div>

                        <div className="space-y-3 sm:space-y-4 font-mono">
                            {stepsData.map((step, i) => (
                                <motion.div
                                    key={step.number}
                                    className={`flex items-stretch rounded border ${step.highlight ? "bg-foreground text-background border-foreground" : "bg-background border-border"
                                        }`}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                                >
                                    <div className={`flex items-center justify-center w-10 sm:w-12 shrink-0 border-r ${step.highlight ? "border-background/20" : "border-border"
                                        }`}>
                                        <span className="text-[10px] sm:text-xs font-bold opacity-70">
                                            {step.number}
                                        </span>
                                    </div>
                                    <div className="flex items-center p-3 sm:p-4 text-xs sm:text-sm font-semibold flex-1">
                                        {step.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionShell>
    );
}
