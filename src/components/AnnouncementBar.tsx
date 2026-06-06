import { X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-black py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center relative">
        <div className="overflow-hidden whitespace-nowrap w-full md:w-auto text-center px-8">
          <p className="font-inter font-semibold text-sm md:text-base animate-marquee md:animate-none inline-block">
            🔥 Loyalty Program LIVE — Buy 10 products, get 1 FREE Burger! <a href="#loyalty" className="underline pl-1">Learn More ↓</a>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors"
          aria-label="Dismiss announcement"
        >
          <X size={16} />
        </button>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
