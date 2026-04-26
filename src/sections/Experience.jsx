import { useRef, useState, useEffect } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { useBreakpoint } from '../hooks/useBreakpoint';

function ExperienceCard({ entry, idx, scrollY, sectionTop, mobile, tablet }) {
  const cardSpacing = mobile ? 320 : tablet ? 370 : 420;
  const cardTopBase = (mobile ? 100 : tablet ? 120 : 140) + idx * cardSpacing;
  const relY = scrollY - (sectionTop + cardTopBase - window.innerHeight * 0.5);
  const slideUp = Math.max(-80, Math.min(0, -relY * 0.12));
  const scale = 1 - idx * 0.015;

  const stickyTop = (mobile ? 60 : tablet ? 70 : 80) + idx * (mobile ? 20 : tablet ? 24 : 28);

  return (
    <div style={{
      position: "sticky",
      top: stickyTop,
      marginBottom: mobile ? 24 : 40,
      transform: `translateY(${slideUp}px) scale(${scale})`,
      transformOrigin: "top center",
      zIndex: 10 + idx,
    }}>
      <div style={{
        background: "#FEFCF8",
        borderRadius: mobile ? 20 : 28,
        padding: mobile ? "20px 18px 20px" : tablet ? "28px 32px 28px" : "40px 44px 36px",
        border: `1.5px solid ${entry.accent}`,
        boxShadow: "0 30px 60px -30px rgba(0,0,0,0.18), 0 2px 0 rgba(0,0,0,0.03)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Accent blob corner */}
        <div style={{
          position: "absolute", right: -80, top: -80, width: 240, height: 240,
          borderRadius: "50%", background: entry.accent, opacity: 0.35, filter: "blur(40px)",
        }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 8, position: "relative" }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', system-ui", fontSize: mobile ? 11 : 12, letterSpacing: 2, textTransform: "uppercase", color: entry.accent, fontWeight: 600 }}>
              {entry.company} · {entry.place}
            </div>
            <h3 style={{
              fontFamily: "'Grandstander', system-ui", fontWeight: 700,
              fontSize: "clamp(24px, 6vw, 44px)", lineHeight: 1.05,
              margin: "8px 0 0", letterSpacing: -1.2,
            }}>{entry.role}</h3>
          </div>
          <div style={{ fontFamily: "'Space Grotesk', system-ui", fontSize: mobile ? 13 : 14, color: "rgba(17,17,17,0.65)" }}>
            {entry.dates}
          </div>
        </div>
        <ul style={{
          margin: "22px 0 0", padding: 0, listStyle: "none",
          display: "grid", gap: mobile ? 10 : 12,
          fontFamily: "'Space Grotesk', system-ui", fontSize: mobile ? 14 : tablet ? 15 : 15.5, lineHeight: 1.55, color: "rgba(17,17,17,0.82)",
          position: "relative",
        }}>
          {entry.bullets.map((b, i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: 12, alignItems: "start" }}>
              <span style={{ marginTop: 8, width: 6, height: 6, borderRadius: 999, background: entry.accent }} />
              <span>
                {b.includes(":") ? (
                  <>
                    <strong style={{ fontWeight: 700, color: "#111" }}>{b.slice(0, b.indexOf(":"))}</strong>
                    {b.slice(b.indexOf(":"))}
                  </>
                ) : b}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22, position: "relative" }}>
          {entry.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'Space Grotesk', system-ui", fontSize: 12,
              padding: "6px 12px", borderRadius: 999,
              background: "rgba(17,17,17,0.05)", color: "rgba(17,17,17,0.75)",
              border: "1px solid rgba(17,17,17,0.06)",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ scrollY, data }) {
  const ref = useRef(null);
  const [top, setTop] = useState(0);
  const { mobile, tablet } = useBreakpoint();

  useEffect(() => {
    const update = () => { if (ref.current) setTop(ref.current.offsetTop); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="experience" ref={ref} style={{
      position: "relative",
      padding: mobile ? "80px 16px 100px" : tablet ? "100px 32px 140px" : "140px 48px 180px",
      maxWidth: 1180, margin: "0 auto",
    }}>
      <SectionLabel num="02" label="Experience" color="oklch(0.78 0.09 40)" />
      <h2 style={{
        fontFamily: "'Grandstander', system-ui", fontWeight: 700,
        fontSize: "clamp(40px, 6vw, 88px)", letterSpacing: -2,
        margin: `0 0 ${mobile ? 32 : tablet ? 48 : 64}px`, lineHeight: 0.95, maxWidth: 900,
        color: "#111",
      }}>
        Where I've <em style={{ fontStyle: "italic", color: "oklch(0.55 0.28 295)" }}>worked</em>.
      </h2>
      <div>
        {data.experience.map((e, i) => (
          <ExperienceCard key={i} entry={e} idx={i} scrollY={scrollY} sectionTop={top} mobile={mobile} tablet={tablet} />
        ))}
      </div>
    </section>
  );
}
