import { motion } from 'motion/react';
import { ChevronDown, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-bg-main via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/20 border border-primary/50 text-primary text-xs md:text-sm font-inter font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest backdrop-blur-sm"
        >
          ✦ NOW OPEN IN SAVAR ✦
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-4 text-glow drop-shadow-2xl"
        >
          3 IDIOT'S FOOD CART
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter text-xl md:text-3xl font-medium text-primary mb-6 drop-shadow-lg"
        >
          Good Food • Good Friends • Great Times
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-inter text-text-secondary text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Big flavor, fresh ingredients, and every bite worth coming back for. 
          Located near Enam Medical College, Savar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary hover:bg-primary-hover text-black font-inter font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 text-center shadow-[0_0_20px_rgba(245,166,35,0.4)]"
          >
            Order Now
          </a>
          <a href="tel:+8801327240031" className="border-2 border-white hover:bg-white hover:text-black text-white font-inter font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            <Phone size={20} />
            Call Now: +8801327240031
          </a>
        </motion.div>

        {/* Loyalty Badge */}
        <motion.a 
          href="#loyalty"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
          className="mt-8 bg-[#3D2B1F] border border-[#d4af37]/30 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer"
        >
          <div className="w-10 h-10 shrink-0 bg-[#d4af37]/20 rounded-full flex items-center justify-center animate-pulse">
             🤎
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bebas text-xl leading-none">Loyalty Rewards</span>
            <span className="font-inter text-xs text-[#d4af37] mt-0.5">Active Now!</span>
          </div>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-inter text-xs text-text-secondary uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
