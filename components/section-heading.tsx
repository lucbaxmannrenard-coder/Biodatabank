import { Reveal } from "./reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "cream";
}) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "cream" ? "text-flame-400" : "text-flame-600";
  const titleColor = tone === "cream" ? "text-cream" : "text-ink";
  const introColor = tone === "cream" ? "text-petrol-100/80" : "text-ink-soft";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className={`text-eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className={`text-h2 mt-4 ${titleColor}`}>{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-lg leading-relaxed ${introColor}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
