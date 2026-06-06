import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Spotlight } from './components/Spotlight';
import { Loyalty } from './components/Loyalty';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Phone, ArrowUp, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => setShowSplash(false), 1500);

    // Scroll listener for progress bar and back to top
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(Number((totalScroll / windowHeight) * 100));
      
      setShowBackToTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-bg-main flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [0.9, 1.1, 1], opacity: [0, 1, 1] }} 
              transition={{ duration: 1, times: [0, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-bebas text-7xl text-primary leading-none">3</span>
                <span className="font-bebas text-6xl text-white leading-none">Idiots</span>
              </div>
              <span className="font-inter text-sm tracking-widest text-[#d4af37] uppercase">Loading...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative selection:bg-primary/30 selection:text-white pb-16 md:pb-0">
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <AnnouncementBar />
        <Navbar />
        
        <main>
          <Hero />
          <Menu />
          <Spotlight />
          <Loyalty />
          <Story />
          <Reviews />
          <Location />
        </main>
        
        <Footer />

        {/* Floating Quick Actions (Desktop & Tablet) */}
        <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
          <AnimatePresence>
            {showBackToTop && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-bg-card border border-border text-white rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>
          
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-[0_4px_15px_rgba(24,119,242,0.4)]"
            aria-label="Facebook"
          >
            <Facebook size={24} fill="currentColor" stroke="none" />
          </a>

          <a
            href="tel:+8801327240031"
            className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-[0_4px_20px_rgba(245,166,35,0.4)] animate-pulse hover:animate-none"
            aria-label="Call Now"
          >
            <Phone size={24} className="fill-black" />
          </a>
        </div>

        {/* Mobile "Order Now" Sticky Banner */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#25D366] p-4 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
          <a
            href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart."
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white font-inter font-bold text-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
}
