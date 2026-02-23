import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />

                <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para mejorar tu operación?</h2>
                        <p className="text-muted-foreground text-lg md:text-xl/relaxed">
                            Si buscas optimizar procesos, desarrollar productos digitales o necesitas una consultoría técnica con enfoque de negocio, estoy disponible.
                        </p>
                    </div>

                    <div className="grid gap-6 w-full max-w-md bg-card/60 backdrop-blur border p-8 rounded-2xl shadow-xl">
                        <div className="space-y-2 text-left">
                            <h3 className="font-semibold text-lg">¿Qué puedo hacer por ti?</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary" /> Desarrollar tu MVP Mobile/Web
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary" /> Automatizar flujos de trabajo
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary" /> Auditoría de procesos y tecnología
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3 pt-4 border-t">
                            <Button className="w-full text-lg h-12 gap-3 shadow-lg hover:shadow-primary/25 transition-all" size="lg" asChild>
                                <a href="mailto:contacto@ignaciobaldovino.com">
                                    <Mail className="h-5 w-5" />
                                    Enviar Correo
                                </a>
                            </Button>
                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="w-full h-11 gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950/30 transition-colors" asChild>
                                    <a href="https://linkedin.com/in/ignaciobaldovino" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-4 w-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full h-11 gap-2 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 transition-colors" asChild>
                                    <a href="https://github.com/nachobaldovino" target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
