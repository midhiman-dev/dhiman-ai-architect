import { site } from "@/data/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = [
  { id: "approach", label: "Approach" },
  { id: "work", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "connect", label: "Connect" },
];

export default function Navbar() {
  const activeSection = useScrollSpy(
    ["hero", ...sections.map((s) => s.id)],
    120
  );
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setOpen(false);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = scrollY < 150 ? "" : activeSection;

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2" aria-label="Go to top">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] shadow-[var(--shadow-soft)]" />
          <span className="hidden text-sm font-semibold sm:inline">{site.name}</span>
        </a>
        <button className="sm:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul className={cn("hidden items-center gap-1 sm:flex")}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active === s.id ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Button variant="outline" size="sm">LinkedIn</Button>
            </a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="border-t bg-background sm:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors",
                    active === s.id ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
