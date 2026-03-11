import { Users, Sparkles, Armchair } from 'lucide-react';

export default function Features() {
  const features = [
    {
  icon: Users,
  title: 'EXPERTE BARBIERE',
  description: 'Hochqualifizierte Fachleute',
},
{
  icon: Sparkles,
  title: 'PREMIUM-PRODUKTE',
  description: 'Nur die beste Qualität',
},
{
  icon: Armchair,
  title: 'ENTSPANNTE ATMOSPHÄRE',
  description: 'Komfortable Umgebung',
},
  ];

  return (
    <section className="bg-[#1b2430] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-[#c8a46a] rounded-full mb-6">
                <feature.icon size={36} className="text-[#c8a46a]" />
              </div>
              <h3 className="text-[#f2f2f2] text-lg tracking-[0.2em] mb-2 font-semibold">
                {feature.title}
              </h3>
              <p className="text-[#f2f2f2] text-sm opacity-70 tracking-wider">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
