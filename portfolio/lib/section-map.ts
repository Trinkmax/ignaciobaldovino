export type SectionId = "hero" | "about" | "projects" | "skills" | "contact";

export const SECTIONS: { id: SectionId; label: string }[] = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "contact", label: "Contacto" },
];
