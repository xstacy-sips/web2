import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import DrinkCard from '../components/DrinkCard';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.about-card, .gallery-item, .preview-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you soon and make your day even brighter!');
    event.target.reset();
  };

  const featuredDrinks = [
    {
      image: '/assets/images/drinks/Starlight.png',
      name: 'Starlight',
      description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!',
      price: '180'
    },
    {
      image: '/assets/images/drinks/Milky/blueberry Chees.jpg',
      name: 'Bluberri Chees',
      description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!',
      price: '180'
    },
    {
      image: '/assets/images/drinks/Starlight.png',
      name: 'Pink Chai',
      description: 'Litchi, Mint & Lemon, Sweet & Refreshing like a breeze!',
      price: '180'
    }
  ];

  const galleryItems = [
    'Making Moments Memorable',
    'Smiles All Around',
    'Pure Joy in Every Sip',
    'Creating Happiness Daily',
    'Spreading Positivity',
    'Community of Joy'
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Floating Doodles */}
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

      {/* About Us Section */}
      <PageHeader title="About us" subtitle="Why we started" />

      <section className="our-story" id="about">
        <div className="container">
          <div className="story-content">
            <p>
              Welcome to Xstacy, where every sip is a journey to pure joy! We're a beverage brand that believes drinks should do more than quench your thirst—they should bring happiness, spark conversations, and create moments of pure delight.
            </p>
            <p>
              Our name, Xstacy, is derived from the word "ecstasy," capturing the idea of joy and delight that we aim to deliver with every beverage. We're not just about serving drinks; we're about creating experiences that make the world smile, one sip at a time.
            </p>
            <p>
              Today, we continue to innovate and create new flavors that bring smiles to our customers' faces. Every drink we serve is a testament to our commitment to quality, creativity, and happiness.
            </p>
          </div>
        </div>
      </section>

      {/* About Cards */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h3>Creative Flavors</h3>
              <p>We craft unique hot and cold beverages that surprise and delight. From classic favorites to innovative creations, each drink is designed to make you smile.</p>
            </div>
            <div className="about-card">
              <h3>Happy Vibes</h3>
              <p>Our brand is all about spreading joy. We believe that happiness is contagious, and it starts with that first sip of something truly special.</p>
            </div>
            <div className="about-card">
              <h3>Premium Quality</h3>
              <p>We use only the finest ingredients to create beverages that are both delicious and memorable. Quality you can taste, joy you can feel.</p>
            </div>
          </div>
        </div>
      </section>

      <PageHeader title="Our Story" subtitle="Once upon a time" />

      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <p>
              Xstacy was born from a simple belief: that beverages have the power to transform moments and create joy. We started with a vision to bring happiness to people's daily lives through carefully crafted drinks that not only taste amazing but also make you feel amazing.
            </p>
            <p>
              Today, we continue to innovate and create new flavors that bring smiles to our customers' faces. Every drink we serve is a testament to our commitment to quality, creativity, and happiness.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <PageHeader title="Featured Drinks" subtitle="Our Bestseller" />

      <section className="home-menu-preview" id="menu">
        <div className="container">
          <div className="preview-grid">
            {featuredDrinks.map((drink, index) => (
              <DrinkCard key={index} {...drink} />
            ))}
          </div>
        </div>
        <Link to="/menu" className="cta-button">Explore Our Menu</Link>
      </section>

      {/* Gallery */}
      <PageHeader title="Our Happy Moments" subtitle="Capturing joy, one sip at a time" />

      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <PageHeader title="Get In Touch" subtitle="We'd love to hear from you!" />

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell us what makes you smile..."></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            
            <div className="contact-info">
              <div className="info-card">
                <h3>Visit Us</h3>
                <p>Come experience the joy at our flagship store. We're waiting for you!</p>
              </div>
              <div className="info-card">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for daily doses of happiness and special offers!</p>
                <div className="social-links">
                  <a href="https://instagram.com/xstacy.sips" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
                  <a href="#" title="Facebook">FB</a>
                  <a href="#" title="Twitter">TW</a>
                </div>
              </div>
              <div className="info-card">
                <h3>Email Us</h3>
                <p>hello@xstacy.com<br />We'd love to hear from you!</p>
              </div>
              <div className="info-card">
                <h3>Call Us</h3>
                <p>For inquiries and orders<br />+91 93076 54290</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
