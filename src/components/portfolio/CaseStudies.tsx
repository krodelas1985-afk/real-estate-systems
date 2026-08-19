import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import followUpAiScreenshot from "@/assets/case-study-followup-ai.png";
import crmLeadsScreenshot from "@/assets/case-study-crm-leads.png";
import messengerInboxScreenshot from "@/assets/case-study-messenger-inbox.png";
import baymoMascot from "@/assets/baymo-mascot.png";

const stats = [
  { value: "2,274", label: "AI messages sent" },
  { value: "1,118", label: "AI Responder" },
  { value: "1,007", label: "AI Follow-up messages" },
  { value: "60.0%", label: "Replied — 671 of 1,118" },
];

const qualifySteps = [
  "New inquiry",
  "Property information",
  "Qualification questions",
  "Lead status",
  "Viewing coordination",
  "Agent handoff",
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
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream/60">
                    Early activity
                  </p>
                  <img
                    src={baymoMascot}
                    alt="BaMo, the assistant that sends these follow-ups"
                    width={192}
                    height={192}
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-full bg-cream/10 object-cover ring-1 ring-cream/20"
                  />
                </div>
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
              <figure>
                <img
                  src={followUpAiScreenshot}
                  alt="BaMo Campaign Engine Follow-Up AI dashboard showing live enrollments, messages sent, and a decision feed where each automated follow-up is listed with its reasoning. Lead names are blurred."
                  width={1894}
                  height={908}
                  loading="lazy"
                  className="w-full rounded-xl border border-border shadow-card"
                />
                <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Follow-Up AI decision feed &mdash; every automated follow-up with the reasoning
                  behind it. Lead names are blurred for privacy.
                </figcaption>
              </figure>
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
              <figure>
                <img
                  src={messengerInboxScreenshot}
                  alt="BaMo Campaign Engine inbox showing a Messenger conversation thread, where the assistant answers a pricing question with unit prices, VAT, reservation fee and down payment terms, then asks a qualifying question. Lead names are blurred."
                  width={1912}
                  height={902}
                  loading="lazy"
                  className="w-full rounded-xl border border-border shadow-card"
                />
                <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Messenger inbox &mdash; a pricing question answered with real figures, followed by
                  a qualifying question. Lead names are blurred for privacy.
                </figcaption>
              </figure>
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

            <div className="mt-8 -mx-8 sm:-mx-10">
              <figure>
                <img
                  src={crmLeadsScreenshot}
                  alt="BaMo Campaign Engine Leads board showing pipeline stage counts across New, In Contact, Qualifying, Qualified, Viewing and Nurture, above a lead table with stage, status, source, agent, campaign and next task columns. Lead names are blurred."
                  width={1902}
                  height={897}
                  loading="lazy"
                  className="w-full border-y border-border shadow-card"
                />
                <figcaption className="mt-3 px-8 text-xs leading-relaxed text-muted-foreground sm:px-10">
                  Leads board &mdash; pipeline stages, lead status, source and next task in one
                  view. Lead names are blurred for privacy.
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
