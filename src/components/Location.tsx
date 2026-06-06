import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Facebook, Navigation, ExternalLink, MessageCircle } from 'lucide-react';

export function Location() {
  const mapLink = "https://www.google.com/maps/place/%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BE%E0%A6%AA%E0%A7%81%E0%A6%B0+%E0%A6%AE%E0%A6%BE%E0%A6%A0+%E0%A6%B8%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B0+%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE/@23.8375949,90.2506296,779m/data=!3m1!1e3!4m6!3m5!1s0x3755eb97e1789631:0x45b3ead858f97ffe!8m2!3d23.8371141!4d90.2518527!16s%2Fg%2F11snnb527b";
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=23.8371141,90.2518527`;

  return (
    <section id="contact" className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 bg-bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Contact Info (Left) */}
          <div className="p-8 md:p-12 lg:col-span-2 flex flex-col justify-center relative z-10 w-full bg-bg-card/95 backdrop-blur-md">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bebas text-5xl md:text-6xl text-white mb-8"
            >
              FIND US
            </motion.h2>

            <div className="space-y-6 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white mb-1">Tarapur Math</h4>
                  <p className="font-inter text-text-secondary leading-relaxed text-sm">
                    Savar, Dhaka,<br />
                    Bangladesh — 1340<br/>
                    <span className="text-primary italic mt-1 block">Nearby: Enam Medical College and Hospital</span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white mb-1">Phone</h4>
                  <a href="tel:+8801327240031" className="font-inter text-text-secondary hover:text-primary transition-colors text-sm">
                    +8801327240031
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white mb-1">Hours</h4>
                  <p className="font-inter text-text-secondary text-sm">Open 7 Days a Week</p>
                  <p className="font-inter text-text-secondary text-sm mt-1">12:00 PM – 10:00 PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <a 
                href={directionsLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-black font-inter font-bold text-center py-3.5 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,166,35,0.3)] w-full flex items-center justify-center gap-2"
              >
                <Navigation size={18} />
                Get Directions
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+8801327240031"
                  className="bg-bg-main border border-border hover:border-primary/50 text-white font-inter font-bold text-center py-3 rounded-xl transition-all hover:bg-white/5 w-full flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} />
                  Call Us
                </a>
                <a 
                  href="https://wa.me/8801327240031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366] font-inter font-bold text-center py-3 rounded-xl transition-all w-full flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map (Right) */}
          <div className="min-h-[400px] lg:col-span-3 relative w-full bg-[#0a0a0a]">
            {/* Glassmorphism location card floating on map in desktop */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl max-w-xs hidden sm:flex flex-col gap-2"
            >
               <h4 className="font-bebas text-2xl text-white">Tarapur Math</h4>
               <p className="font-inter text-xs text-text-secondary">Savar, Dhaka, Bangladesh</p>
               <a 
                 href={mapLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-2 text-primary hover:text-primary-hover font-inter text-sm font-bold flex items-center gap-1 transition-colors"
               >
                 Open in Google Maps <ExternalLink size={14} />
               </a>
            </motion.div>

            <iframe 
              title="Google Maps Location for Tarapur Math, Savar"
              src="https://maps.google.com/maps?q=23.8371141,90.2518527&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9) grayscale(0.2)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10"
            ></iframe>
            
            {/* Dark gradient overlay to blend map edges into the layout softly */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
