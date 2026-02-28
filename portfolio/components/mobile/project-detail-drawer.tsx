"use client";

import Image from "next/image";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";
import { ArrowUpRight, Target, CheckCircle2, Layers, Code2, ChevronDown } from "lucide-react";
import { ProjectDetail, ProjectModule } from "@/components/projects";

export function ProjectDetailDrawer({
    project,
    open,
    onOpenChange,
}: {
    project: ProjectDetail;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    if (!project) return null;

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent
                showHandle={false}
                className="max-h-[90vh] flex flex-col gap-0 rounded-t-2xl overflow-hidden p-0 outline-none"
            >
                <div className="w-full h-full overflow-y-auto outline-none pb-safe">
                    {/* Handle sutil integrado */}
                    <div className="flex flex-col items-center pt-3 pb-1">
                        <div className="w-10 h-1 rounded-full bg-muted-foreground/20" />
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground/30 mt-0.5" />
                    </div>

                    {/* Header sin color de fondo brusco */}
                    <div className="shrink-0 px-5 pb-4">
                        <DrawerHeader className="p-0 !text-left">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-xl ${project.bg} border border-border/30`}>
                                    <project.icon className={`h-4 w-4 ${project.color}`} />
                                </div>
                                <Badge
                                    variant={project.status === "Producto Principal" ? "default" : "secondary"}
                                    className="font-mono text-[10px] tracking-wider"
                                >
                                    {project.status}
                                </Badge>
                            </div>
                            <DrawerTitle className="text-xl font-bold tracking-tight leading-tight">
                                {project.title}
                                <span className="text-muted-foreground font-normal text-sm block mt-1">
                                    {project.subtitle}
                                </span>
                            </DrawerTitle>
                            <DrawerDescription className="flex flex-col gap-3 text-xs leading-relaxed mt-3" asChild>
                                <div>
                                    <span>{project.longDescription}</span>
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 w-fit mt-2 px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-md hover:bg-primary/20 transition-colors"
                                        >
                                            Visitar Proyecto <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            </DrawerDescription>
                        </DrawerHeader>
                    </div>

                    <Separator className="mx-5" />

                    {/* Contenido con tabs y galería */}
                    <div className="px-5 pb-6 pt-4 h-full">
                        {project.demoNotice && (
                            <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-3 rounded-md text-[10px] border border-yellow-500/20 mb-5 leading-tight">
                                ⚠️ {project.demoNotice}
                            </div>
                        )}

                        {project.problem && project.solution && (
                            <div className="mb-6 flex flex-col gap-3">
                                <div className="bg-muted/30 border border-border/50 rounded-xl p-4 shadow-sm relative overflow-hidden group/prob">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-foreground/30"></div>
                                    <h4 className="text-xs font-semibold flex items-center gap-1.5 mb-2 text-foreground">
                                        <div className="p-1 rounded-md bg-muted shrink-0 text-foreground/80">
                                            <Target className="h-3 w-3" />
                                        </div>
                                        El Problema
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                                        {project.problem}
                                    </p>
                                </div>
                                <div className="bg-muted border border-border/60 rounded-xl p-4 shadow-sm relative overflow-hidden group/sol">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-foreground/80"></div>
                                    <h4 className="text-xs font-semibold flex items-center gap-1.5 mb-2 text-foreground">
                                        <div className="p-1 rounded-md bg-foreground/10 shrink-0 text-foreground">
                                            <CheckCircle2 className="h-3 w-3" />
                                        </div>
                                        La Solución
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        )}

                        {project.images && project.images.length > 0 && (
                            <div className="mt-4 mb-4">
                                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                    Galería
                                </h4>
                                <div className="flex gap-4 overflow-x-auto pb-4 snap-x pr-4">
                                    {project.images.map((img: string, idx: number) => (
                                        <div key={idx} className="relative h-40 aspect-[4/3] rounded-lg border border-border/10 bg-muted/30 snap-center shrink-0 overflow-hidden min-w-[200px]">
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <Tabs defaultValue="modules" className="mt-2 text-foreground">
                            <TabsList className={`w-full grid ${project.stack && project.stack.length > 0 ? "grid-cols-3" : "grid-cols-2"}`}>
                                <TabsTrigger value="modules" className="text-[10px] px-1">
                                    <Layers className="h-3 w-3 mr-1" /> Módulos
                                </TabsTrigger>
                                {project.stack && project.stack.length > 0 && (
                                    <TabsTrigger value="stack" className="text-[10px] px-1">
                                        <Code2 className="h-3 w-3 mr-1" /> Stack
                                    </TabsTrigger>
                                )}
                                <TabsTrigger value="value" className="text-[10px] px-1">
                                    <Target className="h-3 w-3 mr-1" /> Impacto
                                </TabsTrigger>
                            </TabsList>

                            {/* Tab: Módulos */}
                            <TabsContent value="modules" className="mt-4 space-y-3">
                                {project.modules.map((mod: ProjectModule, i: number) => (
                                    <div key={i} className="flex gap-2.5 p-3 rounded-lg border border-border/50 bg-muted/30">
                                        <div className={`p-1.5 rounded-lg ${project.bg} shrink-0 h-fit`}>
                                            <mod.icon className={`h-3.5 w-3.5 ${project.color}`} />
                                        </div>
                                        <div className="space-y-1 min-w-0">
                                            <h4 className="font-semibold text-xs leading-tight">{mod.title}</h4>
                                            <p className="text-[10px] text-muted-foreground leading-relaxed">
                                                {mod.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>

                            {/* Tab: Stack */}
                            {project.stack && project.stack.length > 0 && (
                                <TabsContent value="stack" className="mt-4 space-y-3">
                                    {project.stack.map((group, i: number) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground pl-1">
                                                {group.category}
                                            </h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {group.items.map((item: string) => (
                                                    <Badge key={item} variant="secondary" className="bg-muted/50 text-[10px] text-foreground/80 hover:bg-muted/80">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>
                            )}

                            {/* Tab: Value */}
                            <TabsContent value="value" className="mt-4 space-y-3">
                                {project.value.map((val, i: number) => (
                                    <div key={i} className="relative p-3 rounded-lg border border-border/50 bg-gradient-to-br from-muted/40 to-transparent">
                                        <div className="flex items-start gap-2.5">
                                            <div className={`p-1.5 rounded-lg ${project.bg} shrink-0`}>
                                                <val.icon className={`h-3.5 w-3.5 ${project.color}`} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-semibold text-xs">{val.title}</h4>
                                                <p className="text-[10px] text-muted-foreground leading-relaxed">
                                                    {val.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>

                        {/* Tags del proyecto */}
                        <Separator className="my-4" />
                        <div>
                            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                {project.stack && project.stack.length > 0 ? "Tecnologías Clave" : "Enfoque"}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag: string) => (
                                    <Badge key={tag} variant="outline" className="bg-background/50 border-primary/20 text-foreground/80 text-[10px]">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

