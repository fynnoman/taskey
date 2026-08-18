import type { CSSProperties, ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Container = "default" | "wide" | "bleed";

type Props = {
  id?: string;
  size?: Size;
  container?: Container;
  tone?: "canvas" | "elev" | "ink" | "transparent";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const sizeClass: Record<Size, string> = {
  sm: "tk-section-sm",
  md: "tk-section",
  lg: "tk-section-lg",
};

const toneStyle: Record<NonNullable<Props["tone"]>, CSSProperties> = {
  canvas:      { background: "var(--tk-canvas)", color: "var(--tk-ink)" },
  elev:        { background: "var(--tk-canvas-elev)", color: "var(--tk-ink)" },
  ink:         { background: "var(--tk-ink)", color: "#f8fafc" },
  transparent: {},
};

/**
 * Consistent vertical rhythm + container width for redesign sections.
 * Use `container="bleed"` when the child needs full-viewport width
 * (e.g. sticky-media sections that manage their own container inside).
 */
export default function SectionShell({
  id,
  size = "md",
  container = "default",
  tone = "canvas",
  className = "",
  style,
  children,
}: Props) {
  const inner =
    container === "bleed" ? (
      children
    ) : (
      <div className={container === "wide" ? "tk-container-wide" : "tk-container"}>
        {children}
      </div>
    );

  return (
    <section
      id={id}
      className={`${sizeClass[size]} ${className}`.trim()}
      style={{ ...toneStyle[tone], ...style }}
    >
      {inner}
    </section>
  );
}
