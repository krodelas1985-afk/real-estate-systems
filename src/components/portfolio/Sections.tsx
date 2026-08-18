import { Reveal, SectionHeading } from "./Reveal";
import { processSteps, toolGroups, aboutParagraphs, aboutFacts } from "@/content/site";
import headshot from "@/assets/kathy-headshot.png";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Working process" title="How I approach a real estate workflow" />
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="font-display text-sm font-semibold text-terracotta">{s.step}</span>
                <h3 className="mt-3 text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
              {i < processSteps.length - 1 ? (
                <span
                  className="absolute right-[-1.1rem] top-1/2 hidden h-px w-6 bg-terracotta lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <blockquote className="mt-12 max-w-3xl border-l-2 border-terracotta pl-6 font-display text-lg leading-relaxed text-navy sm:text-xl">
            "I do not automate a process simply because it can be automated. I first understand how the
            real estate team works, where leads are being lost, and where automation can provide
            practical support."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export function Tools() {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Tools and platforms"
            title="Organized by what they're used for"
            intro="A practical operator's toolkit — chosen to solve operational problems, not to collect logos."
            tone="light"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-cream/15 bg-cream/5 p-7">
                <h3 className="text-base font-semibold text-cream">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-cream/15 px-3 py-1.5 text-xs font-medium text-cream/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-x-4 bottom-4 top-8 rounded-[1.75rem] bg-terracotta-soft" aria-hidden="true" />
            <img
              src={headshot}
              alt="Kathy Rodelas Talabis"
              width={1024}
              height={951}
              loading="lazy"
              className="relative z-10 w-full rounded-[1.75rem] object-cover"
            />
          </div>
          <ul className="mt-8 space-y-2">
            {aboutFacts.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm font-medium text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading eyebrow="About" title="Real estate first, automation second" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
