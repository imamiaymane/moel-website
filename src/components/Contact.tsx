import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0f14] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2f2f2] tracking-[0.15em] mb-4">
            KONTAKT
          </h2>
          <div className="w-24 h-[2px] bg-[#c8a46a] mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-[#f2f2f2] opacity-75 leading-relaxed">
            Besuchen Sie MOEL The Barbershop in Frankfurt am Main oder buchen Sie Ihren Termin online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#c8a46a] rounded-full">
                <MapPin size={24} className="text-[#c8a46a]" />
              </div>
              <div>
                <h3 className="text-[#f2f2f2] text-lg tracking-[0.15em] mb-2 font-semibold">
                  ADRESSE
                </h3>
                <p className="text-[#f2f2f2] opacity-70 leading-relaxed">
                  Eckenheimer Landstraße 48
                  <br />
                  60318 Frankfurt am Main
                  <br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#c8a46a] rounded-full">
                <Clock size={24} className="text-[#c8a46a]" />
              </div>
              <div>
                <h3 className="text-[#f2f2f2] text-lg tracking-[0.15em] mb-2 font-semibold">
                  ÖFFNUNGSZEITEN
                </h3>
                <p className="text-[#f2f2f2] opacity-70 leading-relaxed">
                  Mo - Fr: 09:00 - 19:00
                  <br />
                  Sa: 09:00 - 17:00
                  <br />
                  So: Geschlossen
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#c8a46a] rounded-full">
                <Phone size={24} className="text-[#c8a46a]" />
              </div>
              <div>
                <h3 className="text-[#f2f2f2] text-lg tracking-[0.15em] mb-2 font-semibold">
                  TELEFON
                </h3>
                <p className="text-[#f2f2f2] opacity-70 leading-relaxed">
                  <a href="tel:+496956005445" className="hover:text-[#c8a46a] transition-colors">
                    +49 69 56005445
                  </a>
                  <br />
                  <a href="mailto:info@moel.de" className="hover:text-[#c8a46a] transition-colors">
                    info@moel.de
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-[#f2f2f2] text-lg tracking-[0.15em] mb-4 font-semibold">
                FOLGEN SIE UNS
              </h3>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.instagram.com/moel.thebarbershop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#c8a46a] rounded-full text-[#c8a46a] hover:bg-[#c8a46a] hover:text-[#0b0f14] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@moel.thebarbersho?_r=1&_t=ZS-94XZ7NRPOtE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#c8a46a] rounded-full text-[#c8a46a] hover:bg-[#c8a46a] hover:text-[#0b0f14] transition-all duration-300"
                  aria-label="TikTok"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] bg-[#1b2430] border border-[#2a3441]">
            <iframe
              src="https://www.google.com/maps?q=MOEL+The+Barbershop,+Eckenheimer+Landstra%C3%9Fe+48,+60318+Frankfurt+am+Main&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MOEL Barbershop Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
