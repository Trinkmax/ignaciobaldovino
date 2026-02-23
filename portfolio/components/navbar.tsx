"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <Image
                        src="/brand/IB.png"
                        alt="IB Consultoría"
                        width={36}
                        height={36}
                        className="dark:invert transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="font-bold text-lg tracking-tighter hidden sm:inline">IB</span>
                </Link>
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-2 pl-4 border-l ml-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://github.com/nachobaldovino" target="_blank">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://linkedin.com/in/ignaciobaldovino" target="_blank">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                    </div>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menú</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium transition-colors hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                                <Link href="https://github.com/nachobaldovino" target="_blank" className="text-muted-foreground hover:text-foreground">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href="https://linkedin.com/in/ignaciobaldovino" target="_blank" className="text-muted-foreground hover:text-foreground">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link href="mailto:contacto@ignaciobaldovino.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
