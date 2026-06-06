import { motion } from 'motion/react';
import { Flame, Leaf, Heart } from 'lucide-react';

export function Story() {
  const features = [
    {
      icon: <Flame size={24} className="text-primary" />,
      title: 'Bold Flavors',
      desc: 'We don\'t do bland. Ever.'
    },
    {
      icon: <Leaf size={24} className="text-primary" />,
      title: 'Fresh Ingredients',
      desc: 'Made fresh, every single day.'
    },
    {
      icon: <Heart size={24} className="text-primary" />,
      title: 'Made With Love',
      desc: 'Three idiots who genuinely care about your food.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-bebas text-5xl md:text-6xl text-white mb-8 leading-[1.1]">
              THREE FRIENDS.<br/>ONE CART.<br/><span className="text-primary">ENDLESS FLAVOR.</span>
            </h2>
            
            <div className="space-y-6 font-inter text-text-secondary text-lg mb-12">
              <p>
                It started with a simple idea — great food doesn't need a fancy restaurant. 
                Just fresh ingredients, bold flavors, and good company.
              </p>
              <p>
                We set up our cart near Enam Medical College in Savar, and the rest is history. 
                Every burger, every meatbox, every meatball — made with love and a little bit of madness. 
                Welcome to 3 Idiot's.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="bg-bg-card border border-border p-5 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-inter font-bold text-white mb-2">{feature.title}</h4>
                  <p className="font-inter text-sm text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
              alt="Night food scene" 
              className="absolute top-0 right-0 w-[80%] h-[80%] object-cover rounded-3xl border-2 border-border shadow-2xl z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" 
              alt="Delicious burger" 
              className="absolute bottom-0 left-0 w-[60%] h-[50%] object-cover rounded-3xl border-4 border-bg-main shadow-2xl z-20"
            />
            {/* Small decorative accent */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
