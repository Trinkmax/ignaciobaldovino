"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserCheck, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

const stepsData = [
    { number: "1", text: "Definir el problema real." },
    { number: "2", text: "Diseñar el flujo operativo." },
    { number: "3", text: "Implementar solución técnica." },
    { number: "4", text: "Medir, iterar y mejorar.", highlight: true },
];

export function About() {
    const { ref, isInView } = useIntersection<HTMLElement>({ threshold: 0.1 });

    return (
        <section id="about" ref={ref} className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
            <div className="container px-5 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={0}
                            variants={fadeUp}
                        >
                            <Badge
                                variant="outline"
                                className="border-primary text-primary font-mono tracking-wide mb-4 text-xs"
                            >
                                // SOBRE_MÍ
                            </Badge>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-foreground mb-4">
                                Ingeniero Industrial de formación,{" "}
                                <span className="text-primary">Maker</span> por vocación.
                            </h2>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                                Mi diferencial no es solo escribir código limpio, sino
                                construir <strong>sistemas que funcionen</strong>. Entiendo
                                de cuellos de botella, inventarios, métricas y personas. Uso
                                la tecnología como una palanca para resolver problemas
                                operativos reales.
                            </p>
                        </motion.div>

                        <div className="grid gap-4 md:gap-6">
                            {[
                                {
                                    icon: UserCheck,
                                    title: "Enfoque Operativo",
                                    text: 'Me muevo cómodo entre ventas diarias, cajas, clientes y reservas. El objetivo no es "hacer software", es mejorar el negocio.',
                                },
                                {
                                    icon: Briefcase,
                                    title: "Consultoría IT",
                                    text: "Diagnóstico → Propuesta → Implementación → Seguimiento. Resultados medibles y trazabilidad.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="flex gap-3 sm:gap-4 items-start group p-3 sm:p-4 rounded-xl transition-colors hover:bg-background/50 border border-transparent hover:border-muted"
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    custom={i + 1}
                                    variants={fadeUp}
                                >
                                    <div className="p-2.5 sm:p-3 bg-primary/10 rounded-full shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg sm:text-xl text-foreground mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right content — philosophy card */}
                    <motion.div
                        className="relative flex justify-center items-center lg:justify-end"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={2}
                        variants={fadeUp}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent blur-[100px] -z-10 rounded-full transform scale-75" />

                        <Card className="w-full max-w-md border-muted bg-background/80 backdrop-blur-md shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                            <CardHeader className="pb-4 border-b">
                                <CardTitle className="flex items-center gap-3 text-primary font-bold text-lg sm:text-xl">
                                    <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />
                                    Filosofía de Trabajo
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 font-mono text-xs sm:text-sm pt-6">
                                {stepsData.map((step, i) => (
                                    <motion.div
                                        key={step.number}
                                        className="flex items-center p-2.5 sm:p-3 rounded-lg bg-muted/40 border hover:border-primary/50 transition-colors"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: 20 }
                                        }
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.6 + i * 0.12,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <span
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 shrink-0 ${step.highlight
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-primary/20 text-primary"
                                                }`}
                                        >
                                            {step.number}
                                        </span>
                                        <span className="font-semibold text-xs sm:text-sm">
                                            {step.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
