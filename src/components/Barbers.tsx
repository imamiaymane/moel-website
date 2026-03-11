import { useEffect, useRef, useState } from "react";

export default function Barbers() {
  const barbers = [
    {
      name: 'Momo',
      specialty: '',
      image: '/barbers/momo.jpg',
      instagram: 'https://www.instagram.com/mohamed_elyoussfi_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      tiktok: 'https://www.tiktok.com/@mo_ysf54?is_from_webapp=1&sender_device=pc',
    },
    {
      name: 'Hamid',
      specialty: '',
      image: '/barbers/hamid.jpg',
      // instagram: 'https://www.instagram.com/lartiste.vip.barber?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      // tiktok: '#',
    },
    {
      name: 'Mopicasso',
      specialty: '',
      image: '/barbers/mopicasso.jpg',
      // instagram: 'https://www.instagram.com/mopicasso1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      // tiktok: '#',
    },
    {
      name: 'Max',
      specialty: '',
      image: '/barbers/max.jpg',
      // instagram: 'https://www.instagram.com/mopicasso1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      // tiktok: '#',
    },
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
    <section id="barbers" className="bg-[#0b0f14] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2f2f2] tracking-[0.15em] mb-4">
            UNSERE BARBIERE
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
        <div className="flex flex-nowrap gap-8 lg:gap-12 w-max px-6 lg:px-8">
          {[...barbers, ...barbers].map((barber, index) => (
            <div key={`${barber.name}-${index}`} className="group w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-[#f2f2f2] text-xl tracking-[0.15em] mb-2 font-semibold">
                {barber.name}
              </h3>
              <p className="text-[#c8a46a] text-sm tracking-[0.2em] mb-4">
                {barber.specialty}
              </p>
              {/* <div className="flex items-center space-x-4">
                <a
                  href={barber.instagram}
                  className="text-[#f2f2f2] hover:text-[#c8a46a] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                   href={barber.tiktok}
                         className="text-[#f2f2f2] hover:text-[#c8a46a] transition-colors duration-300"
                             aria-label="TikTok"
                            >
                        <FaTiktok size={20} />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
