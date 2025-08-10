import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [timeStart, setTimeStart] = useState<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  useEffect(() => setTimeStart(Date.now()), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!timeStart || Date.now() - timeStart < 3000) {
      toast({ title: "Hold on", description: "Please take a moment before submitting." });
      return;
    }
    if (honeypotRef.current?.value) {
      return; // silently drop spam
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast({ title: "Missing fields", description: "Please complete all required fields." });
      return;
    }

    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 600));
      toast({ title: "Message sent", description: "Thanks! I'll get back to you soon." });
      form.reset();
      setTimeStart(Date.now());
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-28 border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold">Let’s connect</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:max-w-lg" aria-describedby="contact-info">
          <div className="sr-only" aria-live="polite" id="contact-info">Contact form with basic validation and spam protection.</div>
          <input type="text" name="company" ref={honeypotRef} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={5} />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send message"}</Button>
            <a href="https://www.linkedin.com/in/dmanji" target="_blank" rel="noreferrer" className="text-sm text-primary underline-offset-4 hover:underline">LinkedIn</a>
            <span className="text-sm text-muted-foreground">Bengaluru, India</span>
          </div>
        </form>
      </div>
    </section>
  );
}
