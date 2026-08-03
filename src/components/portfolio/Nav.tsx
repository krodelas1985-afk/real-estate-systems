import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border/70 bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="container-page grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between"
      >
        <a href="#home" className="min-w-0 truncate font-display text-lg font-semibold text-navy">
          Kathy Rodelas
          <span className="ml-2 hidden text-xs font-sans font-medium uppercase tracking-[0.16em] text-muted-foreground lg:inline">
            Real Estate Ops
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy-soft transition-colors hover:text-terracotta"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream shadow-card transition-transform hover:-translate-y-0.5 hover:bg-navy-soft"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-cream"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
