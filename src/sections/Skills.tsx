import { site } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes, Cpu, Cloud } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Enterprise Application Architecture",
      icon: Boxes,
      items: site.architectureCapabilities.enterpriseArchitecture,
    },
    {
      title: "AI Systems",
      icon: Cpu,
      items: site.architectureCapabilities.aiSystems,
    },
    {
      title: "Cloud & Delivery",
      icon: Cloud,
      items: site.architectureCapabilities.cloudDelivery,
    },
  ];

  return (
    <section id="capabilities" aria-label="Architecture Capabilities" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Architecture Capabilities
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Core technical domains, architectural patterns, and execution scope across enterprise systems.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <Card key={g.title} className="flex flex-col justify-between border bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <CardTitle className="text-base font-semibold leading-tight">
                      {g.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
