type Props = {
  size?: number;
  className?: string;
  /** Show the gradient rounded-square container chip (favicon / standalone use). */
  chip?: boolean;
};

/**
 * Navvic brand mark — a shipping container reduced to its corrugated ridges.
 *
 * `chip={false}` (default): glyph only, inherits `currentColor` for strokes.
 * Use inside an existing colored badge (e.g. the navbar chip).
 *
 * `chip`: self-contained gradient rounded square with a white container —
 * use as a favicon, app icon, or anywhere a standalone logo is needed.
 */
export default function NavvicMark({ size = 24, className, chip = false }: Props) {
  if (chip) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="navvic-chip" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22a7c9" />
            <stop offset="1" stopColor="#0a2540" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#navvic-chip)" />
        <rect
          x="13"
          y="22"
          width="38"
          height="20"
          rx="3"
          stroke="#ffffff"
          strokeWidth="3.4"
        />
        <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
          <line x1="22" y1="27.5" x2="22" y2="36.5" />
          <line x1="29" y1="27.5" x2="29" y2="36.5" />
          <line x1="35" y1="27.5" x2="35" y2="36.5" />
          <line x1="42" y1="27.5" x2="42" y2="36.5" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="11"
        y="21"
        width="42"
        height="22"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="4"
      />
      <g stroke="currentColor" strokeWidth="3.4" strokeLinecap="round">
        <line x1="21" y1="27" x2="21" y2="37" />
        <line x1="28.5" y1="27" x2="28.5" y2="37" />
        <line x1="36" y1="27" x2="36" y2="37" />
        <line x1="43.5" y1="27" x2="43.5" y2="37" />
      </g>
    </svg>
  );
}
