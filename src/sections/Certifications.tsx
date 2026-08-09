import { site } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Award } from "lucide-react";

export default function Certifications() {
  const activeCerts = site.certifications.filter(
    (c) => !c.status || c.status === "active"
  );
  const previousCerts = site.certifications.filter(
    (c) => c.status === "previous"
  );

  return (
    <section id="certifications" aria-label="Professional Credentials" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Professional Credentials
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Current industry certifications validating AI leadership, cloud strategy, and modern software engineering.
        </p>

        {/* Active Credentials Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {activeCerts.map((c) => (
            <Card key={c.title} className="border bg-card p-4 transition-shadow hover:shadow-sm">
              <CardHeader className="flex-row items-center gap-2.5 p-0">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                <CardTitle className="text-base font-semibold leading-tight text-foreground">
                  {c.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0">
                <p className="text-xs leading-relaxed text-muted-foreground">{c.context}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Previous Credentials */}
        {previousCerts.length > 0 && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Previous Certification
            </h3>
            <div className="mt-3">
              {previousCerts.map((c) => (
                <div key={c.title} className="flex items-start gap-2.5 rounded-lg border border-dashed bg-muted/20 p-3.5">
                  <Award className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{c.title}</p>
                    <p className="text-xs text-muted-foreground/80 mt-0.5">{c.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
