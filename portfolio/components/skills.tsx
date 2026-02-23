import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench, BarChart, Bot, Laptop } from "lucide-react";

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
            "Mejora continua (Kaizen)"
        ]
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
            "Sistemas POS e Inventarios"
        ]
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
            "Handoff Humano/Bot"
        ]
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
            "Trazabilidad de Datos"
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-16 space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Arsenal</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Herramientas técnicas aplicadas con visión de negocio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category) => (
                        <Card key={category.title} className="bg-background hover:shadow-xl hover:border-primary/50 transition-all duration-300 border-muted group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <category.icon className="w-24 h-24 text-primary transform rotate-12 translate-x-8 -translate-y-8" />
                            </div>
                            <CardHeader className="flex flex-col space-y-2 pb-2 z-10">
                                <category.icon className="h-8 w-8 text-primary mb-2" />
                                <CardTitle className="text-lg font-bold leading-tight">
                                    {category.title}
                                </CardTitle>
                                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                    {category.description}
                                </p>
                            </CardHeader>
                            <CardContent className="z-10 relative">
                                <ul className="grid gap-2 mt-2">
                                    {category.items.map((item) => (
                                        <li key={item} className="text-sm text-foreground/80 flex items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 mt-1.5 shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
