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
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Hide navbar when scrolling down, show when scrolling up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Add blur/border effect when not at top
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre mí", href: "#about" },
        { name: "Proyectos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md border-b supports-[backdrop-filter]:bg-background/60 shadow-sm"
                    : "bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
                <Link href="#hero" className="flex items-center space-x-2 group">
                    <Image
                        src="/brand/IB.png"
                        alt="IB Consultoría"
                        width={30}
                        height={30}
                        className="dark:invert transition-transform duration-300 group-hover:scale-110 sm:w-8 sm:h-8"
                    />
                    <span className="font-mono text-base sm:text-lg font-bold tracking-tighter hidden sm:inline-block">
                        I.B.
                    </span>
                </Link>
                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs sm:text-sm font-mono text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-1 pl-4 border-l border-border/50 ml-2">
                        <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-9 sm:h-9" asChild>
                            <Link href="https://github.com/nachobaldovino" target="_blank">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 sm:w-9 sm:h-9" asChild>
                            <Link href="https://linkedin.com/in/ignaciobaldovino" target="_blank">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="w-9 h-9">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                        <SheetHeader>
                            <SheetTitle className="text-left font-mono">// NAVEGACIÓN</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-mono transition-colors hover:text-primary active:scale-95 duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50">
                                <Link
                                    href="https://github.com/nachobaldovino"
                                    target="_blank"
                                    className="p-2 bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                                >
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/ignaciobaldovino"
                                    target="_blank"
                                    className="p-2 bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="mailto:contacto@ignaciobaldovino.com"
                                    target="_blank"
                                    className="p-2 bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                                >
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.nav>
    );
}
