"use client";

import Image from "next/image";
import * as React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ProjectDetailDrawer } from "@/components/mobile/project-detail-drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowUpRight,
    Layers,
    Target,
    Code2,
    CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects, type ProjectDetail } from "@/lib/projects-data";

/* ─── Componente Modal de Detalle ─── */
function ProjectDetailModal({
    project,
    open,
    onOpenChange,
}: {
    project: ProjectDetail;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] p-0 flex flex-col gap-0 overflow-hidden">
                {/* Header con gradiente */}
                <div className={`relative shrink-0 px-5 sm:px-6 pt-6 pb-4 ${project.bg}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
                    <DialogHeader className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 sm:p-2.5 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50`}>
                                <project.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${project.color}`} />
                            </div>
                            <Badge
                                variant={project.status === "Producto Principal" ? "default" : "secondary"}
                                className="font-mono text-[10px] sm:text-xs tracking-wider"
                            >
                                {project.status}
                            </Badge>
                        </div>
                        <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight">
                            {project.title}
                            <span className="text-muted-foreground font-normal text-sm sm:text-base ml-2">
                                / {project.subtitle}
                            </span>
                        </DialogTitle>
                        <DialogDescription className="flex flex-col gap-3 text-xs sm:text-sm leading-relaxed mt-1" asChild>
                            <div>
                                <span>{project.longDescription}</span>
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 w-fit mt-2 px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-md hover:bg-primary/20 transition-colors"
                                    >
                                        Visitar Proyecto <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    </a>
                                )}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </div>

                {/* Contenido con tabs y galería */}
                <div className="flex-1 min-h-0 overflow-y-auto">
                    <div className="px-5 sm:px-6 pb-6 pt-4">
                        {project.demoNotice && (
                            <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-3 rounded-md text-[10px] sm:text-xs border border-yellow-500/20 mb-5 leading-tight">
                                ⚠️ {project.demoNotice}
                            </div>
                        )}

                        {project.problem && project.solution && (
                            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-muted/30 border border-border/50 rounded-xl p-4 shadow-sm relative overflow-hidden group/prob hover:bg-muted/50 transition-colors">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-foreground/30"></div>
                                    <h4 className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 mb-2 text-foreground">
                                        <div className="p-1 sm:p-1.5 rounded-md bg-muted shrink-0 text-foreground/80">
                                            <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                        </div>
                                        El Problema
                                    </h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                                        {project.problem}
                                    </p>
                                </div>
                                <div className="bg-muted border border-border/60 rounded-xl p-4 shadow-sm relative overflow-hidden group/sol hover:bg-muted/80 transition-colors">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-foreground/80"></div>
                                    <h4 className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 mb-2 text-foreground">
                                        <div className="p-1 sm:p-1.5 rounded-md bg-foreground/10 shrink-0 text-foreground">
                                            <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                        </div>
                                        La Solución
                                    </h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        )}

                        {project.images && project.images.length > 0 && (
                            <div className="mt-4 mb-2">
                                <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                    Galería
                                </h4>
                                <div className="flex gap-4 overflow-x-auto pb-4 snap-x pr-4">
                                    {project.images.map((img, idx) => (
                                        <div key={idx} className="relative h-40 sm:h-48 md:h-64 aspect-[4/3] rounded-lg border border-border/10 bg-muted/30 snap-center shrink-0 overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                fill
                                                className="object-contain"
                                                loading="lazy"
                                                sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 33vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <Tabs defaultValue="modules" className="mt-4">
                            <TabsList className={`w-full grid ${project.stack && project.stack.length > 0 ? "grid-cols-3" : "grid-cols-2"}`}>
                                <TabsTrigger value="modules" className="text-[10px] sm:text-xs md:text-sm px-1 sm:px-3">
                                    <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 hidden sm:block" />
                                    Módulos
                                </TabsTrigger>
                                {project.stack && project.stack.length > 0 && (
                                    <TabsTrigger value="stack" className="text-[10px] sm:text-xs md:text-sm px-1 sm:px-3">
                                        <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 hidden sm:block" />
                                        Stack
                                    </TabsTrigger>
                                )}
                                <TabsTrigger value="value" className="text-[10px] sm:text-xs md:text-sm px-1 sm:px-3">
                                    <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 sm:mr-1.5 hidden sm:block" />
                                    Impacto
                                </TabsTrigger>
                            </TabsList>

                            {/* Tab: Módulos */}
                            <TabsContent value="modules" className="mt-4 space-y-3">
                                {project.modules.map((mod, i) => (
                                    <div
                                        key={i}
                                        className="group/mod flex gap-2.5 sm:gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/60 transition-colors"
                                    >
                                        <div className={`p-1.5 sm:p-2 rounded-lg ${project.bg} shrink-0 h-fit`}>
                                            <mod.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${project.color}`} />
                                        </div>
                                        <div className="space-y-1 min-w-0">
                                            <h4 className="font-semibold text-xs sm:text-sm leading-tight">{mod.title}</h4>
                                            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                                                {mod.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            {/* Tab: Stack (condicional) */}
                            {project.stack && project.stack.length > 0 && (
                                <TabsContent value="stack" className="mt-4 space-y-4">
                                    {project.stack.map((cat, i) => (
                                        <div key={i}>
                                            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                                {cat.category}
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {cat.items.map((item) => (
                                                    <Badge
                                                        key={item}
                                                        variant="outline"
                                                        className={`${project.bg} border-transparent text-foreground/90 font-medium text-[10px] sm:text-xs`}
                                                    >
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                            {i < project.stack!.length - 1 && <Separator className="mt-4" />}
                                        </div>
                                    ))}

                                    {/* Highlights */}
                                    <Separator />
                                    <div>
                                        <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                            Destacado
                                        </h4>
                                        <div className="space-y-2">
                                            {project.highlights.map((hl, i) => (
                                                <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                                                    <CheckCircle2 className={`h-3 w-3 sm:h-3.5 sm:w-3.5 mt-0.5 shrink-0 ${project.color}`} />
                                                    <span className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                                                        {hl}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                            )}

                            {/* Tab: Impacto / Valor */}
                            <TabsContent value="value" className="mt-4 space-y-3">
                                {project.value.map((val, i) => (
                                    <div
                                        key={i}
                                        className="relative p-3 sm:p-4 rounded-lg border border-border/50 bg-gradient-to-br from-muted/40 to-transparent hover:from-muted/60 transition-colors"
                                    >
                                        <div className="flex items-start gap-2.5 sm:gap-3">
                                            <div className={`p-1.5 sm:p-2 rounded-lg ${project.bg} shrink-0`}>
                                                <val.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${project.color}`} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-semibold text-xs sm:text-sm">{val.title}</h4>
                                                <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                                                    {val.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Highlights (si no hay tab de Stack, se muestran acá) */}
                                {(!project.stack || project.stack.length === 0) && (
                                    <>
                                        <Separator />
                                        <div>
                                            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                                Destacado
                                            </h4>
                                            <div className="space-y-2">
                                                {project.highlights.map((hl, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                                                        <CheckCircle2 className={`h-3 w-3 sm:h-3.5 sm:w-3.5 mt-0.5 shrink-0 ${project.color}`} />
                                                        <span className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                                                            {hl}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Tags del proyecto */}
                                <Separator />
                                <div>
                                    <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                        {project.stack && project.stack.length > 0 ? "Tecnologías Clave" : "Enfoque"}
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="bg-background/50 backdrop-blur-sm border-primary/20 text-foreground/80 text-[10px] sm:text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: "easeOut" as const,
        },
    }),
};

/* ─── Componente principal ─── */
export function Projects() {
    const [selectedProject, setSelectedProject] = React.useState<ProjectDetail | null>(null);
    const [tappedIndex, setTappedIndex] = React.useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Close tapped state when tapping outside
    React.useEffect(() => {
        if (tappedIndex === null) return;
        const handleTouchOutside = (e: TouchEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('[data-project-card]')) {
                setTappedIndex(null);
            }
        };
        document.addEventListener('touchstart', handleTouchOutside);
        return () => document.removeEventListener('touchstart', handleTouchOutside);
    }, [tappedIndex]);

    return (
        <section id="projects" className="py-16 md:py-24 container px-5 md:px-6 mx-auto scroll-mt-10">
            <motion.div
                className="flex flex-col mb-10 md:mb-16 space-y-3 md:space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                <Badge variant="secondary" className="w-fit font-mono text-xs">
                    {"// PORTAFOLIO"}
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                    Proyectos Destacados
                </h2>
                <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed">
                    Soluciones diseñadas desde la operación hacia el código.
                </p>
            </motion.div>
            {isMobile ? (
                <Carousel className="w-full" opts={{ align: "start" }}>
                    <CarouselContent className="-ml-4">
                        {projects.map((project, i) => {
                            const isActive = tappedIndex === i;
                            return (
                                <CarouselItem key={project.title} className="pl-4 basis-[85%] sm:basis-1/2">
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        custom={i}
                                        variants={cardVariants}
                                        className="h-full"
                                    >
                                        <Card
                                            data-project-card
                                            className={`h-full group relative flex flex-col overflow-hidden border-muted bg-card/50 transition-all duration-300 flex-1 ${isActive ? 'bg-card shadow-2xl border-primary/20' : 'hover:bg-card hover:shadow-2xl hover:border-primary/20'
                                                }`}
                                            onClick={() => {
                                                if (tappedIndex !== i) {
                                                    setTappedIndex(i);
                                                }
                                            }}
                                        >
                                            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -z-10 transition-colors ${isActive ? 'bg-primary/10' : 'bg-primary/5 group-hover:bg-primary/10'
                                                }`} />
                                            <CardHeader className="pb-3 sm:pb-4">
                                                <div className="flex justify-between items-start mb-2 sm:mb-3">
                                                    <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl w-fit ${project.bg}`}>
                                                        <project.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${project.color}`} />
                                                    </div>
                                                    <Badge
                                                        variant={project.status === "Producto Principal" ? "default" : "secondary"}
                                                        className="font-mono text-[10px] sm:text-xs tracking-wider border-border/50"
                                                    >
                                                        {project.status}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-xl sm:text-2xl font-bold flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                                    {project.title}
                                                    <span className="text-muted-foreground font-normal text-[10px] sm:text-sm tracking-wider uppercase">
                                                        / {project.subtitle}
                                                    </span>
                                                </CardTitle>
                                                <CardDescription className="text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                                                    {project.description}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-1 pb-4 sm:pb-6">
                                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                                    {project.tags.map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="outline"
                                                            className="bg-background/50 backdrop-blur-sm border-primary/10 text-foreground/70 text-[10px] sm:text-xs"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="pt-0">
                                                <Button
                                                    variant="ghost"
                                                    className={`w-full justify-between transition-all font-mono text-xs sm:text-sm h-10 sm:h-11 border active:scale-[0.97] ${isActive
                                                        ? 'bg-primary text-primary-foreground border-primary/20'
                                                        : 'border-border/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary/20'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedProject(project);
                                                        setTappedIndex(null);
                                                    }}
                                                >
                                                    Ver Detalles
                                                    <ArrowUpRight className={`h-4 w-4 ml-2 transition-transform ${isActive ? 'translate-x-1 -translate-y-1' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                                                        }`} />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            custom={i}
                            variants={cardVariants}
                            className="h-full"
                        >
                            <Card className="h-full group relative flex flex-col overflow-hidden border-muted bg-card/50 hover:bg-card hover:shadow-2xl transition-all duration-300 hover:border-primary/20 flex-1">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />

                                <CardHeader className="pb-3 sm:pb-4">
                                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                                        <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl w-fit ${project.bg}`}>
                                            <project.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${project.color}`} />
                                        </div>
                                        <Badge
                                            variant={project.status === "Producto Principal" ? "default" : "secondary"}
                                            className="font-mono text-[10px] sm:text-xs tracking-wider border-border/50"
                                        >
                                            {project.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl sm:text-2xl font-bold flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                        {project.title}
                                        <span className="text-muted-foreground font-normal text-[10px] sm:text-sm tracking-wider uppercase">
                                            / {project.subtitle}
                                        </span>
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 pb-4 sm:pb-6">
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="bg-background/50 backdrop-blur-sm border-primary/10 text-foreground/70 text-[10px] sm:text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all font-mono text-xs sm:text-sm h-10 sm:h-11 border border-border/50 group-hover:border-primary/20 active:scale-[0.97] active:bg-primary/80 active:text-primary-foreground"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        Ver Detalles
                                        <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal de detalle */}
            {selectedProject && (
                isMobile ? (
                    <ProjectDetailDrawer
                        project={selectedProject}
                        open={!!selectedProject}
                        onOpenChange={(open) => {
                            if (!open) setSelectedProject(null);
                        }}
                    />
                ) : (
                    <ProjectDetailModal
                        project={selectedProject}
                        open={!!selectedProject}
                        onOpenChange={(open) => {
                            if (!open) setSelectedProject(null);
                        }}
                    />
                )
            )}
        </section>
    );
}
