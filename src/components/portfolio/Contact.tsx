import { Calendar, Mail, Linkedin, Download } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact } from "@/content/site";

export function Contact() {
  const actions = [
    { label: "Schedule a Call", href: contact.schedulingUrl, icon: Calendar, primary: true },
    { label: "Send an Email", href: `mailto:${contact.email}`, icon: Mail },
    { label: "Connect on LinkedIn", href: contact.linkedin, icon: Linkedin },
    { label: "Download Resume", href: contact.resumeUrl, icon: Download },
  ];

  return (
    <section id="contact" className="bg-navy py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Contact</p>
            <h2 className="mt-4 text-3xl leading-tight text-cream sm:text-4xl">
              Need someone who understands both real estate operations and automation?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70">
              Whether you need help managing your real estate pipeline, improving follow-up,
              documenting your workflow, or building a more dependable CRM system, I'd be glad to
              discuss your current process.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {actions.map(({ label, href, icon: Icon, primary }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    primary
                      ? "bg-terracotta text-cream"
                      : "border border-cream/20 bg-cream/5 text-cream hover:border-terracotta"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-cream/50">
            Email, LinkedIn, scheduling link, and resume file are placeholders — update them in{" "}
            <code>src/content/site.ts</code>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-page grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0">
          <p className="font-display text-lg text-navy">{contact.shortName}</p>
          <p className="mt-1 text-sm text-muted-foreground">{contact.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-navy">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-terracotta"
          >
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-terracotta">
            Email
          </a>
          <span className="text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
