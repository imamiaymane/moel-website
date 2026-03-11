import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'SERVICES', id: 'services' },
    { label: 'GALERIE', id: 'gallery' },
    { label: 'BARBIERE', id: 'barbers' },
    { label: 'TERMIN', id: 'booking' },
    { label: 'KONTAKT', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0b0f14] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center"
            aria-label="MOEL The Barbershop"
          >
            <img
              src="/Moel_Wortbildmarke_Weiß-01-02.svg"
              alt="MOEL The Barbershop Logo"
              className="h-[150px] w-auto mt-2"
            />
          </button>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#f2f2f2] text-sm tracking-[0.15em] hover:text-[#c8a46a] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c8a46a] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#f2f2f2] hover:text-[#c8a46a] transition-colors"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0b0f14] border-t border-[#1b2430]">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-[#f2f2f2] text-sm tracking-[0.15em] hover:text-[#c8a46a] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
