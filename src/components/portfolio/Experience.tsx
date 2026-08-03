import { Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { experienceDuties, bamoAreas } from "@/content/site";
import bamoLogo from "@/assets/bamo-logo.png.asset.json";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Professional experience"
            title="Inside real estate operations since 2017"
          />
        </Reveal>

        <div className="mt-14 space-y-14 border-l border-border pl-6 sm:pl-10">
          <Reveal as="article" className="relative">
            <span
              className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full bg-terracotta ring-4 ring-background sm:-left-[2.85rem]"
              aria-hidden="true"
            />
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h3 className="text-2xl text-navy">Real Estate Operations Specialist</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  U.S. Real Estate · 2017–Present
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Working alongside U.S.-based real estate professionals and teams on the daily
                  operations behind every lead: outreach, notes, tasks, appointments, and handoff.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {experienceDuties.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-navy shadow-card"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    <span className="min-w-0">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal as="article" className="relative">
            <span
              className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full bg-terracotta ring-4 ring-background sm:-left-[2.85rem]"
              aria-hidden="true"
            />
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-2xl text-navy">Founder and Product Builder</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    BaMo · Philippine Real Estate Technology
                  </p>
                </div>
                <img src={bamoLogo.url} alt="BaMo logo" width={140} height={44} className="h-8 w-auto shrink-0" />
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                BaMo is a Philippine real estate operations platform designed to help agents manage
                listings, campaigns, inquiries, qualification, follow-up, and daily lead activity.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {bamoAreas.map((a, i) => (
                  <div key={a.title} className="relative rounded-2xl bg-secondary p-6">
                    <span className="font-display text-sm text-terracotta">0{i + 1}</span>
                    <h4 className="mt-2 font-semibold text-navy">{a.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                BaMo is where I take a real business problem, design a working process, build the
                system behind it, test it with real lead activity, and improve it using the data that
                comes back.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
