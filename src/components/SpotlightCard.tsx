import { useRef, type ReactNode, type CSSProperties, type MouseEvent } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "article" | "li";
};

/**
 * Card with a pointer-tracked spotlight + glow border.
 * Uses CSS custom properties so no React re-render happens on move.
 */
const SpotlightCard = ({ children, className = "", style, as = "div" }: SpotlightCardProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`spotlight-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
    >
      {children}
    </Tag>
  );
};

export default SpotlightCard;
