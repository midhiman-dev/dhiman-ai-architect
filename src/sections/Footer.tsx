export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dhiman Manji</p>
          <nav className="flex items-center gap-4" aria-label="Footer">
            <a href="https://www.linkedin.com/in/dmanji" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="#hero" className="hover:text-foreground">Back to top</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
