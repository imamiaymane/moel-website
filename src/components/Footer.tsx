import { Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-serif text-2xl text-[#c8a46a] tracking-[0.3em]">MOEL</h3>
            <p className="text-xs text-[#f2f2f2] tracking-[0.4em] mt-1">THE BARBERSHOP</p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="https://www.instagram.com/moel.thebarbershop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-[#f2f2f2] hover:text-[#c8a46a] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@moel.thebarbersho?_r=1&_t=ZS-94XZ7NRPOtE"
              className="text-[#f2f2f2] hover:text-[#c8a46a] transition-colors duration-300"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>

          <p className="text-[#f2f2f2] text-xs opacity-70 tracking-wider">© 2026 MOEL THE BARBERSHOP</p>
        </div>
      </div>
    </footer>
  );
}
