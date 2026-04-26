import { useRef, useState } from 'react';
import { SectionLabel } from '../components/SectionLabel';
import { useBreakpoint } from '../hooks/useBreakpoint';

function ProjectTile({ project, idx, mobile }) {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, px: 50, py: 50, active: false });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - y) * 10,
      ry: (x - 0.5) * 12,
      px: x * 100, py: y * 100,
      active: true,
    });
  };
  const onLeave = () => setT({ rx: 0, ry: 0, px: 50, py: 50, active: false });

  const isWide = idx % 3 === 0;
  const isPublic = project.visibility === "public";

  return (
    <div
      ref={ref}
      onMouseMove={mobile ? undefined : onMove}
      onMouseLeave={mobile ? undefined : onLeave}
      data-cursor="link"
      style={{
        gridColumn: mobile ? "span 1" : isWide ? "span 2" : "span 1",
        perspective: 1200,
      }}
    >
      <div style={{
        position: "relative",
        borderRadius: mobile ? 20 : 28,
        padding: mobile ? 20 : 28,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: mobile ? 280 : 360,
        background: `radial-gradient(circle at ${t.px}% ${t.py}%, ${project.palette[0]}, ${project.palette[1]} 70%)`,
        transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.active ? 1.02 : 1})`,
        transition: t.active ? "transform 80ms linear" : "transform 500ms cubic-bezier(.2,.8,.2,1)",
        transformStyle: "preserve-3d",
        boxShadow: t.active
          ? "0 40px 80px -30px rgba(0,0,0,0.28), 0 4px 0 rgba(0,0,0,0.04)"
          : "0 20px 48px -24px rgba(0,0,0,0.18)",
        overflow: "hidden",
        cursor: "none",
      }}>
        {/* Sheen */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle at ${t.px}% ${t.py}%, rgba(255,255,255,0.45), transparent 35%)`,
          opacity: t.active ? 1 : 0, transition: "opacity 250ms",
          pointerEvents: "none",
        }} />
        {/* Abstract placeholder */}
        <div style={{
          position: "absolute", right: -60, bottom: -60, width: 260, height: 260, borderRadius: "50%",
          background: "rgba(255,255,255,0.25)", filter: "blur(30px)",
          transform: "translateZ(30px)",
        }} />
        {/* Top row */}
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", transform: "translateZ(40px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              fontFamily: "'Space Grotesk', system-ui", fontSize: mobile ? 11 : 12, letterSpacing: 2, textTransform: "uppercase",
              color: "rgba(17,17,17,0.65)", fontWeight: 600,
            }}>
              {String(idx + 1).padStart(2, "0")} · {project.org}
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', system-ui", fontSize: 10, fontWeight: 600,
              padding: "3px 8px", borderRadius: 999, letterSpacing: 0.5, textTransform: "uppercase",
              background: isPublic ? "rgba(34,197,94,0.2)" : "rgba(17,17,17,0.08)",
              color: isPublic ? "#166534" : "rgba(17,17,17,0.55)",
              border: `1px solid ${isPublic ? "rgba(34,197,94,0.35)" : "rgba(17,17,17,0.1)"}`,
            }}>
              {isPublic ? "Public" : "Private"}
            </span>
          </div>
          {isPublic ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              style={{
                width: mobile ? 36 : 44, height: mobile ? 36 : 44, borderRadius: 999,
                background: "rgba(255,255,255,0.6)", backdropFilter: "blur(10px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(17,17,17,0.08)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <div style={{
              width: mobile ? 36 : 44, height: mobile ? 36 : 44, borderRadius: 999,
              background: "rgba(255,255,255,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(17,17,17,0.06)",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="rgba(17,17,17,0.4)" strokeWidth="1.4" />
                <path d="M5 7V5a3 3 0 016 0v2" stroke="rgba(17,17,17,0.4)" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <div style={{ position: "relative", marginTop: mobile ? 24 : 40, transform: "translateZ(60px)" }}>
          <h3 style={{
            fontFamily: "'Grandstander', system-ui", fontWeight: 700,
            fontSize: "clamp(24px, 5vw, 36px)", lineHeight: 1.1, letterSpacing: -1,
            margin: "0 0 10px", color: "#111",
          }}>{project.title}</h3>
          <p style={{
            fontFamily: "'Space Grotesk', system-ui", fontSize: mobile ? 13.5 : 14.5, lineHeight: 1.5,
            color: "rgba(17,17,17,0.78)", margin: 0,
          }}>{project.blurb}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: "'Space Grotesk', system-ui", fontSize: 11,
                padding: "4px 10px", borderRadius: 999,
                background: "rgba(255,255,255,0.55)", backdropFilter: "blur(6px)",
                color: "#111", letterSpacing: 0.3, border: "1px solid rgba(17,17,17,0.06)",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work({ data }) {
  const { mobile, tablet } = useBreakpoint();

  return (
    <section id="work" style={{
      position: "relative",
      padding: mobile ? "80px 16px 60px" : tablet ? "120px 32px 90px" : "160px 48px 120px",
      maxWidth: 1280, margin: "0 auto",
    }}>
      <SectionLabel num="03" label="Selected Work" color="oklch(0.55 0.28 295)" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: mobile ? 16 : 24, marginBottom: mobile ? 32 : 56 }}>
        <h2 style={{
          fontFamily: "'Grandstander', system-ui", fontWeight: 700,
          fontSize: "clamp(40px, 6vw, 88px)", letterSpacing: -2,
          margin: 0, lineHeight: 0.95, maxWidth: 900,
          color: "#111",
        }}>
          Things I've <em style={{ fontStyle: "italic", color: "oklch(0.78 0.09 40)" }}>built</em>.
        </h2>
        {!mobile && (
          <div style={{ fontFamily: "'Space Grotesk', system-ui", fontSize: 14, color: "rgba(17,17,17,0.65)", maxWidth: 320 }}>
            Hover a card — it leans toward you. Everything moves for a reason.
          </div>
        )}
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(2, 1fr)",
        gap: mobile ? 16 : 22,
      }}>
        {data.projects.map((p, i) => (
          <ProjectTile key={i} project={p} idx={i} mobile={mobile} />
        ))}
      </div>
    </section>
  );
}
