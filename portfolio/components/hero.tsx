import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen py-32 flex flex-col justify-center overflow-hidden bg-background">
            <div className="container px-4 md:px-6 z-20 mx-auto">
                <div className="grid grid-cols-1 gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col items-start gap-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                            Ingeniería Industrial + Desarrollo de Software
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
                            Tecnología aplicada a{" "}
                            <span className="text-primary/90">
                                Operaciones Reales.
                            </span>
                        </h1>
                        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl md:leading-8 font-light">
                            Soy <strong>Ignacio &quot;Nacho&quot; Baldovino</strong>. No solo escribo código; diseño sistemas. Combino procesos, eficiencia y métricas con ejecución técnica para construir soluciones que funcionan en el mundo real.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 transition-transform active:scale-95" asChild>
                                <Link href="#projects">
                                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base hover:bg-muted/50 transition-colors" asChild>
                                <Link href="#contact">Hablemos</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40 translate-x-1/3 -translate-y-1/4' />
            <div className='absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/4' />
        </section>
    );
}
