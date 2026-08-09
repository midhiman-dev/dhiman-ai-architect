import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const flagship = site.architectureEvidence.filter(
    (e) => e.tier === "flagship"
  );
  const supporting = site.architectureEvidence.filter(
    (e) => e.tier === "supporting"
  );

  return (
    <section id="work" aria-label="Selected Architecture Evidence" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Selected Architecture Evidence
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Working systems and reference implementations showing how I apply architecture principles to AI-enabled and enterprise workflows.
        </p>

        {/* Flagship Evidence Cards */}
        <div className="mt-8 space-y-6">
          {flagship.map((e) => (
            <Card key={e.id} className="border bg-card p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {e.title}
                    </CardTitle>
                    {e.status && (
                      <Badge variant="outline" className="text-xs font-normal border-amber-500/40 text-amber-700 dark:text-amber-400">
                        {e.status}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {e.subtitle}
                  </p>
                </div>
                {e.githubUrl && (
                  <a
                    href={e.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                    aria-label={`View repository for ${e.title}`}
                  >
                    View repository <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Architecture Signal */}
              <div className="mt-4 rounded-md border-l-2 border-primary bg-muted/40 px-3.5 py-2.5 text-xs font-medium leading-relaxed text-foreground sm:text-sm">
                <span className="font-semibold uppercase tracking-wider text-muted-foreground text-[10px] block mb-0.5">
                  Architecture Signal
                </span>
                {e.architectureSignal}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {e.summary}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Architectural Evidence
                  </h4>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-muted-foreground">
                    {e.evidence.slice(0, 3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                {e.technologies && e.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Architecture & Stack
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {e.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[11px] font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Supporting Evidence Grid */}
        {supporting.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Secondary & Tooling Evidence
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {supporting.map((e) => (
                <Card key={e.id} className="flex flex-col justify-between border bg-card p-5 shadow-sm">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg font-bold text-foreground">
                        {e.title}
                      </CardTitle>
                      {e.githubUrl && (
                        <a
                          href={e.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary underline-offset-4 hover:underline"
                          aria-label={`View repository for ${e.title}`}
                        >
                          View repository <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-primary">
                      {e.subtitle}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {e.summary}
                    </p>
                    <ul className="mt-3 space-y-1 list-disc list-inside text-xs text-muted-foreground">
                      {e.evidence.slice(0, 3).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
