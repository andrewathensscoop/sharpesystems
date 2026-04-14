export function SharpeLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textColor = dark ? "#1a1a2e" : "#ffffff";
  return (
    <svg viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Icon mark: abstract angular S / blade */}
      <path d="M4 28L14 4h6L10 28H4Z" fill="#e63946" />
      <path d="M12 32L22 8h6L18 32h-6Z" fill="#e63946" opacity="0.6" />
      {/* SHARPE */}
      <text x="34" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="1.5" fill={textColor}>
        SHARPE
      </text>
      {/* SYSTEMS */}
      <text x="34" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400" fontSize="10" letterSpacing="2.5" fill={textColor} opacity="0.7">
        SYSTEMS
      </text>
    </svg>
  );
}
