import { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank! Ihre Buchungsanfrage wurde übermittelt. Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({ name: '', phone: '', service: '', date: '', time: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="bg-[#1b2430] py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f2f2f2] tracking-[0.15em] mb-4">
            TERMIN BUCHEN
          </h2>
          <div className="w-24 h-[2px] bg-[#c8a46a] mx-auto mb-6"></div>
          <p className="text-[#f2f2f2] text-sm opacity-70 tracking-wider">
            Vereinbaren Sie einen Termin für Ihre perfekte Pflege
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
         {/* <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c8a46a]" size={20} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="IHR NAME"
              required
              className="w-full bg-[#0b0f14] border border-[#2a3441] text-[#f2f2f2] pl-14 pr-4 py-4 focus:outline-none focus:border-[#c8a46a] transition-colors tracking-wider text-sm"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c8a46a]" size={20} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="TELEFONNUMMER"
              required
              className="w-full bg-[#0b0f14] border border-[#2a3441] text-[#f2f2f2] pl-14 pr-4 py-4 focus:outline-none focus:border-[#c8a46a] transition-colors tracking-wider text-sm"
            />
          </div>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-[#0b0f14] border border-[#2a3441] text-[#f2f2f2] px-4 py-4 focus:outline-none focus:border-[#c8a46a] transition-colors tracking-wider text-sm appearance-none cursor-pointer"
            >
              <option value="">SERVICE WÄHLEN</option>
              <option value="haircut">HAARSCHNITT</option>
              <option value="beard">BART TRIMMEN</option>
              <option value="shave">RASUR</option>
              <option value="package">KOMPLETT-PAKET</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c8a46a]" size={20} />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full bg-[#0b0f14] border border-[#2a3441] text-[#f2f2f2] pl-14 pr-4 py-4 focus:outline-none focus:border-[#c8a46a] transition-colors tracking-wider text-sm"
              />
            </div>

            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c8a46a]" size={20} />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full bg-[#0b0f14] border border-[#2a3441] text-[#f2f2f2] pl-14 pr-4 py-4 focus:outline-none focus:border-[#c8a46a] transition-colors tracking-wider text-sm"
              />
            </div>
          </div>
*/}
          <button
  type="button"
  onClick={() => window.location.href = "https://www.planity.com/de-DE/moel-60318-frankfurt-am-main"}
  className="w-full bg-[#c8a46a] text-[#0b0f14] py-4 text-sm tracking-[0.2em] font-semibold hover:bg-[#b8945a] transition-all duration-300"
>
  TERMIN ANFRAGEN
</button>
        </form>
      </div>
    </section>
  );
}
