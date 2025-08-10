import { site } from "@/data/site";
import { BadgeCheck, Cpu, Layers, MapPin, Boxes } from "lucide-react";

const iconMap = {
  Layers,
  Cpu,
  Boxes,
  MapPin,
};

export default function StatsRow() {
  return (
    <section aria-label="Stats and proof" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {site.stats.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || BadgeCheck;
            return (
              <li key={s.label} className="rounded-lg border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm">
                  <Icon className="text-primary" />
                  <span>{s.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <BadgeCheck className="size-4" />
          <span>Microsoft Azure AI Engineer Associate</span>
          <span>•</span>
          <BadgeCheck className="size-4" />
          <span>Google Cloud Digital Leader</span>
        </div>
      </div>
    </section>
  );
}
