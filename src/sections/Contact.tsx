import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="connect" aria-label="Connect" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Let's connect
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            For professional conversations about enterprise AI, solution architecture, modernization, or software delivery, connect with me on LinkedIn or explore my work on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <Button size="lg" className="group">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Explore work on GitHub"
            >
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
