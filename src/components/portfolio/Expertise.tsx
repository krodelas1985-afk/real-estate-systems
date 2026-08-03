import { GitBranch, MessagesSquare, Workflow, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { metrics, expertise } from "@/content/site";

const icons = {
  pipeline: GitBranch,
  conversation: MessagesSquare,
  automation: Workflow,
  property: Building2,
};

export function Metrics() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Experience snapshot"
            title="Operational experience, measured by system activity"
            intro="These figures describe operational experience and system activity inside CRMs and workflows I have managed or built. They are not personal sales, commission, or closing claims."
            tone="light"
          />
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal as="li" key={m.label} delay={i * 70} className="bg-navy p-7">
              <p className="font-display text-3xl text-cream sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{m.label}</p>
            </Reveal>
          ))}
          <li className="hidden bg-navy p-7 lg:block" aria-hidden="true" />
        </ul>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="What I help real estate teams do"
            intro="Four areas of work that keep pipelines organized and conversations moving forward."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {expertise.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <Reveal as="article" key={card.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-terracotta-soft text-terracotta">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl text-navy">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                  <div className="mt-6 h-px w-full bg-border">
                    <div className="h-px w-10 bg-terracotta transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
