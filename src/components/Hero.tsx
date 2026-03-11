export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
      <h1
  className="
    font-serif text-center text-[#f2f2f2] mb-6 leading-[1.05]
    text-[clamp(2rem,5.5vw,5.5rem)]
    tracking-[0.06em] sm:tracking-[0.12em] md:tracking-[0.2em]
    break-words
  "
  style={{ overflowWrap: "normal", wordBreak: "keep-all" }}
>
  Willkommen bei MOEL <br className="hidden sm:block" />
  Dein Barbershop in Frankfurt
</h1>

<p className="text-center text-[#f2f2f2] opacity-90 mb-12
              text-[clamp(0.9rem,2vw,1.25rem)]
              tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em]">
  Mehr als ein Haarschnitt. Ein Erlebnis.
</p>

        <a
  href="https://www.planity.com/de-DE/moel-60318-frankfurt-am-main"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-transparent border-2 border-[#c8a46a] text-[#c8a46a] px-12 py-4 text-sm tracking-[0.2em] hover:bg-[#c8a46a] hover:text-[#0b0f14] transition-all duration-300 font-semibold"
>
  JETZT BUCHEN
</a>

      </div>
    </section>
  );
}
