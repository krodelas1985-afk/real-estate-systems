import { ImageIcon, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-44 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-navy/25 bg-secondary/70 p-6 text-center">
      <ImageIcon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm font-semibold text-navy">Screenshot placeholder</p>
      <p className="max-w-xs text-xs text-muted-foreground">{label} — replace with a real screenshot.</p>
    </div>
  );
}

const stats = [
  { value: "62", label: "Distinct leads followed up" },
  { value: "154", label: "Follow-up messages sent" },
  { value: "25.8%", label: "Of contacted leads replied" },
  { value: "Built in", label: "Escalation and stopping rules" },
];

const qualifySteps = [
  "New inquiry",
  "Property information",
  "Qualification questions",
  "Lead status",
  "Viewing coordination",
  "Agent handoff",
];

const crmChain = [
  "New inquiries",
  "Conversation history",
  "Lead status",
  "Follow-up tasks",
  "Appointments",
  "Agent handoff",
  "Performance review",
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-secondary/60 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="Systems built inside real estate workflows"
            intro="Each system started with a problem an agent was living with every day. Figures shown are early operational results from live activity, not guaranteed future performance."
          />
        </Reveal>

        {/* Case study 1 */}
        <Reveal as="article" className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                  Case Study 01
                </p>
                <h3 className="mt-3 text-2xl text-navy sm:text-3xl">AI Lead Follow-Up System</h3>

                <div className="mt-7 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">Problem</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Real estate leads were not always receiving consistent follow-up, especially when
                      agents were busy with calls, viewings, and other clients.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">System</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      A workflow was created to review lead activity, decide whether follow-up was
                      appropriate, send controlled follow-up messages, escalate important conversations,
                      and stop when a lead opted out or completed the process.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
                      Kathy's role
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Workflow planning, CRM logic, prompt development, testing, performance monitoring,
                      and process improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border bg-navy p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">
                  Early activity
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-2xl text-cream">{s.value}</dd>
                      <p className="mt-1 text-xs leading-relaxed text-cream/65">{s.label}</p>
                    </div>
                  ))}
                </dl>
                <p className="mt-8 rounded-xl bg-cream/10 p-4 text-xs leading-relaxed text-cream/70">
                  Early operational results from live workflow activity. Not a guarantee of future
                  performance.
                </p>
              </div>
            </div>
            <div className="border-t border-border p-6 sm:p-8">
              <ScreenshotPlaceholder label="Follow-up workflow run history" />
            </div>
          </div>
        </Reveal>

        {/* Case study 2 */}
        <Reveal as="article" className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
              Case Study 02
            </p>
            <h3 className="mt-3 text-2xl text-navy sm:text-3xl">Messenger Lead Qualification</h3>

            <ol className="mt-8 grid gap-3 md:grid-cols-3">
              {qualifySteps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/60 p-4"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-xs font-semibold text-cream">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-medium text-navy">{s}</span>
                  {i < qualifySteps.length - 1 ? (
                    <ArrowRight className="h-4 w-4 shrink-0 text-terracotta" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy">
                  The system assists with
                </h4>
                <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Responding to inquiries",
                    "Providing approved property information",
                    "Asking qualifying questions",
                    "Organizing lead details",
                    "Identifying lead temperature",
                    "Supporting viewing or site-visit scheduling",
                    "Notifying the agent when human attention is needed",
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ScreenshotPlaceholder label="Messenger qualification conversation" />
            </div>
          </div>
        </Reveal>

        {/* Case study 3 */}
        <Reveal as="article" className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
              Case Study 03
            </p>
            <h3 className="mt-3 text-2xl text-navy sm:text-3xl">Real Estate CRM Operations</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A structured CRM process keeps every stage connected, so serious opportunities do not
              become buried in messages, spreadsheets, or incomplete task lists.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-2">
              {crmChain.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm font-medium text-navy">
                    {c}
                  </span>
                  {i < crmChain.length - 1 ? (
                    <span className="h-px w-4 bg-terracotta" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ScreenshotPlaceholder label="CRM pipeline and task board" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
