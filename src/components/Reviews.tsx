import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { reviews } from '../data';

export function Reviews() {
  // Duplicate reviews to create a seamless infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bebas text-5xl md:text-6xl text-white"
        >
          WHAT PEOPLE ARE SAYING
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-x-hidden p-4 group">
        <div className="flex w-max shrink-0 animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {duplicatedReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[400px] bg-bg-main border border-border p-8 rounded-2xl shadow-xl flex flex-col justify-between shrink-0"
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-inter text-lg text-white mb-8 italic">
                  "{review.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bebas text-xl text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white text-sm">{review.name}</h4>
                  <span className="font-inter text-xs text-text-secondary">Verified Customer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-card to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-card to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px accounts for half of the gap space */
        }
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
