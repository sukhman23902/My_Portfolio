import { useEffect, useRef, useState } from 'react';
import data from './data/portfolio';
import { useScrollY } from './hooks/useScrollY';
import { useTouchDevice } from './hooks/useTouchDevice';
import { CustomCursor } from './components/CustomCursor';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { FloatingButtons } from './components/FloatingButtons';

function Portfolio() {
  const scrollRef = useRef(null);
  const scrollY = useScrollY(scrollRef);
  const [contactTop, setContactTop] = useState(0);
  const contactRef = useRef(null);
  const isTouch = useTouchDevice();

  useEffect(() => {
    const update = () => {
      if (contactRef.current) setContactTop(contactRef.current.offsetTop);
    };
    update();
    window.addEventListener("resize", update);
    const t = setTimeout(update, 100);
    return () => { window.removeEventListener("resize", update); clearTimeout(t); };
  }, []);

  return (
    <div ref={scrollRef} style={{
      position: "relative",
      width: "100%", height: "100%",
      overflowY: "auto", overflowX: "hidden",
      background: "#F9F7F2",
      color: "#111",
      fontFamily: "'Space Grotesk', system-ui",
      cursor: isTouch ? "auto" : "none",
    }}>
      {!isTouch && <CustomCursor scopeRef={scrollRef} />}
      <FloatingButtons scrollY={scrollY} scrollRef={scrollRef} phone={data.phone} resume={data.resume} />
      <Hero scrollY={scrollY} data={data} />
      <Experience scrollY={scrollY} data={data} />
      <Work data={data} />
      <Skills data={data} />
      <div ref={contactRef}>
        <Contact data={data} scrollY={scrollY} sectionTop={contactTop} />
      </div>
    </div>
  );
}

export default Portfolio;
