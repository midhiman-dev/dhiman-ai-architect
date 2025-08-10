import { site } from "@/data/site";

export default function Volunteering() {
  return (
    <section id="volunteering" aria-label="Volunteering" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Volunteering</h2>
        <ul className="mt-4 list-inside list-disc space-y-1 text-muted-foreground">
          {site.volunteering.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
