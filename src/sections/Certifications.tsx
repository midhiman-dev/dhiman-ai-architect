import { site } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" aria-label="Certifications" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {site.certifications.map((c) => (
            <Card key={c.title} className="transition-shadow hover:shadow-[var(--shadow-soft)]">
              <CardHeader className="flex-row items-center gap-2">
                <BadgeCheck className="text-primary" />
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.context}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
