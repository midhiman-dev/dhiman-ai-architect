import { site } from "@/data/site";
import { Building2, Cpu, UserCheck, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "enterprise-fitment": Building2,
  "deterministic-core": Cpu,
  "human-authority": UserCheck,
  "verification-first": CheckCircle2,
};

export default function StatsRow() {
  return (
    <section id="approach" aria-label="Architecture Signature" className="scroll-mt-28 border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Architecture Signature
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.architectureSignature.map((p) => {
            const Icon = iconMap[p.id] || CheckCircle2;
            return (
              <div
                key={p.id}
                className="flex flex-col justify-between rounded-lg border bg-card p-4 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
