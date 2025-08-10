import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6">
          {site.projects.map((p) => (
            <Card key={p.id} className="overflow-hidden transition-shadow hover:shadow-[var(--shadow-elegant)]">
              <div className="grid gap-6 p-4 sm:grid-cols-[320px,1fr] sm:p-6">
                <div>
                  <img
                    src={p.image}
                    alt={`${p.title} thumbnail`}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-auto w-full rounded-md border object-cover"
                  />
                </div>
                <div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl">{p.title}</CardTitle>
                    <CardDescription className="mt-1 text-sm">{p.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-3 p-0">
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                    {p.impact && (
                      <p className="mt-3 text-sm italic text-foreground">“{p.impact}”</p>
                    )}
                    {p.team && (
                      <p className="mt-2 text-xs text-muted-foreground">{p.team}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                    {Array.isArray((p as any).techLines) ? (
                      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                        {(p as any).techLines.map((t: string, i: number) => (
                          <p key={i}>{t}</p>
                        ))}
                      </div>
                    ) : (
                      p.techStack && (
                        <p className="mt-3 text-xs text-muted-foreground">{p.techStack}</p>
                      )
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
                        aria-label={`Open ${p.title}`}
                      >
                        View details
                      </a>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
