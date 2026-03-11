import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const images = [
    '/bild1.jpeg',
    '/bild2.jpeg',
    '/bild3.jpeg',
    '/bild4.jpeg',
    '/bild5.jpeg',
    '/bild6.jpeg',
  ];

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const speed = 0.6;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += speed;

        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [paused]);

  return (
    <section id="gallery" className="bg-[#1b2430] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2f2f2] tracking-[0.15em] mb-4">
            GALERIE
          </h2>
          <div className="w-24 h-[2px] bg-[#c8a46a] mx-auto"></div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-nowrap gap-6 w-max px-6 lg:px-8">
          {[...images, ...images].map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[340px] lg:w-[400px] h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt="Galerie von MOEL The Barbershop Frankfurt"
                className="w-full h-full object-cover will-change-transform"
                draggable="false"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
