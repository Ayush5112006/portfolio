import Reveal from "./Reveal";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

/** Shared section header: eyebrow → gradient title → subtitle, revealed on scroll. */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) => (
  <Reveal
    className={`section-header ${align === "center" ? "text-center" : ""} ${className}`}
    y={24}
    blur={8}
  >
    {eyebrow && <span className={`eyebrow ${align === "center" ? "ml-auto mr-auto" : ""}`}>{eyebrow}</span>}
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
