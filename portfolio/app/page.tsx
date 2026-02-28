import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

// Lazy-load below-the-fold sections to reduce initial JS bundle
// and speed up hydration on mobile Safari
const About = dynamic(() => import("@/components/about").then(m => ({ default: m.About })), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/projects").then(m => ({ default: m.Projects })), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/skills").then(m => ({ default: m.Skills })), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/contact").then(m => ({ default: m.Contact })), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Projects />
        </Suspense>
        <Suspense>
          <Skills />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
