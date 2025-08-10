import heroImg from "@/assets/dhiman-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Linkedin } from "lucide-react";
import { site } from "@/data/site";
import { useEffect, useRef } from "react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty("--rx", `${(-y / 60).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x / 60).toFixed(2)}deg`);
    };
    const leave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    };
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section id="hero" aria-label="Hero" className="relative isolate border-b">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">{site.titleTagline}</p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Architecting scalable, impact-driven systems
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground">
              CGI Partner and full-stack expert building AI- and agent-powered experiences across web and cloud
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" aria-label="View Projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href={site.resumeUrl} aria-label="Download Resume">
                <Button variant="hero" size="lg">
                  <Download /> Download Resume
                </Button>
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Button variant="outline" size="lg">
                  <Linkedin /> Connect
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{site.quickFacts}</p>
          </div>
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
            <div
              ref={cardRef}
              className="rounded-xl border bg-card p-2 shadow-[var(--shadow-elegant)] transition-transform [transform:perspective(800px)_rotateX(var(--rx))_rotateY(var(--ry))]"
            >
              <img
                src={heroImg}
                width={512}
                height={512}
                loading="eager"
                alt="Professional placeholder portrait for Dhiman Manji"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
