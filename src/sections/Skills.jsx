import { SectionLabel } from '../components/SectionLabel';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Skills({ data }) {
  const { mobile, tablet } = useBreakpoint();

  const sidePad = mobile ? 16 : tablet ? 32 : 48;

  const palettes = [
    { bg: "oklch(0.96 0.02 150)", fg: "#111", border: "oklch(0.75 0.08 150)" },
    { bg: "oklch(0.55 0.28 295)", fg: "white", border: "oklch(0.55 0.28 295)" },
    { bg: "oklch(0.96 0.03 40)", fg: "#111", border: "oklch(0.75 0.1 40)" },
    { bg: "oklch(0.96 0.02 230)", fg: "#111", border: "oklch(0.75 0.08 230)" },
    { bg: "#111", fg: "#F9F7F2", border: "#111" },
  ];

  const pillFontSize = mobile ? 13 : tablet ? 15 : 16;
  const pillPadding = mobile ? "8px 14px" : tablet ? "10px 18px" : "12px 22px";

  return (
    <section id="skills" style={{ padding: mobile ? "30px 0" : tablet ? "30px 0" : "40px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${sidePad}px ${mobile ? 24 : tablet ? 36 : 48}px` }}>
        <SectionLabel num="04" label="Stack" color="oklch(0.65 0.18 145)" />
        <h2 style={{
          fontFamily: "'Grandstander', system-ui", fontWeight: 700,
          fontSize: "clamp(40px, 6vw, 88px)", letterSpacing: -2,
          margin: 0, lineHeight: 0.95, maxWidth: 900,
          color: "#111",
        }}>
          Tools of the <em style={{ fontStyle: "italic", color: "oklch(0.83 0.07 230)" }}>trade</em>.
        </h2>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: `0 ${sidePad}px`, display: "grid", gap: mobile ? 24 : 32 }}>
        {data.skillGroups.map((g, i) => {
          const palette = palettes[i % palettes.length];
          return (
            <div key={i}>
              <div style={{
                fontFamily: "'Space Grotesk', system-ui", fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
                color: "rgba(17,17,17,0.5)", textAlign: "center",
                marginBottom: mobile ? 10 : 14,
              }}>{g.label}</div>
              <div style={{
                display: "flex", flexWrap: "wrap", justifyContent: "center",
                gap: mobile ? 8 : 10,
              }}>
                {g.skills.map((s) => (
                  <span key={s} style={{
                    fontFamily: "'Space Grotesk', system-ui", fontSize: pillFontSize, fontWeight: 500,
                    padding: pillPadding, borderRadius: 999,
                    background: palette.bg, color: palette.fg,
                    border: `1.5px solid ${palette.border}`,
                    letterSpacing: 0.2,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
