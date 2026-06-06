import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Loyalty() {
  const [stamps, setStamps] = useState<boolean[]>(Array(10).fill(false));

  const toggleStamp = (index: number) => {
    const newStamps = [...stamps];
    // Simple demo logic: fill sequentially on click
    for (let i = 0; i <= index; i++) {
        newStamps[i] = true;
    }
    for(let i = index + 1; i < 10; i++) {
        newStamps[i] = false;
    }
    setStamps(newStamps);
  };

  return (
    <section id="loyalty" className="py-24 bg-[#1a120b] relative border-y border-[#3d2b1f]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-[#d4af37] mb-4">LOYALTY REWARDS</h2>
          <p className="font-inter text-xl text-white/80">Buy 10 products and get 1 <strong className="text-white">FREE</strong> Burger!</p>
        </motion.div>

        {/* Digital Loyalty Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#3d2b1f] to-[#1f1610] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-[#d4af37]/20 relative overflow-hidden"
        >
          {/* Card textured background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10">
            {/* Card Header */}
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🍔</span>
              </div>
              <h3 className="font-bebas text-3xl tracking-widest text-[#d4af37]">LOYALTY CARD</h3>
            </div>

            {/* Stamps Grid */}
            <div className="grid grid-cols-5 gap-3 md:gap-6 max-w-2xl mx-auto mb-10">
              {stamps.map((isStamped, index) => {
                const isTenth = index === 9;
                return (
                  <button
                    key={index}
                    onClick={() => toggleStamp(index)}
                    className="relative aspect-square rounded-full border-2 border-dashed border-[#d4af37]/30 flex items-center justify-center transition-all bg-black/20 hover:bg-[#d4af37]/10 group group-active:scale-95"
                    aria-label={`Stamp position ${index + 1}`}
                  >
                    {!isStamped && !isTenth && (
                      <span className="font-bebas text-xl md:text-2xl text-[#d4af37]/30">{index + 1}</span>
                    )}
                    {!isStamped && isTenth && (
                      <span className="font-bebas text-xl md:text-2xl text-secondary animate-pulse">FREE</span>
                    )}
                    
                    {/* Stamp Animation */}
                    <motion.div
                      initial={false}
                      animate={{ scale: isStamped ? 1 : 0, opacity: isStamped ? 1 : 0 }}
                      className="absolute inset-0 bg-[#d4af37] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                    >
                      <Check className="text-[#1a120b]" size={24} strokeWidth={3} />
                    </motion.div>
                  </button>
                )
              })}
            </div>

            <div className="text-center pt-6 border-t border-[#d4af37]/20">
              <span className="font-bebas text-2xl text-white/50">3 IDIOT'S</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 space-y-2 text-center"
        >
          <p className="font-inter text-white font-medium">Ask for your physical loyalty card at the cart!</p>
          <p className="font-inter text-xs text-white/50">Try clicking the circles above for a demo. One stamp per purchase. Valid at 3 Idiot's Food Cart, Savar only.</p>
        </motion.div>

      </div>
    </section>
  );
}
