import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { ExperienceSnapshot, Expertise } from "@/components/portfolio/Expertise";
import { Experience } from "@/components/portfolio/Experience";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Process, Tools, About } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Kathy Rodelas Talabis | Real Estate Operations & CRM Automation";
const description =
  "Real estate operations, CRM and workflow automation specialist helping teams organize leads, improve follow-up, and build dependable systems since 2017.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kathy Rodelas Talabis",
          jobTitle: "Real Estate Operations, CRM & Workflow Automation Specialist",
          address: { "@type": "PostalAddress", addressCountry: "PH" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ExperienceSnapshot />
        <Expertise />
        <Experience />
        <CaseStudies />
        <Process />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
