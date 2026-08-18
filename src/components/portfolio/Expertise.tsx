import { GitBranch, MessagesSquare, Workflow, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { experienceFlow, expertise } from "@/content/site";

const icons = {
  pipeline: GitBranch,
  conversation: MessagesSquare,
  automation: Workflow,
  property: Building2,
};

export function ExperienceSnapshot() {
  const { eyebrow, title, intro, steps } = experienceFlow;

  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} tone="light" />
        </Reveal>

        <ol className="mt-14 grid lg:grid-cols-5">
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;
            return (
              <Reveal
                as="li"
                key={s.marker}
                delay={i * 90}
                className="group relative pb-10 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-8 lg:last:pr-0"
              >
                {/* connector rail */}
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[7px] top-5 -bottom-[9px] w-px bg-cream/15 lg:left-4 lg:right-0 lg:top-[7px] lg:bottom-auto lg:h-px lg:w-auto"
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[9px] grid h-[15px] w-[15px] place-items-center rounded-full border border-terracotta/70 bg-navy transition-colors duration-300 group-hover:border-terracotta lg:top-0"
                >
                  <span className="h-[5px] w-[5px] rounded-full bg-terracotta" />
                </span>

                <div className="lg:pt-8">
                  <p className="font-display text-xs tracking-[0.2em] text-cream/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-cream sm:text-2xl">
                    {s.marker}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-snug text-terracotta">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
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
