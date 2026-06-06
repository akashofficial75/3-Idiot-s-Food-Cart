import { useState } from 'react';
import { motion } from 'motion/react';
import { menuData } from '../data';
import { Search } from 'lucide-react';

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuData.items.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-5xl md:text-6xl text-white inline-block border-b-4 border-primary pb-2"
          >
            OUR MENU
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter text-xl text-text-secondary mt-4"
          >
            Fresh. Bold. Unforgettable.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Scrollable Categories on Mobile */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {menuData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-inter text-sm font-medium px-5 py-2.5 rounded-full transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-primary text-black scale-105 shadow-lg relative z-10' 
                      : 'bg-bg-card text-text-secondary hover:text-white border border-border hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-card border border-border rounded-full py-2.5 pl-10 pr-4 text-white font-inter text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Special Render for Combos if 'Combos' or 'All' is selected and there's no active search hiding them */}
        {(activeCategory === 'All' || activeCategory === 'Combos') && !searchQuery && (
          <div className="mb-16">
             {activeCategory === 'Combos' && <h3 className="font-bebas text-4xl text-primary mb-6">Combos</h3>}
             <div className="grid grid-cols-1 gap-6">
                {menuData.combos.map((combo, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={combo.id}
                    className="bg-bg-card border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_0_30px_rgba(245,166,35,0.15)] hover:-translate-y-1 transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="font-bebas text-3xl md:text-4xl text-white">{combo.name}</h4>
                        <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                          {combo.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {combo.items.map((item, i) => (
                          <span key={i} className="bg-black border border-border text-text-secondary text-sm px-3 py-1 rounded-full font-inter">
                            + {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end justify-center shrink-0 w-full md:w-auto">
                        <div className="font-oswald text-4xl font-bold text-primary mb-4">৳{combo.price}</div>
                        <a 
                          href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full md:w-auto bg-primary text-black text-center font-inter font-bold px-8 py-3 rounded-xl hover:bg-primary-hover hover:scale-105 transition-all block"
                        >
                          Order Now
                        </a>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        )}

        {/* Regular Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={item.id}
              className={`bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(245,166,35,0.15)] transition-all duration-300 ${item.featured ? 'sm:col-span-2 lg:col-span-2 xl:col-span-2 border-primary/50' : ''}`}
            >
              <div className={`relative overflow-hidden bg-black ${item.featured ? 'h-64' : 'h-48'}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-primary/50 text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.badge}
                  </div>
                )}
                {item.featured && (
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                )}
              </div>
              
              <div className="p-5 flex flex-col flex-1 relative z-10">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-bebas text-2xl text-white tracking-wide">{item.name}</h3>
                  <div className="font-oswald text-xl font-bold text-primary shrink-0">
                    {item.oldPrice && <span className="text-sm line-through text-text-secondary mr-2 font-normal">৳{item.oldPrice}</span>}
                    ৳{item.price}
                  </div>
                </div>
                
                <p className="font-inter text-sm text-text-secondary mb-6 flex-1 line-clamp-2">
                  {item.description}
                </p>

                <a 
                  href="https://wa.me/8801327240031?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%203%20Idiot's%20Food%20Cart." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-border hover:bg-primary text-white hover:text-black font-inter font-semibold py-2.5 rounded-lg transition-colors group-hover:shadow-lg"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && activeCategory !== 'Combos' && (
          <div className="text-center py-20">
            <p className="font-inter text-text-secondary text-lg">No items found matching your search.</p>
          </div>
        )}

      </div>
    </section>
  );
}
