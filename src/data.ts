import motkaImg from './assets/images/motka_meatbox_1780722154181.png';
import meatboxNormalImg from './assets/images/meatbox_normal_1780722660332.png';

export const menuData = {
  categories: ['All', 'Burgers', 'Meatbox', 'Motka Meatbox', 'Others', 'Drinks', 'Combos'],
  items: [
    {
      id: 1,
      name: 'Chicken Burger',
      category: 'Burgers',
      price: 50,
      description: 'Classic chicken patty with fresh lettuce and mayo.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Special Chicken Burger',
      category: 'Burgers',
      price: 70,
      badge: '🔥 Best Seller',
      description: 'Upgraded with extra sauce and premium ingredients.',
      image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Chicken Burger Sub',
      category: 'Burgers',
      price: 80,
      badge: '⭐ Chef\'s Pick',
      description: 'Long sub bun loaded with chicken and special sauces.',
      image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Meatbox Normal',
      category: 'Meatbox',
      price: 100,
      description: 'A messy, delicious box of fries, chicken, and assorted sauces.',
      image: meatboxNormalImg,
    },
    {
      id: 5,
      name: 'Meatbox Big',
      category: 'Meatbox',
      price: 130,
      badge: '🔥 Popular',
      description: 'Larger portion for the real meat lovers.',
      image: meatboxNormalImg,
    },
    {
      id: 6,
      name: 'Motka Meatbox',
      category: 'Motka Meatbox',
      price: 180,
      oldPrice: 200,
      badge: '🔥 LIMITED OFFER',
      description: 'One Box. Full On Taste! Chicken + Fries + Sausage + Cheese + Special Mayo.',
      image: motkaImg,
      featured: true,
    },
    {
      id: 7,
      name: 'Meatball',
      category: 'Others',
      price: 20,
      description: 'Tasty, saucy meatballs.',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'French Fries',
      category: 'Others',
      price: 50,
      description: 'Crispy golden fries.',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 9,
      name: 'Mineral Water',
      category: 'Drinks',
      price: 20,
      description: 'Chilled water.',
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 10,
      name: 'Soft Drinks',
      category: 'Drinks',
      price: 20,
      description: 'Refreshing cold drink.',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop',
    },
  ],
  combos: [
    {
      id: 'c1',
      name: 'COMBO 1',
      price: 220,
      badge: 'Best Value',
      items: ['Chicken Burger', 'Meatbox Normal', 'Meatball', 'French Fries', 'Soft Drinks'],
    },
    {
      id: 'c2',
      name: 'COMBO 2',
      price: 270,
      badge: 'Ultimate Feast',
      items: ['Chicken Burger Sub', 'Meatbox Big', 'Meatball', 'French Fries', 'Soft Drinks'],
    }
  ]
};

export const reviews = [
  {
    quote: "The Special Chicken Burger is genuinely the best burger I've had in Savar. Crazy good for the price.",
    name: "Rakib H."
  },
  {
    quote: "Motka Meatbox is unreal. Cheese everywhere, flavor on point. Coming back every week.",
    name: "Tanha M."
  },
  {
    quote: "Loyalty card is a great touch. Already halfway to my free burger lol",
    name: "Fahim R."
  },
  {
    quote: "Combo 2 is a full meal for ৳270. That's insane value. The sub hits different.",
    name: "Nusrat J."
  },
  {
    quote: "Best street food near Enam Medical. Students trust this spot for a reason.",
    name: "Arif K."
  }
];
