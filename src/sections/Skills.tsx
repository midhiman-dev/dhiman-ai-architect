import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article>
            <h3 className="text-sm font-medium text-muted-foreground">Tech</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.skills.tech.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </article>
          <article>
            <h3 className="text-sm font-medium text-muted-foreground">Cloud / AI</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.skills.cloudAi.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
