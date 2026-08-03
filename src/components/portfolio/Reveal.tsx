import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          tone === "light" ? "text-terracotta" : "text-terracotta"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${
          tone === "light" ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            tone === "light" ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
