"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, BarChart, Bot, Laptop } from "lucide-react";
import { motion } from "framer-motion";


const skillCategories = [
    {
        title: "Ingeniería Industrial Aplicada",
        icon: Wrench,
        description: "Procesos, eficiencia y control.",
        items: [
            "Modelado y mejora de procesos (BPMN)",
            "Diseño de sistemas operativos",
            "KPIs y control métrico",
            "Estandarización operativa",
            "Mejora continua (Kaizen)",
        ],
    },
    {
        title: "Desarrollo de Producto",
        icon: Laptop,
        description: "Web, Mobile & SaaS.",
        items: [
            "Apps Mobile-First (Flutter/React Native)",
            "Paneles Administrativos (Next.js/React)",
            "Arquitectura Multi-tenant",
            "UX para Operación en Campo",
            "Sistemas POS e Inventarios",
        ],
    },
    {
        title: "Automatización & IA",
        icon: Bot,
        description: "Bots y flujos inteligentes.",
        items: [
            "Orquestación de Workflows (n8n, Make)",
            "Bots Conversacionales (WhatsApp API)",
            "RAG & LLMs para Soporte",
            "Reglas de Negocio Automatizadas",
            "Handoff Humano/Bot",
        ],
    },
    {
        title: "Data / BI & Ejecución",
        icon: BarChart,
        description: "Decisiones basadas en datos.",
        items: [
            "Power BI Dashboards & Reporting",
            "Análisis Operativo (Excel Avanzado)",
            "Consultoría IT Integral",
            "Gestión de Proyectos Ágiles",
            "Trazabilidad de Datos",
        ],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut" as const,
        },
    }),
};

export function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-muted/30">
            <div className="container mx-auto px-5 md:px-6">
                <motion.div
                    className="flex flex-col mb-10 md:mb-16 space-y-3 md:space-y-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                        Skills & Arsenal
                    </h2>
                    <p className="mx-auto max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-lg">
                        Herramientas técnicas aplicadas con visión de negocio.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={i}
                            variants={cardVariants}
                        >
                            <Card className="h-full bg-background hover:shadow-xl hover:border-primary/50 transition-all duration-300 border-muted group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <category.icon className="w-20 h-20 sm:w-24 sm:h-24 text-primary transform rotate-12 translate-x-8 -translate-y-8" />
                                </div>
                                <CardHeader className="flex flex-col space-y-2 pb-2 z-10">
                                    <category.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-2" />
                                    <CardTitle className="text-base sm:text-lg font-bold leading-tight">
                                        {category.title}
                                    </CardTitle>
                                    <p className="text-[10px] sm:text-xs text-muted-foreground font-mono uppercase tracking-wider">
                                        {category.description}
                                    </p>
                                </CardHeader>
                                <CardContent className="z-10 relative">
                                    <ul className="grid gap-1.5 sm:gap-2 mt-2">
                                        {category.items.map((item) => (
                                            <li
                                                key={item}
                                                className="text-xs sm:text-sm text-foreground/80 flex items-start"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 mt-1.5 shrink-0" />
                                                <span className="leading-snug">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
