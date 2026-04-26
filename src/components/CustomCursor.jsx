import { useEffect, useRef, useState } from 'react';

export function CustomCursor({ scopeRef }) {
  const ringRef = useRef(null);
  const cursorRef = useRef(null);
  const [mode, setMode] = useState("default");

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    let tx = 0, ty = 0, rx = 0, ry = 0;
    let raf;

    const loop = () => {
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      setMode(t ? t.dataset.cursor : "default");
    };

    scope.addEventListener("mousemove", onMove);
    scope.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      scope.removeEventListener("mousemove", onMove);
      scope.removeEventListener("mouseover", onOver);
    };
  }, [scopeRef]);

  const ringSize = mode === "drag" ? 96 : mode === "link" ? 72 : 44;
  const ringColor = mode === "link" ? "oklch(0.55 0.28 295)" : "rgba(17,17,17,0.35)";

  return (
    <>
      <div ref={ringRef} style={{
        position: "fixed", left: 0, top: 0,
        width: ringSize, height: ringSize,
        border: `1.5px solid ${ringColor}`,
        borderRadius: 999,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 300ms, height 300ms, border-color 300ms",
        mixBlendMode: "difference",
      }} />
      <div ref={cursorRef} style={{
        position: "fixed", left: 0, top: 0,
        width: 8, height: 8,
        borderRadius: 999,
        background: "#111",
        pointerEvents: "none",
        zIndex: 9999,
      }} />
    </>
  );
}
