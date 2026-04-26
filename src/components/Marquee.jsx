export function Marquee({ items, speed = 1, color, scrollY }) {
  const offset = scrollY * speed * 0.15;
  return (
    <div style={{ overflow: "hidden", padding: "10px 0" }}>
      <div style={{
        display: "flex", gap: 12, whiteSpace: "nowrap",
        animation: `marquee ${40 / Math.abs(speed)}s linear infinite ${speed < 0 ? "reverse" : ""}`,
        transform: `translateX(${offset}px)`,
        width: "max-content",
      }}>
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} style={{
            fontFamily: "'Space Grotesk', system-ui", fontSize: color.fontSize || 16, fontWeight: 500,
            padding: color.padding || "12px 22px", borderRadius: 999,
            background: color.bg, color: color.fg,
            border: `1.5px solid ${color.border}`,
            letterSpacing: 0.2,
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}
