import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0 bg-background/50 backdrop-blur-sm">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-3 md:px-0">
                    <Image
                        src="/brand/IB.png"
                        alt="IB Consultoría"
                        width={24}
                        height={24}
                        className="dark:invert opacity-60"
                    />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Diseñado y construido por <span className="font-semibold text-foreground">Ignacio Baldovino</span>.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/nachobaldovino" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com/in/ignaciobaldovino" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:contacto@ignaciobaldovino.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
