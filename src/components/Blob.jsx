import { useBreakpoint } from '../hooks/useBreakpoint';

export function Blob({ color, size, x, y, depth = 0, scrollY = 0, blur = 60, opacity = 0.85 }) {
  const { mobile, tablet } = useBreakpoint();
  const scale = mobile ? 0.55 : tablet ? 0.75 : 1;
  const actualSize = size * scale;
  const ty = -scrollY * depth;

  return (
    <div style={{
      position: "absolute",
      left: `${x}%`, top: y,
      width: actualSize, height: actualSize,
      borderRadius: "50%",
      background: color,
      filter: `blur(${blur}px)`,
      opacity,
      transform: `translate3d(0, ${ty}px, 0)`,
      willChange: "transform",
      pointerEvents: "none",
    }} />
  );
}
