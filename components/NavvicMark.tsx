type Props = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/**
 * Navvic "Wave Chevrons" mark — the double-v of NaVVic rendered as two
 * cresting waves / forward chevrons. Inherits color via `currentColor`.
 */
export default function NavvicMark({ size = 22, className, strokeWidth = 4.6 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 26 L32 14 L50 26"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 38 L32 26 L50 38"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 50 L32 38 L50 50"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
