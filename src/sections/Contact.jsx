import { SectionLabel } from '../components/SectionLabel';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Contact({ data, scrollY, sectionTop }) {
  const { mobile, tablet } = useBreakpoint();

  const relY = scrollY - (sectionTop - window.innerHeight * 0.6);
  const progress = Math.max(0, Math.min(1, relY / 800));
  const r = 20 + progress * 140;

  return (
    <section id="contact" style={{
      position: "relative",
      margin: mobile ? "40px 12px 12px" : tablet ? "60px 16px 16px" : "80px 24px 24px",
      borderRadius: mobile ? 24 : tablet ? 28 : 36,
      overflow: "hidden",
      minHeight: mobile ? "auto" : tablet ? 560 : 680,
      color: "white",
      background: "#1a1a1a",
    }}>
      {/* Sunset reveal layer */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(140deg, oklch(0.68 0.18 30) 0%, oklch(0.55 0.22 340) 45%, oklch(0.35 0.22 290) 100%)",
        clipPath: `circle(${r}% at 80% 20%)`,
        transition: "clip-path 80ms linear",
      }} />
      {/* Noise */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 20% 80%, oklch(0.82 0.14 75 / 0.5), transparent 60%)",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        padding: mobile ? "48px 20px 32px" : tablet ? "64px 40px 48px" : "96px 64px 64px",
        display: "grid", gap: mobile ? 32 : 48,
      }}>
        <SectionLabel num="05" label="Let's work" color="oklch(0.92 0.07 75)" />
        <h2 style={{
          fontFamily: "'Grandstander', system-ui", fontWeight: 700,
          fontSize: "clamp(32px, 8vw, 132px)", letterSpacing: mobile ? -1.5 : -3,
          lineHeight: 0.92, margin: 0, textWrap: "balance",
          color: "white",
        }}>
          Got a problem worth <em style={{ fontStyle: "italic", color: "oklch(0.92 0.12 75)" }}>solving</em>?
          <br/>Let's build something.
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : `repeat(auto-fit, minmax(${tablet ? "200px" : "220px"}, 1fr))`,
          gap: mobile ? 16 : 28,
          maxWidth: 1000,
        }}>
          {[
            { label: "Email", value: data.email, href: `mailto:${data.email}` },
            { label: "Phone", value: data.phone, href: `tel:${data.phone.replace(/\s/g,"")}` },
            { label: "LinkedIn", value: data.linkedin, href: `https://${data.linkedin}` },
            { label: "Based in", value: data.location },
          ].map((c) => (
            <a key={c.label} href={c.href || "#"} data-cursor={c.href ? "link" : undefined} style={{
              display: "block", color: "white", textDecoration: "none",
              padding: mobile ? "16px 0" : "22px 0", borderTop: "1px solid rgba(255,255,255,0.25)",
            }}>
              <div style={{ fontFamily: "'Space Grotesk', system-ui", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", opacity: 0.7, marginBottom: mobile ? 6 : 10 }}>
                {c.label}
              </div>
              <div style={{ fontFamily: "'Grandstander', system-ui", fontWeight: 600, fontSize: "clamp(16px, 4vw, 22px)", lineHeight: 1.15, wordBreak: "break-word" }}>
                {c.value}
              </div>
            </a>
          ))}
        </div>
        <div style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          justifyContent: mobile ? "center" : "space-between",
          alignItems: "center",
          gap: mobile ? 12 : 0,
          marginTop: mobile ? 24 : 40,
          fontFamily: "'Space Grotesk', system-ui", fontSize: 13, opacity: 0.75,
        }}>
          <span>© {new Date().getFullYear()} {data.name}</span>
          <span>Designed & engineered with care.</span>
        </div>
      </div>
    </section>
  );
}
