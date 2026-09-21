/**
 * VIRTUSA COMPUTERS — Product Data Store
 * Single source of truth for all 30 products.
 * Categories: 'laptops' | 'computers' | 'mobiles'
 */

const PRODUCTS = [
  /* ── LAPTOPS ─────────────────────────────── */
  {
    id: 'laptop1',
    name: 'Microsoft Surface Laptop 2',
    category: 'laptops',
    price: 1049,
    originalPrice: 1299,
    image: 'laptop1.jpg',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    rating: 4.7,
    reviews: 128,
    specs: {
      'Screen Size':  '13.5" PixelSense',
      'Processor':    'Intel Core i5-8250U',
      'RAM':          '8 GB LPDDR3',
      'Storage':      '128 GB SSD',
      'Graphics':     'Intel UHD 620',
      'Battery':      'Up to 14.5 hrs',
      'OS':           'Windows 10 Home',
      'Weight':       '1.28 kg'
    },
    description: 'The Surface Laptop 2 delivers powerful performance in a sleek, premium aluminum design. With its brilliant PixelSense touchscreen and all-day battery life, it\'s the perfect companion for students and professionals who demand both style and substance.'
  },
  {
    id: 'laptop2',
    name: 'Dell XPS 15 OLED Laptop',
    category: 'laptops',
    price: 2132,
    originalPrice: 2499,
    image: 'laptop2.jpg',
    badge: 'Premium',
    badgeColor: 'badge-purple',
    rating: 4.9,
    reviews: 89,
    specs: {
      'Screen Size':  '15.6" 3.5K OLED',
      'Processor':    'Intel Core i9-12900H',
      'RAM':          '32 GB DDR5',
      'Storage':      '1 TB NVMe SSD',
      'Graphics':     'NVIDIA RTX 3050 Ti',
      'Battery':      'Up to 12 hrs',
      'OS':           'Windows 11 Pro',
      'Weight':       '1.86 kg'
    },
    description: 'Experience stunning visuals with the Dell XPS 15\'s gorgeous 3.5K OLED display. Powered by 12th Gen Intel Core i9 and RTX 3050 Ti, this powerhouse handles everything from video editing to gaming with ease.'
  },
  {
    id: 'laptop3',
    name: 'Acer Aspire 3 Slim Laptop',
    category: 'laptops',
    price: 339,
    originalPrice: 449,
    image: 'laptop3.jpg',
    badge: 'Best Value',
    badgeColor: 'badge-green',
    rating: 4.2,
    reviews: 245,
    specs: {
      'Screen Size':  '15.6" Full HD IPS',
      'Processor':    'Intel Core i3-1115G4',
      'RAM':          '8 GB DDR4',
      'Storage':      '256 GB SSD',
      'Graphics':     'Intel UHD Graphics',
      'Battery':      'Up to 8 hrs',
      'OS':           'Windows 11 Home',
      'Weight':       '1.9 kg'
    },
    description: 'The Acer Aspire 3 offers outstanding value without compromise. Its thin profile, bright IPS display, and fast SSD storage make it ideal for everyday tasks, browsing, and studying on a budget.'
  },
  {
    id: 'laptop4',
    name: 'HP Pavilion Gaming Laptop',
    category: 'laptops',
    price: 649,
    originalPrice: 799,
    image: 'laptop4.jpg',
    badge: 'Gaming',
    badgeColor: 'badge-red',
    rating: 4.5,
    reviews: 193,
    specs: {
      'Screen Size':  '15.6" 144Hz FHD',
      'Processor':    'AMD Ryzen 5 5600H',
      'RAM':          '16 GB DDR4',
      'Storage':      '512 GB NVMe SSD',
      'Graphics':     'NVIDIA GTX 1650',
      'Battery':      'Up to 7 hrs',
      'OS':           'Windows 11 Home',
      'Weight':       '2.19 kg'
    },
    description: 'Level up your gaming experience with the HP Pavilion Gaming Laptop. Featuring a silky-smooth 144Hz display and dedicated GTX 1650 graphics, it handles modern games effortlessly at a wallet-friendly price.'
  },
  {
    id: 'laptop5',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops',
    price: 1399,
    originalPrice: 1699,
    image: 'laptop5.jpg',
    badge: 'Business',
    badgeColor: 'badge-cyan',
    rating: 4.8,
    reviews: 76,
    specs: {
      'Screen Size':  '14" 2.8K OLED',
      'Processor':    'Intel Core i7-1260P',
      'RAM':          '16 GB LPDDR5',
      'Storage':      '512 GB PCIe 4.0 SSD',
      'Graphics':     'Intel Iris Xe',
      'Battery':      'Up to 15 hrs',
      'OS':           'Windows 11 Pro',
      'Weight':       '1.12 kg'
    },
    description: 'The ThinkPad X1 Carbon Gen 10 is the ultimate business ultrabook. Incredibly light at just 1.12 kg, with military-grade durability, a stunning OLED display, and all-day battery life to keep you productive anywhere.'
  },
  {
    id: 'laptop6',
    name: 'Apple MacBook Air M2',
    category: 'laptops',
    price: 1199,
    originalPrice: 1299,
    image: 'laptop6.jpg',
    badge: 'New Arrival',
    badgeColor: 'badge-cyan',
    rating: 4.9,
    reviews: 312,
    specs: {
      'Screen Size':  '13.6" Liquid Retina',
      'Processor':    'Apple M2 Chip',
      'RAM':          '8 GB Unified',
      'Storage':      '256 GB SSD',
      'Graphics':     'Apple 8-core GPU',
      'Battery':      'Up to 18 hrs',
      'OS':           'macOS Ventura',
      'Weight':       '1.24 kg'
    },
    description: 'Redesigned around the breakthrough Apple M2 chip, the MacBook Air delivers exceptional performance in a impossibly thin and fanless design. The stunning Liquid Retina display and all-day battery life make it the most popular laptop on the planet.'
  },
  {
    id: 'laptop7',
    name: 'ASUS ROG Zephyrus G14',
    category: 'laptops',
    price: 1449,
    originalPrice: 1699,
    image: 'laptop7.jpg',
    badge: 'Gaming',
    badgeColor: 'badge-red',
    rating: 4.7,
    reviews: 154,
    specs: {
      'Screen Size':  '14" 2560x1600 165Hz',
      'Processor':    'AMD Ryzen 9 6900HS',
      'RAM':          '16 GB DDR5',
      'Storage':      '1 TB PCIe 4.0 SSD',
      'Graphics':     'AMD RX 6700S 8 GB',
      'Battery':      'Up to 10 hrs',
      'OS':           'Windows 11 Home',
      'Weight':       '1.65 kg'
    },
    description: 'The ASUS ROG Zephyrus G14 is a compact gaming powerhouse that doesn\'t sacrifice performance for portability. With its dazzling QHD+ 165Hz display and top-tier AMD components, it dominates both gaming and creative workflows.'
  },
  {
    id: 'laptop8',
    name: 'Samsung Galaxy Book2 Pro',
    category: 'laptops',
    price: 999,
    originalPrice: 1149,
    image: 'laptop8.jpg',
    badge: 'Ultra-Light',
    badgeColor: 'badge-cyan',
    rating: 4.5,
    reviews: 67,
    specs: {
      'Screen Size':  '13.3" Super AMOLED',
      'Processor':    'Intel Core i7-1260P',
      'RAM':          '16 GB LPDDR5',
      'Storage':      '512 GB NVMe SSD',
      'Graphics':     'Intel Iris Xe',
      'Battery':      'Up to 21 hrs',
      'OS':           'Windows 11 Home',
      'Weight':       '0.87 kg'
    },
    description: 'Weighing under 900 grams, the Samsung Galaxy Book2 Pro is one of the lightest premium laptops ever made. Its stunning Super AMOLED display and extraordinary battery life make it perfect for professionals always on the move.'
  },
  {
    id: 'laptop9',
    name: 'Microsoft Surface Pro 9',
    category: 'laptops',
    price: 1299,
    originalPrice: 1499,
    image: 'laptop9.jpg',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    rating: 4.6,
    reviews: 98,
    specs: {
      'Screen Size':  '13" 2880x1920 120Hz',
      'Processor':    'Intel Core i7-1255U',
      'RAM':          '16 GB LPDDR5x',
      'Storage':      '256 GB SSD',
      'Graphics':     'Intel Iris Xe',
      'Battery':      'Up to 15.5 hrs',
      'OS':           'Windows 11 Pro',
      'Weight':       '0.88 kg'
    },
    description: 'The Surface Pro 9 redefines versatility — it\'s a full laptop and a studio tablet in one. The ultra-bright touchscreen with 120Hz refresh, combined with a pen and detachable keyboard, makes it perfect for creative professionals.'
  },
  {
    id: 'laptop10',
    name: 'HP Spectre x360 2-in-1',
    category: 'laptops',
    price: 1549,
    originalPrice: 1799,
    image: 'laptop10.jpg',
    badge: '2-in-1',
    badgeColor: 'badge-purple',
    rating: 4.7,
    reviews: 113,
    specs: {
      'Screen Size':  '14" 2.8K OLED 120Hz',
      'Processor':    'Intel Core i7-1255U',
      'RAM':          '16 GB LPDDR5',
      'Storage':      '1 TB PCIe 4.0 SSD',
      'Graphics':     'Intel Iris Xe',
      'Battery':      'Up to 17 hrs',
      'OS':           'Windows 11 Home',
      'Weight':       '1.41 kg'
    },
    description: 'The HP Spectre x360 is a stunning 2-in-1 with a breathtaking OLED display and a premium gem-cut design. Flip, fold, or tent — its versatile form factor adapts to any situation, powered by Intel Core i7 performance.'
  },

  /* ── COMPUTERS ────────────────────────────── */
  {
    id: 'computer1',
    name: 'Virtusa Pro Gaming Tower',
    category: 'computers',
    price: 1299,
    originalPrice: 1599,
    image: 'computer1.jpg',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    rating: 4.8,
    reviews: 87,
    specs: {
      'Processor':    'Intel Core i7-13700K',
      'RAM':          '32 GB DDR5 6000MHz',
      'Storage':      '1 TB NVMe SSD + 2 TB HDD',
      'Graphics':     'NVIDIA RTX 4070 12 GB',
      'Motherboard':  'ASUS ROG Strix Z790',
      'Cooling':      '240mm AIO Liquid Cooler',
      'PSU':          '750W Gold Modular',
      'OS':           'Windows 11 Home'
    },
    description: 'Our flagship gaming PC built for ultra-high performance. The combination of Intel Core i7-13700K and RTX 4070 delivers exceptional framerates in all modern titles. Custom-built and fully tested by Virtusa Computers experts.'
  },
  {
    id: 'computer2',
    name: 'Virtusa Office Workstation',
    category: 'computers',
    price: 699,
    originalPrice: 849,
    image: 'computer2.jpg',
    badge: 'Office',
    badgeColor: 'badge-cyan',
    rating: 4.5,
    reviews: 142,
    specs: {
      'Processor':    'Intel Core i5-12400',
      'RAM':          '16 GB DDR4 3200MHz',
      'Storage':      '512 GB NVMe SSD',
      'Graphics':     'Intel UHD 730',
      'Motherboard':  'MSI PRO H610M',
      'Cooling':      'Stock Intel Cooler',
      'PSU':          '550W Bronze',
      'OS':           'Windows 11 Pro'
    },
    description: 'The perfect workstation for businesses and home offices. Blazing-fast SSD storage, reliable Intel Core i5 performance, and pre-installed Windows 11 Pro ensure you\'re productive from day one.'
  },
  {
    id: 'computer3',
    name: 'Virtusa Budget Desktop',
    category: 'computers',
    price: 399,
    originalPrice: 499,
    image: 'computer3.jpg',
    badge: 'Best Value',
    badgeColor: 'badge-green',
    rating: 4.2,
    reviews: 298,
    specs: {
      'Processor':    'AMD Ryzen 3 4100',
      'RAM':          '8 GB DDR4 2666MHz',
      'Storage':      '256 GB SSD',
      'Graphics':     'AMD Radeon RX 550',
      'Motherboard':  'Gigabyte A520M DS3H',
      'Cooling':      'AMD Wraith Stealth',
      'PSU':          '450W Bronze',
      'OS':           'Windows 11 Home'
    },
    description: 'An affordable yet capable desktop PC for everyday computing needs. Handles web browsing, office applications, video streaming, and light gaming without breaking the bank.'
  },
  {
    id: 'computer4',
    name: 'Virtusa Creator Station',
    category: 'computers',
    price: 1899,
    originalPrice: 2299,
    image: 'computer4.jpg',
    badge: 'Creator',
    badgeColor: 'badge-purple',
    rating: 4.9,
    reviews: 55,
    specs: {
      'Processor':    'AMD Ryzen 9 7950X',
      'RAM':          '64 GB DDR5 5600MHz',
      'Storage':      '2 TB PCIe 4.0 SSD',
      'Graphics':     'NVIDIA RTX 4080 16 GB',
      'Motherboard':  'MSI MEG X670E ACE',
      'Cooling':      '360mm AIO + 6 Fans',
      'PSU':          '1000W Platinum',
      'OS':           'Windows 11 Pro'
    },
    description: 'Built for video editors, 3D artists, and content creators who demand the absolute best. The Ryzen 9 7950X with RTX 4080 tears through 4K rendering, 3D animation, and AI workflows in record time.'
  },
  {
    id: 'computer5',
    name: 'Virtusa Mini PC Pro',
    category: 'computers',
    price: 549,
    originalPrice: 649,
    image: 'computer5.jpg',
    badge: 'Compact',
    badgeColor: 'badge-cyan',
    rating: 4.4,
    reviews: 176,
    specs: {
      'Processor':    'Intel Core i7-1165G7',
      'RAM':          '16 GB DDR4',
      'Storage':      '512 GB NVMe SSD',
      'Graphics':     'Intel Iris Xe',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.2',
      'Ports':        '2x Thunderbolt 4, USB-A, HDMI 2.0',
      'Power':        '65W Adapter',
      'OS':           'Windows 11 Pro'
    },
    description: 'The Virtusa Mini PC packs desktop-class performance into an ultra-compact form factor. Perfect for digital signage, home theatres, or as a powerful yet unobtrusive office workstation that fits in your pocket.'
  },
  {
    id: 'computer6',
    name: 'Virtusa All-in-One PC 27"',
    category: 'computers',
    price: 1099,
    originalPrice: 1299,
    image: 'computer6.jpg',
    badge: 'All-in-One',
    badgeColor: 'badge-purple',
    rating: 4.6,
    reviews: 93,
    specs: {
      'Display':      '27" 4K IPS Touchscreen',
      'Processor':    'Intel Core i7-12700H',
      'RAM':          '16 GB DDR4',
      'Storage':      '1 TB NVMe SSD',
      'Graphics':     'NVIDIA GTX 1650',
      'Camera':       '1080p Webcam IR',
      'Audio':        'Harman Kardon Speakers',
      'OS':           'Windows 11 Home'
    },
    description: 'Our stunning 27" All-in-One combines a 4K touchscreen monitor and a powerful computer into a single elegant unit. No cables cluttering your desk — just pure, clean productivity with cinematic visuals.'
  },
  {
    id: 'computer7',
    name: 'Virtusa eSports Rig X',
    category: 'computers',
    price: 2199,
    originalPrice: 2699,
    image: 'computer7.jpg',
    badge: 'eSports',
    badgeColor: 'badge-red',
    rating: 4.9,
    reviews: 41,
    specs: {
      'Processor':    'Intel Core i9-13900KS',
      'RAM':          '32 GB DDR5 7200MHz',
      'Storage':      '2 TB PCIe 5.0 SSD',
      'Graphics':     'NVIDIA RTX 4090 24 GB',
      'Cooling':      '420mm AIO Liquid Cooler',
      'Case':         'Full Tower with RGB',
      'PSU':          '1200W Titanium',
      'OS':           'Windows 11 Pro'
    },
    description: 'Designed for professional eSports competitors and elite streamers. The RTX 4090 pushes 4K 240fps in competitive titles, while the i9-13900KS handles streaming, Discord, and background apps without breaking a sweat.'
  },
  {
    id: 'computer8',
    name: 'Virtusa Home Family PC',
    category: 'computers',
    price: 499,
    originalPrice: 599,
    image: 'computer8.jpg',
    badge: 'Family',
    badgeColor: 'badge-green',
    rating: 4.3,
    reviews: 224,
    specs: {
      'Processor':    'AMD Ryzen 5 5600G',
      'RAM':          '16 GB DDR4',
      'Storage':      '512 GB SSD + 1 TB HDD',
      'Graphics':     'AMD Radeon RX 6600',
      'Audio':        'Realtek ALC887',
      'Connectivity': 'Wi-Fi 5, Bluetooth 4.2',
      'PSU':          '550W Bronze',
      'OS':           'Windows 11 Home'
    },
    description: 'The perfect family computer that handles everything from homework and video calls to casual gaming and movie nights. Ample storage, capable integrated graphics, and a quiet operation make it ideal for the home.'
  },
  {
    id: 'computer9',
    name: 'Virtusa Server Tower Pro',
    category: 'computers',
    price: 2899,
    originalPrice: 3499,
    image: 'computer9.jpg',
    badge: 'Server',
    badgeColor: 'badge-purple',
    rating: 4.8,
    reviews: 28,
    specs: {
      'Processor':    'Intel Xeon W3-2423 (6C/12T)',
      'RAM':          '64 GB ECC DDR5',
      'Storage':      '4 TB Enterprise NVMe RAID',
      'Graphics':     'NVIDIA RTX A2000',
      'Motherboard':  'ASUS Pro WS W680M-ACE',
      'NIC':          '10GbE + 2.5GbE',
      'PSU':          '800W Platinum Redundant',
      'OS':           'Windows Server 2022'
    },
    description: 'Enterprise-grade workstation server for small businesses, CAD engineering, and data science. ECC memory protects data integrity, while NVMe RAID ensures blazing-fast read/write speeds with zero downtime.'
  },
  {
    id: 'computer10',
    name: 'Virtusa Eco Office PC',
    category: 'computers',
    price: 329,
    originalPrice: 399,
    image: 'computer10.jpg',
    badge: 'Eco',
    badgeColor: 'badge-green',
    rating: 4.1,
    reviews: 189,
    specs: {
      'Processor':    'Intel Core i3-12100',
      'RAM':          '8 GB DDR4',
      'Storage':      '256 GB SSD',
      'Graphics':     'Intel UHD 730',
      'Power':        'Only 65W TDP',
      'Noise':        'Fanless Design',
      'PSU':          '350W Bronze',
      'OS':           'Windows 11 Home'
    },
    description: 'Our most energy-efficient desktop PC. Its near-silent fanless design and low 65W power draw make it incredibly eco-friendly without sacrificing the performance needed for everyday office tasks.'
  },

  /* ── MOBILES ──────────────────────────────── */
  {
    id: 'mobile1',
    name: 'Samsung Galaxy S23 Ultra',
    category: 'mobiles',
    price: 1199,
    originalPrice: 1399,
    image: 'mobile1.jpg',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    rating: 4.9,
    reviews: 542,
    specs: {
      'Display':      '6.8" Dynamic AMOLED 2X 120Hz',
      'Processor':    'Snapdragon 8 Gen 2',
      'RAM':          '12 GB',
      'Storage':      '256 GB',
      'Rear Camera':  '200MP + 12MP + 10MP + 10MP',
      'Front Camera': '12 MP',
      'Battery':      '5000 mAh 45W Fast Charge',
      'OS':           'Android 13, OneUI 5.1'
    },
    description: 'The Samsung Galaxy S23 Ultra is the ultimate Android powerhouse. Its built-in S Pen, 200MP camera that shoots stunning detail even in darkness, and titanium design make it the benchmark for flagship smartphones.'
  },
  {
    id: 'mobile2',
    name: 'iPhone 15 Pro Max',
    category: 'mobiles',
    price: 1199,
    originalPrice: 1299,
    image: 'mobile2.jpg',
    badge: 'New Arrival',
    badgeColor: 'badge-cyan',
    rating: 4.9,
    reviews: 687,
    specs: {
      'Display':      '6.7" Super Retina XDR 120Hz',
      'Processor':    'Apple A17 Pro (3nm)',
      'RAM':          '8 GB',
      'Storage':      '256 GB',
      'Rear Camera':  '48MP Main + 12MP Ultra-Wide + 12MP Periscope',
      'Front Camera': '12 MP TrueDepth',
      'Battery':      '4422 mAh USB-C Fast Charge',
      'OS':           'iOS 17'
    },
    description: 'The iPhone 15 Pro Max is Apple\'s most advanced iPhone ever. With the revolutionary A17 Pro chip, a titanium frame, and a periscope telephoto camera with up to 5x optical zoom, it sets a new standard for what a smartphone can do.'
  },
  {
    id: 'mobile3',
    name: 'Google Pixel 8 Pro',
    category: 'mobiles',
    price: 999,
    originalPrice: 1099,
    image: 'mobile3.jpg',
    badge: 'AI Camera',
    badgeColor: 'badge-purple',
    rating: 4.7,
    reviews: 231,
    specs: {
      'Display':      '6.7" LTPO OLED 120Hz',
      'Processor':    'Google Tensor G3',
      'RAM':          '12 GB',
      'Storage':      '128 GB',
      'Rear Camera':  '50MP + 48MP Ultra + 48MP Tele',
      'Front Camera': '10.5 MP',
      'Battery':      '5050 mAh 30W',
      'OS':           'Android 14'
    },
    description: 'The Pixel 8 Pro is the smartest phone Google has ever made. Powered by Tensor G3 with on-device AI, it captures stunning photos in any condition, translates conversations in real-time, and updates guaranteed for 7 years.'
  },
  {
    id: 'mobile4',
    name: 'OnePlus 11 5G',
    category: 'mobiles',
    price: 699,
    originalPrice: 799,
    image: 'mobile4.jpg',
    badge: 'Fast Charge',
    badgeColor: 'badge-orange',
    rating: 4.6,
    reviews: 318,
    specs: {
      'Display':      '6.7" 2K AMOLED 120Hz',
      'Processor':    'Snapdragon 8 Gen 2',
      'RAM':          '16 GB LPDDR5X',
      'Storage':      '256 GB UFS 3.1',
      'Rear Camera':  '50MP Hasselblad + 48MP + 32MP',
      'Front Camera': '16 MP',
      'Battery':      '5000 mAh 100W SuperVOOC',
      'OS':           'Android 13, OxygenOS 13'
    },
    description: 'The OnePlus 11 delivers flagship-level performance at a mid-tier price. Its Hasselblad co-tuned camera system and insane 100W SuperVOOC charging (0-100% in 25 minutes) make it a phone that works as fast as you do.'
  },
  {
    id: 'mobile5',
    name: 'Xiaomi 13 Ultra',
    category: 'mobiles',
    price: 1099,
    originalPrice: 1299,
    image: 'mobile5.jpg',
    badge: 'Photography',
    badgeColor: 'badge-purple',
    rating: 4.8,
    reviews: 167,
    specs: {
      'Display':      '6.73" 2K AMOLED 120Hz',
      'Processor':    'Snapdragon 8 Gen 2',
      'RAM':          '12 GB',
      'Storage':      '256 GB UFS 4.0',
      'Rear Camera':  '50MP Leica 1" + 50MP + 50MP + 50MP',
      'Front Camera': '32 MP',
      'Battery':      '5000 mAh 90W Wired + 50W Wireless',
      'OS':           'Android 13, MIUI 14'
    },
    description: 'Co-engineered with Leica, the Xiaomi 13 Ultra houses a massive 1-inch main sensor and four 50MP cameras, making it the undisputed king of mobile photography. Every shot looks like it was taken by a professional.'
  },
  {
    id: 'mobile6',
    name: 'Samsung Galaxy A54 5G',
    category: 'mobiles',
    price: 449,
    originalPrice: 499,
    image: 'mobile6.jpg',
    badge: 'Best Value',
    badgeColor: 'badge-green',
    rating: 4.5,
    reviews: 485,
    specs: {
      'Display':      '6.4" Super AMOLED 120Hz',
      'Processor':    'Exynos 1380',
      'RAM':          '8 GB',
      'Storage':      '128 GB (expandable)',
      'Rear Camera':  '50MP OIS + 12MP + 5MP',
      'Front Camera': '32 MP',
      'Battery':      '5000 mAh 25W',
      'OS':           'Android 13, OneUI 5.1'
    },
    description: 'The Galaxy A54 5G brings premium Samsung features to a mid-range price. Its brilliant AMOLED display, capable 50MP camera with OIS, and impressive battery life deliver a flagship-like experience without the flagship price tag.'
  },
  {
    id: 'mobile7',
    name: 'Realme GT 3 Pro',
    category: 'mobiles',
    price: 599,
    originalPrice: 699,
    image: 'mobile7.jpg',
    badge: 'Performance',
    badgeColor: 'badge-red',
    rating: 4.4,
    reviews: 203,
    specs: {
      'Display':      '6.74" QHD+ AMOLED 144Hz',
      'Processor':    'Snapdragon 8+ Gen 1',
      'RAM':          '12 GB LPDDR5',
      'Storage':      '256 GB UFS 3.1',
      'Rear Camera':  '50MP Sony IMX890 + 8MP + 2MP',
      'Front Camera': '16 MP',
      'Battery':      '4600 mAh 240W UltraDart',
      'OS':           'Android 13, Realme UI 4.0'
    },
    description: 'Realme GT 3 Pro pushes boundaries with its insane 240W ultra-fast charging — fully juiced in under 10 minutes. Combined with a silky-smooth 144Hz QHD+ display and top-tier Snapdragon performance, it redefines speed.'
  },
  {
    id: 'mobile8',
    name: 'Nokia G60 5G',
    category: 'mobiles',
    price: 299,
    originalPrice: 349,
    image: 'mobile8.jpg',
    badge: 'Eco',
    badgeColor: 'badge-green',
    rating: 4.2,
    reviews: 376,
    specs: {
      'Display':      '6.58" IPS LCD 120Hz',
      'Processor':    'Qualcomm Snapdragon 695',
      'RAM':          '6 GB',
      'Storage':      '128 GB (expandable)',
      'Rear Camera':  '50MP + 5MP + 2MP',
      'Front Camera': '8 MP',
      'Battery':      '4500 mAh 20W',
      'OS':           'Android 12 (3yr updates)'
    },
    description: 'Built with 22% recycled materials, the Nokia G60 5G is a phone you can feel good about owning. Guaranteed 3 years of OS updates and 4 years of security patches ensure it stays secure and fresh for years to come.'
  },
  {
    id: 'mobile9',
    name: 'Sony Xperia 5 V',
    category: 'mobiles',
    price: 999,
    originalPrice: 1149,
    image: 'mobile9.jpg',
    badge: 'Creator',
    badgeColor: 'badge-purple',
    rating: 4.6,
    reviews: 112,
    specs: {
      'Display':      '6.1" 120Hz OLED 21:9',
      'Processor':    'Snapdragon 8 Gen 2',
      'RAM':          '8 GB',
      'Storage':      '256 GB',
      'Rear Camera':  '12MP (1" Exmor T Sensor)',
      'Front Camera': '12 MP',
      'Battery':      '5000 mAh 30W + Wireless',
      'OS':           'Android 13'
    },
    description: 'The Sony Xperia 5 V features professional-grade video recording with Cinema Pro and 4K HDR video. Its revolutionary 1-inch Exmor T sensor captures light like no other phone camera, delivering DSLR-quality results.'
  },
  {
    id: 'mobile10',
    name: 'Oppo Find X6 Pro',
    category: 'mobiles',
    price: 1099,
    originalPrice: 1249,
    image: 'mobile10.jpg',
    badge: 'Hot Deal',
    badgeColor: 'badge-orange',
    rating: 4.7,
    reviews: 143,
    specs: {
      'Display':      '6.82" 2K AMOLED 120Hz',
      'Processor':    'Snapdragon 8 Gen 2',
      'RAM':          '12 GB LPDDR5X',
      'Storage':      '256 GB UFS 4.0',
      'Rear Camera':  '50MP Hasselblad Triple 1" Sensor',
      'Front Camera': '32 MP',
      'Battery':      '4800 mAh 100W + 50W Wireless + 10W Reverse',
      'OS':           'Android 13, ColorOS 13'
    },
    description: 'The OPPO Find X6 Pro is the complete flagship package. Three Hasselblad-tuned cameras each with large 1-inch sensors, blazing-fast 100W wired charging, and a massive 2K display make it a top-tier choice for power users.'
  }
];

/**
 * Get product by ID
 * @param {string} id
 * @returns {Object|undefined}
 */
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/**
 * Get products by category
 * @param {string} category - 'laptops'|'computers'|'mobiles'|'all'
 * @returns {Array}
 */
function getProductsByCategory(category) {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

/**
 * Search products by name
 * @param {string} query
 * @returns {Array}
 */
function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

/**
 * Get featured/hot deals
 * @returns {Array}
 */
function getHotDeals() {
  return PRODUCTS.filter(p => p.badge === 'Hot Deal');
}

/**
 * Get new arrivals
 * @returns {Array}
 */
function getNewArrivals() {
  return PRODUCTS.filter(p => p.badge === 'New Arrival');
}

/**
 * Get related products (same category, excluding current)
 * @param {string} currentId
 * @param {string} category
 * @param {number} limit
 * @returns {Array}
 */
function getRelatedProducts(currentId, category, limit = 4) {
  return PRODUCTS
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, limit);
}
