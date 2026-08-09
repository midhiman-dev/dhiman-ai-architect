import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" aria-label="Professional Context" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Professional Context
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            {site.summary}
          </p>
          <p>
            My architecture practice centers on brownfield realism: bringing intelligent capabilities into complex enterprise environments where existing systems, security boundaries, regulatory constraints, and human authority matter most. Rather than chasing standalone AI novelties, I focus on system integration, deterministic controls, and verifiable delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
