import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import motkaImg from '../assets/images/motka_meatbox_1780722154181.png';

export function Spotlight() {
  return (
    <section id="specials" className="py-24 bg-[#111] relative overflow-hidden">
      {/* Decorative background noise/grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full point-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/10 border border-primary/50 text-primary px-3 py-1 rounded-full text-sm font-bold tracking-widest mb-6">
                🔥 SIGNATURE SPECIAL
              </div>
              <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none mb-4">
                MOTKA <span className="text-primary">MEATBOX</span>
              </h2>
              <p className="font-bebas text-3xl md:text-4xl text-text-secondary tracking-wide mb-8">
                One Box. Full On Taste.
              </p>
              
              <div className="flex items-end justify-center lg:justify-start gap-4 mb-10">
                <span className="font-oswald text-3xl text-text-secondary line-through mb-1">৳200</span>
                <span className="font-oswald text-6xl font-bold text-primary leading-none">৳180</span>
              </div>

              <div className="bg-bg-card border border-border p-6 rounded-2xl mb-8">
                <h4 className="font-inter font-bold text-white mb-4 uppercase text-sm tracking-wider">Inside the Box:</h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {['Crispy Chicken', 'French Fries', 'Sausage', 'Melted Cheese', 'Special Mayo'].map((item) => (
                    <span key={item} className="bg-[#1a1a1a] text-white text-sm px-4 py-2 rounded-lg font-inter">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-inter font-bold text-white mb-4 uppercase text-sm tracking-wider">Level it up (Add-ons):</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: 'Extra Cheese', price: 50 },
                    { name: 'Extra Chicken', price: 50 },
                    { name: 'Extra Sausage', price: 30 }
                  ].map((addon) => (
                    <button key={addon.name} className="flex items-center justify-between bg-bg-card border border-border hover:border-primary/50 p-4 rounded-xl transition-colors group">
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-inter text-sm text-white group-hover:text-primary transition-colors">{addon.name}</span>
                        <span className="font-oswald text-text-secondary text-sm">+৳{addon.price}</span>
                      </div>
                      <Plus size={16} className="text-text-secondary group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center bg-primary hover:bg-primary-hover text-black font-inter font-bold text-xl px-12 py-4 rounded-xl w-full sm:w-auto transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,166,35,0.3)]"
              >
                Order Now
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="aspect-square rounded-full bg-primary/20 blur-3xl absolute inset-0 transform -translate-y-10 z-0"></div>
            <img 
              src={motkaImg} 
              alt="Motka Meatbox Loaded Fries" 
              className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-border/50"
            />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-bg-card border border-primary p-4 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center transform hover:rotate-2 transition-transform"
            >
               <span className="text-4xl mb-1">🧀</span>
               <span className="font-bebas text-lg leading-none">Extra Cheesy</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-20 pointer-events-none">
        <span className="font-bebas text-[10vw] leading-none tracking-widest text-border">❤ EAT MEAT. REPEAT.</span>
      </div>
    </section>
  );
}
