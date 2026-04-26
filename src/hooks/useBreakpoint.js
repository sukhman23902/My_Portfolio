import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
};

export function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'mobile';
    if (window.matchMedia(BREAKPOINTS.desktop).matches) return 'desktop';
    if (window.matchMedia(BREAKPOINTS.tablet).matches) return 'tablet';
    return 'mobile';
  });

  useEffect(() => {
    const mqlDesktop = window.matchMedia(BREAKPOINTS.desktop);
    const mqlTablet = window.matchMedia(BREAKPOINTS.tablet);
    const check = () => {
      if (mqlDesktop.matches) setBp('desktop');
      else if (mqlTablet.matches) setBp('tablet');
      else setBp('mobile');
    };
    mqlDesktop.addEventListener('change', check);
    mqlTablet.addEventListener('change', check);
    return () => {
      mqlDesktop.removeEventListener('change', check);
      mqlTablet.removeEventListener('change', check);
    };
  }, []);

  return {
    bp,
    mobile: bp === 'mobile',
    tablet: bp === 'tablet',
    desktop: bp === 'desktop',
    tabletUp: bp !== 'mobile',
    desktopUp: bp === 'desktop',
  };
}
