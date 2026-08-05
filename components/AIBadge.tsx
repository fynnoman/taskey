type Size = "sm" | "xs";
type Position = "corner" | "bottom-center";

export default function AIBadge({
  size = "sm",
  position = "corner",
  className = "",
}: {
  size?: Size;
  position?: Position;
  className?: string;
}) {
  const sizing =
    size === "xs"
      ? "px-2 py-0.5 text-[9px]"
      : "px-2.5 py-1 text-[10px]";

  const placement =
    position === "bottom-center"
      ? "bottom-2 left-1/2 -translate-x-1/2"
      : "bottom-2 right-2";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 inline-flex items-center rounded-full bg-black/50 font-medium tracking-wide text-white/80 ring-1 ring-white/15 backdrop-blur-md ${placement} ${sizing} ${className}`}
    >
      KI-generiert
    </span>
  );
}
