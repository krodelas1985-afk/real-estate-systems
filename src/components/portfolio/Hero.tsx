import { ArrowRight, Download, Users, MessageSquare, ListChecks, CalendarCheck, Bot } from "lucide-react";
import headshot from "@/assets/kathy-headshot.png.asset.json";
import { contact } from "@/content/site";

const nodes = [
  { icon: Users, label: "Leads" },
  { icon: MessageSquare, label: "Conversations" },
  { icon: ListChecks, label: "CRM tasks" },
  { icon: Bot, label: "Follow-ups" },
  { icon: CalendarCheck, label: "Appointments" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-terracotta-soft/60 blur-3xl"
      />
      <div className="container-page relative grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">

        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Real estate operations experience since 2017
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] text-navy sm:text-5xl xl:text-[3.5rem]">
            Real Estate Operations, CRM &amp; Workflow Automation Specialist
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I help real estate teams organize leads, improve follow-up, automate repetitive work, and
            turn scattered processes into systems that support more conversations, appointments, and
            closings.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 bg-card px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Let's Talk
            </a>
            <a
              href={contact.resumeUrl}
              className="inline-flex items-center gap-2 px-1 py-2 text-sm font-semibold text-navy-soft underline underline-offset-4 transition-colors hover:text-terracotta"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>

        <div className="reveal is-visible relative" style={{ animationDelay: "120ms" }}>
          <div className="mx-auto max-w-md">
            <div className="relative">
              <div className="absolute inset-x-6 bottom-6 top-10 rounded-[2rem] bg-navy" aria-hidden="true" />
              <img
                /* Replace this file to swap in a new headshot. */
                src={headshot.url}
                alt="Portrait of Kathy Rodelas Talabis"
                width={1024}
                height={951}
                loading="eager"
                className="relative z-10 w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="relative z-20 mt-8 rounded-2xl border border-border bg-card p-4 shadow-lift">

              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                How the work connects
              </p>
              <ul className="mt-3 space-y-2">
                {nodes.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-navy">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-navy">{label}</span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${i === nodes.length - 1 ? "bg-signal" : "bg-terracotta"}`}
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                Every inquiry stays connected to an agent, a task, and a next step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
