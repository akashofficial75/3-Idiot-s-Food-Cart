import { Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-primary/50 text-text-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Top & Middle combined for flex layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 border-b border-border pb-12">
          
          {/* Logo Area */}
          <div className="flex flex-col items-start select-none max-w-sm">
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-bebas text-5xl text-primary leading-none">3</span>
              <span className="font-bebas text-4xl text-white leading-none">Idiots</span>
            </div>
            <span className="font-inter text-xs tracking-widest text-text-secondary uppercase mb-4">Food Cart</span>
            <p className="font-inter text-sm text-text-secondary">
              Good Food • Good Friends • Great Times. Serving the best street food in Savar since day one.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 font-inter text-sm">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#loyalty" className="hover:text-primary transition-colors">Loyalty Program</a>
            <a href="#specials" className="hover:text-primary transition-colors">Specials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="tel:+8801327240031" className="hover:text-primary transition-colors">Call Us: +8801327240031</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors flex items-center gap-2">
              <Facebook size={14} /> Facebook
            </a>
            <a href="https://wa.me/8801327240031" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-2">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-text-secondary/60">
          <p>© {new Date().getFullYear()} 3 Idiot's Food Cart. All rights reserved.</p>
          <p>Made with ❤️ in Savar.</p>
        </div>

        {/* Developer Credit */}
        <div className="mt-12 text-center text-xs font-inter text-text-secondary/60">
          <p className="hover:text-white transition-colors cursor-default">Developed By AkashProg</p>
        </div>

      </div>
    </footer>
  );
}
