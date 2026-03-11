import Barbers from './components/Barbers';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Seo from './components/Seo';
import Services from './components/Services';

function App() {
  return (
    <div className="bg-[#0b0f14]">
      <Seo />
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Barbers />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
