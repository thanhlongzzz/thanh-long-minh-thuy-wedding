import { useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Couple from './components/Couple';
import LoveQuote from './components/LoveQuote';
import Events from './components/Events';
import Location from './components/Location';
import Gallery from './components/Gallery';
import GiftSection from './components/Gift';
import GuestBook from './components/GuestBook';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-stone-800 antialiased overflow-x-hidden">
      <Hero />
      <Countdown />
      <Couple />
      <LoveQuote />
      <Events />
      <Location />
      <Gallery />
      <GiftSection />
      <GuestBook />
      <Footer />
      <GoToTop />
    </main>
  );
}

export default App;
