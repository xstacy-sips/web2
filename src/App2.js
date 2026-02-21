import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import './App2.css';

const menuData = {
  SparklingNectar: {
    title: 'Sparkling Nectar',
    subtitle: 'Yummy fruits and spices mixed with bubbly soda. Every sip is like tasting a sparkly rainbow!',
    note: 'Add energy scoop for ?50',
    items: [
      { name: 'Purple Haze', description: 'Lavender & Berries | Floral & Fruity \\nSweetness: ?????\\nBest for: Relaxation', priceSmall: '115', price: '129', badges: ['Must Try'], outOfStock: false },
      { name: 'Blockbuster', description: 'Popcorn & Cranberries | Bold & Theatrical \\nSweetness: ????? \\nBest for: Adventure seekers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Palom', description: 'Coffee, Ginger & Cranberry | Energizing & Bold \\nSweetness: ?????\\nBest for: Coffee lovers | Energy Boost', priceSmall: '115', price: '129', badges: ['Bestseller'] },
      { name: 'After Lunch', description: 'Fennel, Lime, Cumin | Cooling & Soothing\\nSweetness: ?????\\nBest for: Digestion | After heavy meals', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Sparkling Sea', description: 'Kiwi, Mint & Lemon | Icy Minty Burst \\nTangy Sweetness: ?????\\nBest for: Refreshment', priceSmall: '89', price: '99' },
      { name: 'Starlight', description: 'Litchi, Mint & Lemon | Icy Minty Burst \\nSweetness: ?????\\nBest for: Refreshment', priceSmall: '89', price: '99' },
      { name: 'Rio', description: 'Guava, Chilly & Mint | spicy-cool contrast \\nSweetness: ????? \\nBest for: Spice lovers', priceSmall: '89', price: '99' },
      { name: 'Margarita', description: 'Peach& Salt | Vibrant & Salty\\nSweetness: ????? \\nBest for: Shikanji Lovers', priceSmall: '89', price: '99' },
      { name: 'Cinderella', description: 'Peach& Salt | Vibrant & Salty\\nSweetness: ????? \\nBest for: Shikanji Lovers', priceSmall: '89', price: '99' },
      { name: 'Pinacolada', description: 'Pineapple & Coconut | Fizzy Beach Escape \\nSweetness: ????? \\nBest for: Vacation feels', priceSmall: '89', price: '99' },
      { name: 'GrassHopper', description: 'Green Apple & Ginger | Jungle Adventure \\nSweetness: ????? \\nBest for: Tangy lovers', priceSmall: '89', price: '99' },
      { name: 'Water Baloon', description: 'Watermelon, Orange, Mint | Summer Vibes\\nSweetness: ????? \\nBest for: kid-at-heart', priceSmall: '89', price: '99' },
      { name: 'Lotus', description: 'Litchi & Rose | Elegant & Romantic \\nSweetness: ?????\\nBest for: Minimalists & romantics', priceSmall: '89', price: '99' },
      { name: 'Forest', description: 'Cucumber, Lime & Salt | Ultra-Hydrating \\nSweetness: ?????\\nBest for: Detox vibes', priceSmall: '89', price: '99' },
      { name: 'Ice Tea', description: 'Lime & Tea | Tangy and Smooth\\nSweetness: ????? \\nBest for: Chai Lovers', priceSmall: '89', price: '99' },
      { name: 'Sunshine', description: 'Lime & Tea | Tangy and Smooth\\nSweetness: ????? \\nBest for: Chai Lovers', priceSmall: '89', price: '99' },
      { name: 'Martini', description: 'Ginger & Lemon | Sophisticated & Clean \\nSweetness: ????? \\nBest for: Chai lovers who want fizz', priceSmall: '89', price: '99' },
      { name: 'Sparkling Strawberry', description: 'Crushed Strawberries in sparkling water', priceSmall: '89', price: '99' },
      { name: 'Virgin Mojito', description: 'lemon & Mint. | Tangy and Sweet\\nSweetness: ????? \\nBest for: Nimbu Pani Enthusiastic', priceSmall: '89', price: '99' },
      { name: 'Americano', description: 'Black Coffee on the rocks', priceSmall: '89', price: '99' }
    ]
  },
  MilkyNectar: {
    title: 'Milky Nectar',
    subtitle: '(milk based)',
    note: 'Add energy scoop for ?50',
    items: [
      { name: 'Chocolate Protein', description: 'HEALTHY Chocolate & Protein blend | Post-workout treat \\nSweetness: ????? \\nBest for: Fitness enthusiasts & choco-lovers', priceSmall: '115', price: '129', badges: ['Bestseller', 'Must Try'] },
      { name: 'Almond Spice', description: 'Almond milk with warming spices Fat-loss friendly spiced delight \\nNutty & aromatic \\nSweetness: ????? \\nBest for: Calorie Conscious', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Liquid Diet', description: 'Multi-grain nut powerhouse meal in a glass | Filling & nutritious \\nSweetness: ????? \\nBest for: Weight Gainer', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Pailwan', description: 'Traditional energy drink with extra strength | Creamy indulgence \\nSweetness: ????? \\nBest for: Festive vibes & Strength', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Redvelvet', description: 'Strawberries & Red Velvet Essence | Decadent & dreamy \\nSweetness: ????? \\nBest for: Dessert lovers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Blueberry Cheese', description: 'Blueberries & Cheesecake | Rich & tangy \\nSweetness: ????? \\nBest for: Cheesecake fans', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'MangoVelvet', description: 'Mangoes & Velvet cake Essence | Tropical indulgence \\nSweetness: ????? \\nBest for: Mango season lovers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Specialty Coffee Velvet', description: 'Freshly brewed specialty Arabica beans | Smooth & strong \\nBitterness: ????? \\nBest for: Coffee purists', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Creamy crust', description: 'Custard Apple with Vanilla cream | Smooth & delicate \\nSweetness: ????? \\nBest for: Custard apple lovers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Berry Pop', description: 'Mixed Berries & popcorn | Fun & fruity\\nSweetness: ????? \\nBest for: Playful taste adventurers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Black Pink', description: 'Straw Berries & Chocolate | Bold & beautiful \\nSweetness: ????? \\nBest for: Chocolate-berry combo fans', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Ice Spice', description: 'Real milk spices with subtle sweetness | Warming & comforting \\nSweetness: ????? \\nBest for: Traditional spice lovers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Midnight Moca', description: 'Coffee, Blueberry & Chocolatey | Rich & mysterious \\nSweetness: ????? \\nBest for: Coffee lovers wanting fruity twist', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'FuK Matcha', description: 'Moringa & Milk  |  Bold & Sweet\\nSweetness: ?????\\nBest for: Matcha Lovers & Haters\\nFlavor options :  Chocolate  Coffee  Vanilla  Caramel  Hazelnut', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Pink Candy', description: 'Litchi with Berries | Sweet & Tangy \\nSweetness: ????? \\nBest for: Sweet tooths', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'BubbleGum', description: 'Nostalgic Boomer Flavor | Sweet & playful \\nSweetness: ?????\\nBest for: Boomer Lover', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Mudpie', description: 'mud of Chocolate heaven | Thick & indulgent \\nSweetness: ????? \\nBest for: Chocolate lovers', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Coffee velvet', description: 'Velvety Coffee with sweetness Smooth & silk \\nSweetness: ????? \\nBest for: Classic coffee shake fans\\nFlavor options: Vanilla   Caramel   Hazelnut', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Biscoff', description: 'Crushed Lotus Biscoff  | Cookie Haven\\nSweetness: ?????\\nBest for: Cookie lovers & indulgers\\nFlavor options : Chocolate Coffee Vanilla Caramel Hazelnut', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Stardust', description: 'Smooth milky vanilla | Simple & timeless \\nSweetness: ????? \\nBest for: Minimalist', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Milky Strawberries', description: 'Pure strawberry goodness | Sweet & fruity \\nSweetness: ????? \\nBest for: Strawberry milk fans', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'MIlky Blueberries', description: 'Pure Blueberries goodness | Tangy & fruity \\nSweetness: ????? \\nBest for: Blueberries milk fans', priceSmall: '115', price: '129', badges: ['Must Try'] },
      { name: 'Iced Cocoa', description: 'Cocoa with milk | Dark & creamy\\nSweetness: ????? \\nBest for: Dark Chocolate Fans', priceSmall: '115', price: '129', badges: ['Must Try'] }
    ]
  },
  WarmNectar: {
    title: 'Warm Nectar',
    subtitle: '(Hot drinks)',
    note: 'Add energy scoop for ?50',
    items: [
      { name: 'Pink Chai', description: 'Kawa, Spices & Nuts Same emotion, different color\\nUnique & aromatic \\nSweetness: ????? \\nBest for: Chai lovers', priceSmall: '99', price: '109', badges: ['Bestseller', 'Must Try'] },
      { name: 'Specialty Coffee', description: 'freshly brewed specialty Arabica beans\\nSmooth & strong \\nBitterness: ????? \\nBest for: Coffee purists', priceSmall: '69', price: '89', badges: ['Bestseller'] },
      { name: 'Blueberry Mocha', description: 'Melted Chocolate with Berry surprise Delightful choco-berry warmth\\nFun & indulgent Sweetness: ????? \\nBest for: Hot chocolate with a twist', priceSmall: '69', price: '89', badges: ['Must Try'] },
      { name: 'Hot Chocolate', description: 'Melted Chocolate Milk Classic comfort in a cup \\nSweetness: ????? \\nBest for: Chocolate warmth seekers\\nChoose: Vanilla/ Hazelnut/ Caramel ', priceSmall: '69', price: '89' },
      { name: 'Wildroot', description: 'erbal heat with ginger kick Warm, \\nspicy & unapologetically bold | Healing & energizing \\nSweetness: ????? \\nBest for: Immunity boost & spice lovers', priceSmall: '69', price: '89' },
      { name: 'Masala Chai', description: 'Authentic Indian chai with spices Traditional tea perfection\\nWarm & comforting \\nSweetness: ????? \\nBest for: Classic chai enthusiasts', priceSmall: '69', price: '89' },
      { name: 'Detox', description: 'Calming fennel (saunf) drink Soothing digestive night drink\\nLight & refreshing \\nSweetness: ????? \\nBest for: After-dinner relaxation', priceSmall: '59', price: '69' },
      { name: 'Specialty Black Coffee', description: 'freshly brewed specialty Arabica beans \\nSmooth & strong \\nBitterness: ????? \\nBest for: Coffee purists', priceSmall: '59', price: '69' },
      { name: 'Instant Coffee', description: 'Simply milk coffee\\nFast & familiar \\nSweetness: ????? \\nBest for: Roadside Coffee Lover', priceSmall: '49', price: '59' },
      { name: 'Instant Black Coffee', description: 'Simply milk coffee\\nFast & familiar \\nSweetness: ?????\\nBest for: Roadside Coffee Lover', priceSmall: '59', price: '69', badges: ['Healthy'] }
    ]
  },
  Snacks: {
    title: 'Snacks',
    note: 'Add energy scoop for ?50',
    items: [
      { name: 'Frozen Cheescake', price: '159', badges: ['Must Try'] },
      { name: 'Cookie (4pcs)', price: '159', badges: ['Must Try'] },
      { name: 'Penut Butter Toast (2pcs)', price: '159', badges: ['Must Try'] },
      { name: 'Popped Lotus Seeds', price: '159', badges: ['Must Try'] },
      { name: 'Nut Mix', price: '159', badges: ['Must Try'] }
    ]
  }
};

const MENU_DATA_STORAGE_KEY = 'xstacy.menuData.v1';
const cloneData = (data) => JSON.parse(JSON.stringify(data));
const getDefaultMenuData = () => cloneData(menuData);
const loadMenuData = () => {
  if (typeof window === 'undefined') return getDefaultMenuData();
  try {
    const raw = window.localStorage.getItem(MENU_DATA_STORAGE_KEY);
    if (!raw) return getDefaultMenuData();
    return JSON.parse(raw);
  } catch (error) {
    return getDefaultMenuData();
  }
};
const saveMenuData = (data) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(MENU_DATA_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {}
};
const clearMenuData = () => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(MENU_DATA_STORAGE_KEY);
  } catch (error) {}
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const scrollToSection = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src="/assets/images/logo/logo.png" alt="Xstacy Logo" className="logo-image" />
        </Link>
      </div>
      <div className="mobile-menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
        <li><Link to="/menu" className="nav-link" onClick={closeMenu}>Menu</Link></li>
        <li><a href="#gallery" className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-content">
        <img src="/assets/images/logo/text_white.png" alt="Xstacy" className="footer-text-logo" />
        <p className="footer-tagline">Making The World Smile, One Sip at a Time</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <Link to="/menu">Menu</Link>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Xstacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const PageHeader = ({ title, subtitle }) => (
  <section className="page-header">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
);

const DrinkCard = ({ image, name, description, price }) => (
  <div className="preview-card">
    {image && (
      <div>
        <img className="rounded-box" src={image} alt={name} width="200px" />
      </div>
    )}
    <h3>{name}</h3>
    <p>{description}</p>
    <span className="price">{`\u20B9${price}`}</span>
  </div>
);
const MenuItem = ({ name, description, price, priceSmall, badges = [], outOfStock = false }) => {
  const imageSrc = name ? `/assets/images/Doddel Drinks/${encodeURIComponent(name)}.jpg` : null;
  const normalizedDescription = typeof description === 'string' ? description.replace(/\\n/g, '\n') : description;

  return (
    <div className={`menu-item ${outOfStock ? 'out-of-stock' : ''}`}>
      {imageSrc && (
        <div className="menu-item-media">
          {(badges.length > 0 || outOfStock) && (
            <div className="menu-item-header">
              <div className="menu-badges">
                {outOfStock && (
                  <span className="badge out-of-stock">
                    <span className="badge-text">Out of stock</span>
                  </span>
                )}
                {badges.map((badge, index) => (
                  <span key={index} className={`badge ${badge.toLowerCase().replace(' ', '-')}`}>
                    <span className="badge-text">{badge}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="menu-item-photo">
            <img src={imageSrc} alt={name} loading="lazy" />
          </div>
        </div>
      )}
      <div className="menu-item-body">
        <div className="menu-item-content">
          <h3>{name}</h3>
          {normalizedDescription && <p className="menu-item-description">{normalizedDescription}</p>}
          <div className="menu-item-prices">
            {priceSmall && (
              <div className="price-block price-mini">
                <span className="price-amount">{priceSmall}</span>
                <span className="price-label">Mini</span>
              </div>
            )}
            {price && (
              <div className="price-block price-regular">
                <span className="price-amount price-large">{price}</span>
                <span className="price-label">Reguler</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.about-card, .gallery-item, .preview-card');
    animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon and make your day even brighter!");
    event.target.reset();
  };

  const featuredDrinks = [
    { image: '/assets/images/drinks/Starlight.png', name: 'Starlight', description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!', price: '180' },
    { image: '/assets/images/drinks/Milky/blueberry Chees.jpg', name: 'Bluberri Chees', description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!', price: '180' },
    { image: '/assets/images/drinks/Starlight.png', name: 'Pink Chai', description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!', price: '180' }
  ];

  const galleryItems = ['Making Moments Memorable', 'Smiles All Around', 'Pure Joy in Every Sip', 'Creating Happiness Daily', 'Spreading Positivity', 'Community of Joy'];

  return (
    <div className="home-page">
      <section className="hero" id="home">
        <div className="doodle doodle-1"><img src="/assets/images/doodels/doodle1.png" alt="" /></div>
        <div className="doodle doodle-2"><img src="/assets/images/doodels/doodle2.png" alt="" /></div>
        <div className="doodle doodle-3"><img src="/assets/images/doodels/doodle3.png" alt="" /></div>
        <div className="doodle doodle-4"><img src="/assets/images/doodels/doodle4.png" alt="" /></div>
        <div className="doodle doodle-5"><img src="/assets/images/doodels/doodle5.png" alt="" /></div>
        <div className="doodle doodle-6"><img src="/assets/images/doodels/doodle6.png" alt="" /></div>
        <div className="hero-content">
          <img src="/assets/images/logo/text.png" alt="Xstacy" className="hero-text-logo" />
          <p className="tagline">Making The World Smile, One Sip at a Time</p>
        </div>
      </section>

      <PageHeader title="About us" subtitle="Why we started" />
      <section className="our-story" id="about">
        <div className="container">
          <div className="story-content">
            <p>Welcome to Xstacy, where every sip is a journey to pure joy! We're a beverage brand that believes drinks should do more than quench your thirst-they should bring happiness, spark conversations, and create moments of pure delight.</p>
            <p>Our name, Xstacy, is derived from the word "ecstasy," capturing the idea of joy and delight that we aim to deliver with every beverage. We're not just about serving drinks; we're about creating experiences that make the world smile, one sip at a time.</p>
            <p>Today, we continue to innovate and create new flavors that bring smiles to our customers' faces. Every drink we serve is a testament to our commitment to quality, creativity, and happiness.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-card"><h3>Creative Flavors</h3><p>We craft unique hot and cold beverages that surprise and delight. From classic favorites to innovative creations, each drink is designed to make you smile.</p></div>
            <div className="about-card"><h3>Happy Vibes</h3><p>Our brand is all about spreading joy. We believe that happiness is contagious, and it starts with that first sip of something truly special.</p></div>
            <div className="about-card"><h3>Premium Quality</h3><p>We use only the finest ingredients to create beverages that are both delicious and memorable. Quality you can taste, joy you can feel.</p></div>
          </div>
        </div>
      </section>

      <PageHeader title="Our Story" subtitle="Once upon a time" />
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <p>Xstacy was born from a simple belief: that beverages have the power to transform moments and create joy. We started with a vision to bring happiness to people's daily lives through carefully crafted drinks that not only taste amazing but also make you feel amazing.</p>
            <p>Today, we continue to innovate and create new flavors that bring smiles to our customers' faces. Every drink we serve is a testament to our commitment to quality, creativity, and happiness.</p>
          </div>
        </div>
      </section>

      <PageHeader title="Featured Drinks" subtitle="Our Bestseller" />
      <section className="home-menu-preview" id="menu">
        <div className="container">
          <div className="preview-grid">
            {featuredDrinks.map((drink, index) => <DrinkCard key={index} {...drink} />)}
          </div>
        </div>
        <Link to="/menu" className="cta-button">Explore Our Menu</Link>
      </section>

      <PageHeader title="Our Happy Moments" subtitle="Capturing joy, one sip at a time" />
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item"><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <PageHeader title="Get In Touch" subtitle="We'd love to hear from you!" />
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group"><label htmlFor="name">Your Name</label><input type="text" id="name" name="name" required placeholder="John Doe" /></div>
              <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" required placeholder="john@example.com" /></div>
              <div className="form-group"><label htmlFor="phone">Phone Number (Optional)</label><input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" /></div>
              <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" required placeholder="Tell us what makes you smile..."></textarea></div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="info-card"><h3>Visit Us</h3><p>Come experience the joy at our flagship store. We're waiting for you!</p></div>
              <div className="info-card">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for daily doses of happiness and special offers!</p>
                <div className="social-links">
                  <a href="https://instagram.com/xstacy.sips" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
                  <a href="#" title="Facebook">FB</a>
                  <a href="#" title="Twitter">TW</a>
                </div>
              </div>
              <div className="info-card"><h3>Email Us</h3><p>hello@xstacy.com<br />We'd love to hear from you!</p></div>
              <div className="info-card"><h3>Call Us</h3><p>For inquiries and orders<br />+91 93076 54290</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const MenuCategory = ({ title, subtitle, note, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="menu-category">
      <button className="category-toggle" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <h3 className="category-title">{title}<br />{subtitle && <span style={{ fontSize: '0.7em', color: '#846b59' }}>{subtitle}</span>}</h3>
        <span className={`category-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">&#9662;</span>
      </button>
      <div className={`category-content ${isOpen ? 'open' : ''}`}>
        {note && <p className="category-note">{note}</p>}
        <div className="menu-grid">
          {items.map((item, index) => <MenuItem key={index} {...item} />)}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [menuState, setMenuState] = useState(() => loadMenuData());

  useEffect(() => {
    window.scrollTo(0, 0);
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.menu-item');
    animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleStorage = () => setMenuState(loadMenuData());
    window.addEventListener('storage', handleStorage);
    window.addEventListener('xstacy-menu-updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('xstacy-menu-updated', handleStorage);
    };
  }, []);

  if (!menuState) return null;

  return (
    <div className="menu-page">
      <PageHeader title="Menu" subtitle="Making The World Smile, One Sip at a Time" />
      <section className="menu">
        <div className="container" style={{ padding: '0' }}>
          {menuState.SparklingNectar && <MenuCategory {...menuState.SparklingNectar} />}
          {menuState.MilkyNectar && <MenuCategory {...menuState.MilkyNectar} />}
          {menuState.WarmNectar && <MenuCategory {...menuState.WarmNectar} />}
          {menuState.Snacks && <MenuCategory {...menuState.Snacks} />}
        </div>
      </section>
    </div>
  );
};

const AdminMenu = () => {
  const location = useLocation();
  const isAllowed = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('key') === 'test';
  }, [location.search]);

  const [menuState, setMenuState] = useState(() => loadMenuData());
  const [status, setStatus] = useState('');

  useEffect(() => {
    saveMenuData(menuState);
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    if (!status) setStatus('Auto-saved.');
  }, [menuState]);

  const handleCategoryChange = (categoryKey, field, value) => {
    setMenuState((prev) => {
      const next = cloneData(prev);
      next[categoryKey][field] = value;
      return next;
    });
  };

  const handleItemChange = (categoryKey, index, field, value) => {
    setMenuState((prev) => {
      const next = cloneData(prev);
      next[categoryKey].items[index][field] = value;
      return next;
    });
  };

  const handleBadgesChange = (categoryKey, index, value) => {
    const badges = value.split(',').map((badge) => badge.trim()).filter(Boolean);
    handleItemChange(categoryKey, index, 'badges', badges);
  };

  const handleSave = () => {
    saveMenuData(menuState);
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    setStatus('Saved. Changes are live on the Menu page.');
  };

  const handleReset = () => {
    clearMenuData();
    setMenuState(getDefaultMenuData());
    window.dispatchEvent(new Event('xstacy-menu-updated'));
    setStatus('Reset to default menu.');
  };

  if (!isAllowed) {
    return (
      <div className="admin-page">
        <div className="admin-card">
          <h2>Access denied</h2>
          <p>Use the link with the correct key to open this page.</p>
          <p className="admin-hint">Example: /admin?key=test</p>
        </div>
      </div>
    );
  }

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(menuState, null, 2));
    setStatus('Copied JSON to clipboard.');
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Menu Admin</h1>
          <p>Update prices, mark items out of stock, and edit descriptions.</p>
        </div>
        <div className="admin-actions">
          <button type="button" className="btn-outline" onClick={copyJson}>Copy JSON</button>
          <button type="button" className="btn-outline" onClick={handleReset}>Reset Defaults</button>
          <button type="button" className="btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
      </div>

      {status && <div className="admin-status">{status}</div>}

      <div className="admin-actions admin-actions-bar">
        <button type="button" className="btn-outline" onClick={copyJson}>Copy JSON</button>
        <button type="button" className="btn-outline" onClick={handleReset}>Reset Defaults</button>
        <button type="button" className="btn-primary" onClick={handleSave}>Save Changes</button>
      </div>

      <div className="admin-content">
        {Object.entries(menuState).map(([categoryKey, category]) => (
          <section key={categoryKey} className="admin-category">
            <div className="admin-category-header">
              <h2>{category.title}</h2>
              <span className="admin-category-key">{categoryKey}</span>
            </div>
            <div className="admin-category-fields">
              <label>Title<input type="text" value={category.title || ''} onChange={(event) => handleCategoryChange(categoryKey, 'title', event.target.value)} /></label>
              <label>Subtitle<input type="text" value={category.subtitle || ''} onChange={(event) => handleCategoryChange(categoryKey, 'subtitle', event.target.value)} /></label>
              <label>Note<input type="text" value={category.note || ''} onChange={(event) => handleCategoryChange(categoryKey, 'note', event.target.value)} /></label>
            </div>
            <div className="admin-items">
              {category.items.map((item, index) => (
                <div key={`${categoryKey}-${item.name}-${index}`} className="admin-item">
                  <div className="admin-item-top">
                    <label>Name<input type="text" value={item.name || ''} onChange={(event) => handleItemChange(categoryKey, index, 'name', event.target.value)} /></label>
                    <label>Out of stock<input type="checkbox" checked={Boolean(item.outOfStock)} onChange={(event) => handleItemChange(categoryKey, index, 'outOfStock', event.target.checked)} /></label>
                  </div>
                  <label>Description<textarea rows="2" value={item.description || ''} onChange={(event) => handleItemChange(categoryKey, index, 'description', event.target.value)} /></label>
                  <div className="admin-item-grid">
                    <label>Price (Regular)<input type="text" value={item.price || ''} onChange={(event) => handleItemChange(categoryKey, index, 'price', event.target.value)} /></label>
                    <label>Price (Mini)<input type="text" value={item.priceSmall || ''} onChange={(event) => handleItemChange(categoryKey, index, 'priceSmall', event.target.value)} /></label>
                    <label>Badges (comma separated)<input type="text" value={(item.badges || []).join(', ')} onChange={(event) => handleBadgesChange(categoryKey, index, event.target.value)} /></label>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="admin-actions admin-actions-footer">
        <button type="button" className="btn-outline" onClick={copyJson}>Copy JSON</button>
        <button type="button" className="btn-outline" onClick={handleReset}>Reset Defaults</button>
        <button type="button" className="btn-primary" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

function App2() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<AdminMenu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App2;
