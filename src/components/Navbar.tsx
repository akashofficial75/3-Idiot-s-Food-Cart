import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Loyalty', href: '#loyalty' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-border/50 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Adjusted top offset if announcement bar is present, but usually we just let it overlap if needed. We will handle structure in App.tsx */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex flex-col items-start select-none">
            <div className="flex items-baseline gap-1">
              <span className="font-bebas text-4xl text-primary leading-none">3</span>
              <span className="font-bebas text-3xl text-white leading-none">Idiots</span>
            </div>
            <span className="font-inter text-[10px] tracking-widest text-text-secondary uppercase">Food Cart</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-inter text-sm font-medium text-text-secondary hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-black font-inter font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-bg-card border-l border-border z-50 p-6 flex flex-col lg:hidden"
            >
              <div className="flex justify-between items-center mb-10 mt-2">
                <span className="font-bebas text-2xl tracking-wider text-white">MENU</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-secondary hover:text-white bg-black/50 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>
              
              <ul className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-bebas text-3xl text-text-secondary hover:text-primary transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <a 
                  href="tel:+8801327240031" 
                  className="bg-primary text-black font-inter font-bold text-center py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  +8801327240031
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
