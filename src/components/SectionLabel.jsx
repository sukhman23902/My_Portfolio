export function SectionLabel({ num, label, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
      <span style={{ width: 10, height: 10, borderRadius: 999, background: color }} />
      <span style={{ fontFamily: "'Space Grotesk', system-ui", fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(17,17,17,0.6)" }}>
        {num} — {label}
      </span>
    </div>
  );
}
