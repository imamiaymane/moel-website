import { Droplets, Scissors, Sparkles, User } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: User,
      title: 'HAARE & BART',
      description: 'Kompletter Service für Haare und Bart',
      price: '€58',
    },
    {
      icon: Scissors,
      title: 'HAARSCHNITT',
      description: 'Klassischer Haarschnitt nach Ihren Wünschen',
      price: '€36',
    },
    {
      icon: Sparkles,
      title: 'BART RASIEREN / FORMEN',
      description: 'Präzises Rasieren und Formen des Bartes',
      price: '€22',
    },
    {
      icon: Droplets,
      title: 'WASCHEN & STYLEN',
      description: 'Waschen und professionelles Styling',
      price: '€15',
    },
  ];

  return (
    <section id="services" className="bg-[#0b0f14] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2f2f2] tracking-[0.15em] mb-4">
            SERVICES
          </h2>
          <div className="w-24 h-[2px] bg-[#c8a46a] mx-auto" />
          <p className="mt-6 max-w-2xl mx-auto text-[#f2f2f2] opacity-75 leading-relaxed">
            Präzise Haarschnitte, Bartpflege und klassisches Grooming im MOEL Barbershop in Frankfurt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1b2430] p-8 border border-[#2a3441] hover:border-[#c8a46a] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#c8a46a] rounded-full mb-6 group-hover:bg-[#c8a46a] transition-all duration-300">
                <service.icon
                  size={28}
                  className="text-[#c8a46a] group-hover:text-[#0b0f14] transition-all duration-300"
                />
              </div>

              <h3 className="text-[#f2f2f2] text-xl tracking-[0.15em] mb-3 font-semibold min-h-[56px]">
                {service.title}
              </h3>

              <p className="text-[#f2f2f2] text-sm opacity-70 mb-6 leading-relaxed min-h-[60px]">
                {service.description}
              </p>

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#2a3441]">
                <span className="text-[#c8a46a] text-2xl font-semibold">{service.price}</span>
              </div>

              <a
                href="https://www.planity.com/de-DE/moel-60318-frankfurt-am-main"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center bg-transparent border border-[#c8a46a] text-[#c8a46a] py-3 text-sm tracking-[0.15em] hover:bg-[#c8a46a] hover:text-[#0b0f14] transition-all duration-300"
              >
                JETZT BUCHEN
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
