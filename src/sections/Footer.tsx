import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <nav className="flex items-center gap-4" aria-label="Footer Navigation">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a href="#hero" className="transition-colors hover:text-foreground">
              Back to top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
