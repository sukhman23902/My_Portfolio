import { useState, useRef, useCallback } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

export function FloatingButtons({ scrollY, scrollRef, phone, resume }) {
  const { mobile } = useBreakpoint();
  const showScrollTop = scrollY > 400;
  const [launching, setLaunching] = useState(false);
  const downloadRef = useRef(null);

  const whatsappNumber = phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like to connect!")}`;

  const onScrollTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDownload = useCallback(() => {
    if (launching) return;
    setLaunching(true);
    setTimeout(() => {
      if (downloadRef.current) downloadRef.current.click();
    }, 600);
    setTimeout(() => setLaunching(false), 900);
  }, [launching]);

  const btnSize = mobile ? 44 : 50;
  const iconSize = mobile ? 20 : 22;
  const right = mobile ? 16 : 28;
  const bottom = mobile ? 16 : 28;

  const btnBase = {
    width: btnSize, height: btnSize,
    borderRadius: 999,
    border: "none",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 8px 24px -6px rgba(0,0,0,0.25)",
    transition: "opacity 300ms, transform 300ms",
  };

  return (
    <>
      {/* Hidden download link */}
      <a ref={downloadRef} href={resume} download style={{ display: "none" }} />

      {/* Rocket particle */}
      {launching && (
        <div style={{
          position: "fixed",
          right: right + btnSize / 2 - 18,
          bottom: bottom + btnSize + 12 + btnSize / 2 - 18,
          width: 36, height: 36,
          borderRadius: 999,
          background: "oklch(0.55 0.28 295)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "rocketLaunch 800ms ease-out forwards",
          pointerEvents: "none",
          zIndex: 101,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2v6h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 18v-6M9 15l3-3 3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <div style={{
        position: "fixed", right, bottom,
        display: "flex", flexDirection: "column", gap: 12,
        zIndex: 100,
      }}>
        {/* Scroll to top */}
        <button
          onClick={onScrollTop}
          data-cursor="link"
          aria-label="Scroll to top"
          style={{
            ...btnBase,
            background: "#111",
            opacity: showScrollTop ? 1 : 0,
            pointerEvents: showScrollTop ? "auto" : "none",
            transform: showScrollTop ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Download Resume */}
        <button
          onClick={onDownload}
          data-cursor="link"
          aria-label="Download resume"
          style={{
            ...btnBase,
            background: "oklch(0.55 0.28 295)",
            animation: launching ? "btnPulse 400ms ease-out" : "none",
          }}
        >
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2v6h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12v6M9 15l3 3 3-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="link"
          aria-label="Contact on WhatsApp"
          style={{
            ...btnBase,
            background: "#25D366",
            textDecoration: "none",
          }}
        >
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
