import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="relative isolate border-b">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-4xl px-4 pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div>
          <p className="text-sm font-semibold tracking-wide text-muted-foreground">
            {site.employerRole}
          </p>
          <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {site.positioning}
          </h1>
          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
            {site.focusLine}
          </p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {site.deliveryLine}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" aria-label="View Selected Work">
              <Button size="lg" className="group">
                View Selected Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
