import { Blob } from '../components/Blob';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Hero({ scrollY, data }) {
  const { mobile, tablet } = useBreakpoint();

  const headY = scrollY * 0.12;
  const fade = Math.max(0, 1 - scrollY / 600);

  const sidePad = mobile ? 16 : tablet ? 28 : 48;

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: mobile ? 500 : tablet ? 600 : 680, overflow: "hidden" }}>
      {/* Blobs */}
      <Blob color="oklch(0.85 0.05 150)" size={520} x={-10} y={80} depth={0.25} scrollY={scrollY} />
      <Blob color="oklch(0.83 0.07 230)" size={620} x={55} y={-120} depth={0.4} scrollY={scrollY} />
      <Blob color="oklch(0.78 0.09 40)" size={380} x={70} y={420} depth={0.15} scrollY={scrollY} opacity={0.7} />
      <Blob color="oklch(0.88 0.06 75)" size={280} x={20} y={520} depth={0.55} scrollY={scrollY} opacity={0.6} />
      <Blob color="oklch(0.55 0.28 295)" size={160} x={85} y={260} depth={0.7} scrollY={scrollY} blur={30} opacity={0.35} />

      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
        backgroundSize: "3px 3px",
        pointerEvents: "none",
        opacity: 0.5,
      }} />

      {/* Top nav */}
      <div style={{
        position: "absolute", top: mobile ? 16 : 28, left: sidePad, right: sidePad,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        zIndex: 5,
      }}>
        <div style={{ fontFamily: "'Grandstander', system-ui", fontWeight: 800, fontSize: mobile ? 18 : 20, letterSpacing: -0.5 }}>
          sukh<span style={{ color: "oklch(0.55 0.28 295)" }}>·</span>
        </div>
        <nav style={{ display: "flex", gap: mobile ? 16 : tablet ? 20 : 28, fontSize: mobile ? 12 : 14, letterSpacing: 0.2 }}>
          {["Work", "Experience", "Skills", "Contact"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} data-cursor="link" style={{ color: "#111", textDecoration: "none", opacity: 0.78 }}>{n}</a>
          ))}
        </nav>
      </div>

      {/* Headline */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, calc(-50% + ${headY}px))`,
        textAlign: "center", width: "min(1100px, 92%)",
        opacity: fade,
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: mobile ? 8 : 10,
          padding: mobile ? "5px 10px" : "6px 14px",
          border: "1px solid rgba(17,17,17,0.15)",
          borderRadius: 999, fontSize: mobile ? 10 : 12, letterSpacing: 1.4, textTransform: "uppercase",
          marginBottom: mobile ? 20 : 28,
          backdropFilter: "blur(8px)",
          background: "rgba(249,247,242,0.5)",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "oklch(0.65 0.18 145)" }} />
          Available for opportunities
          {/* Available for opportunities · {data.location} */}
        </div>
        <h1 style={{
          fontFamily: "'Grandstander', system-ui",
          fontWeight: 800,
          fontSize: "clamp(36px, 9vw, 148px)",
          lineHeight: 0.92,
          letterSpacing: mobile ? -1.5 : -3,
          margin: 0,
          textWrap: "balance",
        }}>
          <span style={{ color: "#111" }}>Softwares, </span>
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(100deg, oklch(0.78 0.09 40), oklch(0.55 0.28 295) 60%, oklch(0.83 0.07 230))",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>crafted</span>
          <br />
          <span style={{ color: "#111" }}>with </span>
          <span style={{ color: "oklch(0.55 0.28 295)" }}>intention.</span>
        </h1>
        <p style={{
          fontFamily: "'Space Grotesk', system-ui",
          fontSize: "clamp(14px, 1.6vw, 18px)",
          fontWeight: 500,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          margin: mobile ? "16px auto 0" : "24px auto 0",
          color: "oklch(0.55 0.28 295)",
        }}>
          {data.roleShort}
        </p>
        <p style={{
          fontFamily: "'Space Grotesk', system-ui",
          fontSize: "clamp(14px, 1.4vw, 20px)",
          maxWidth: 640,
          margin: mobile ? "12px auto 0" : "16px auto 0",
          color: "rgba(17,17,17,0.7)",
          lineHeight: 1.5,
        }}>
          {data.tagline}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: mobile ? 10 : 14, marginTop: mobile ? 24 : 38, flexWrap: "wrap" }}>
          <a href="#work" data-cursor="link" style={{
            padding: mobile ? "12px 20px" : "14px 26px", borderRadius: 999,
            background: "oklch(0.55 0.28 295)", color: "white",
            fontFamily: "'Space Grotesk', system-ui", fontWeight: 500, fontSize: mobile ? 14 : 15,
            textDecoration: "none", letterSpacing: 0.2,
            boxShadow: "0 12px 40px -10px oklch(0.55 0.28 295 / 0.5)",
          }}>See the work →</a>
          <a href="#contact" data-cursor="link" style={{
            padding: mobile ? "12px 20px" : "14px 26px", borderRadius: 999,
            border: "1.5px solid rgba(17,17,17,0.2)", color: "#111",
            fontFamily: "'Space Grotesk', system-ui", fontWeight: 500, fontSize: mobile ? 14 : 15,
            textDecoration: "none", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(8px)",
          }}>Get in touch</a>
        </div>
      </div>

      {/* Author photo */}
      <div style={{
        position: "absolute",
        left: mobile ? 16 : tablet ? 28 : 56,
        bottom: mobile ? 16 : tablet ? 28 : 56,
        transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`,
      }}>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", inset: -6,
            background: "conic-gradient(from 90deg, oklch(0.85 0.05 150), oklch(0.78 0.09 40), oklch(0.83 0.07 230), oklch(0.55 0.28 295), oklch(0.85 0.05 150))",
            borderRadius: mobile ? 18 : 24, filter: "blur(8px)", opacity: 0.6,
            animation: "spinSlow 14s linear infinite",
          }} />
          <img src={data.photo} alt="" style={{
            position: "relative",
            width: mobile ? 150 : tablet ? 160 : 180,
            height: mobile ? 150 : tablet ? 160 : 180,
            borderRadius: mobile ? 16 : 20, objectFit: "cover",
            border: "3px solid #F9F7F2",
            boxShadow: "0 18px 40px -14px rgba(0,0,0,0.25)",
          }} />
        </div>
      </div>

      {/* Scroll hint — hidden on mobile */}
      {!mobile && (
        <div style={{
          position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: Math.max(0, 1 - scrollY / 300),
          fontFamily: "'Space Grotesk', system-ui", fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
          color: "rgba(17,17,17,0.55)",
        }}>
          Scroll
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(17,17,17,0.5), transparent)" }} />
        </div>
      )}
    </section>
  );
}
