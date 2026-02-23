import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserCheck, Briefcase, Rocket } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-in slide-in-from-left duration-700">
                        <div>
                            <Badge variant="outline" className="border-primary text-primary font-medium tracking-wide mb-4">
                                SOBRE MÍ
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                                Ingeniero Industrial de formación, <span className="text-primary">Maker</span> por vocación.
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                                Mi diferencial no es solo escribir código limpio, sino construir <strong>sistemas que funcionen</strong>. Entiendo de cuellos de botella, inventarios, métricas y personas. Uso la tecnología como una palanca para resolver problemas operativos reales.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex gap-4 items-start group p-4 rounded-xl transition-colors hover:bg-background/50 border border-transparent hover:border-muted">
                                <div className="p-3 bg-primary/10 rounded-full shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <UserCheck className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground mb-1">Enfoque Operativo</h3>
                                    <p className="text-muted-foreground">Me muevo cómodo entre ventas diarias, cajas, clientes y reservas. El objetivo no es &quot;hacer software&quot;, es mejorar el negocio.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group p-4 rounded-xl transition-colors hover:bg-background/50 border border-transparent hover:border-muted">
                                <div className="p-3 bg-primary/10 rounded-full shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Briefcase className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-foreground mb-1">Consultoría IT</h3>
                                    <p className="text-muted-foreground">Diagnóstico → Propuesta → Implementación → Seguimiento. Resultados medibles y trazabilidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center items-center lg:justify-end">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-transparent blur-[100px] -z-10 rounded-full transform scale-75" />

                        <Card className="w-full max-w-md border-muted bg-background/80 backdrop-blur-md shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                            <CardHeader className="pb-4 border-b">
                                <CardTitle className="flex items-center gap-3 text-primary font-bold text-xl">
                                    <Rocket className="h-6 w-6" />
                                    Filosofía de Trabajo
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 font-mono text-sm pt-6">
                                <div className="flex items-center p-3 rounded-lg bg-muted/40 border hover:border-primary/50 transition-colors">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mr-4">1</span>
                                    <span className="font-semibold">Definir el problema real.</span>
                                </div>
                                <div className="flex items-center p-3 rounded-lg bg-muted/40 border hover:border-primary/50 transition-colors">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mr-4">2</span>
                                    <span className="font-semibold">Diseñar el flujo operativo.</span>
                                </div>
                                <div className="flex items-center p-3 rounded-lg bg-muted/40 border hover:border-primary/50 transition-colors">
                                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mr-4">3</span>
                                    <span className="font-semibold">Implementar solución técnica.</span>
                                </div>
                                <div className="flex items-center p-3 rounded-lg bg-muted/40 border hover:border-primary/50 transition-colors">
                                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-4">4</span>
                                    <span className="font-semibold">Medir, iterar y mejorar.</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
