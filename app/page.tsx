"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    src: "/hero-bg.png",
    title: "Plan Your Perfect Journey — Without the Stress",
    subtitle: "Tailored luxury travel experiences designed just for you, down to the finest detail."
  },
  {
    src: "/service_international.png",
    title: "Explore the World's Most Iconic Destinations",
    subtitle: "Exclusive VIP access to breathtaking international landmarks and vibrant cultures."
  },
  {
    src: "/service_honeymoon.png",
    title: "Romantic Escapes Designed for Two",
    subtitle: "Celebrate your love in secluded, luxurious settings with premium amenities."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Lumina Travel</div>
        <div className="nav-links">
          <Link href="#plan" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Plan My Trip</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`slider-image ${index === currentSlide ? 'active' : ''}`}
            >
              <Image src={slide.src} alt={`Luxury destination ${index + 1}`} fill priority={index === 0} style={{ objectFit: 'cover' }} quality={90} />
            </div>
          ))}
          <div className="hero-overlay"></div>
          
          <div className="slider-controls">
            {HERO_SLIDES.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-content" key={currentSlide}>
          <h1>{HERO_SLIDES[currentSlide].title}</h1>
          <p>{HERO_SLIDES[currentSlide].subtitle}</p>
          <div className="hero-buttons">
            <Link href="#plan" className="btn btn-primary">Plan My Trip</Link>
            <Link href="#whatsapp" className="btn btn-secondary">
              <svg style={{ width: '20px', height: '20px', marginRight: '8px', fill: 'currentColor' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-text">Trips Planned</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-text">Client Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80+</div>
              <div className="stat-text">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-text">Stress-Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="text-center">
            <h2>How It Works</h2>
            <p>Your dream vacation in three simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <h3>1. Share Your Plan</h3>
              <p>Tell us your vision, preferred destinations, and specific needs for the trip.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3>2. Get Itinerary</h3>
              <p>Receive a completely personalized, luxurious itinerary crafted by our experts.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3>3. Travel Securely</h3>
              <p>Pack your bags and enjoy a seamless travel experience without the stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="text-center">
            <h2>Our Services</h2>
            <p>Curated experiences for the discerning traveler</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <Image src="/service_honeymoon.png" alt="Honeymoon Planning" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>Honeymoon Planning</h3>
              </div>
            </div>
            <div className="service-card">
              <Image src="/service_luxury.png" alt="Luxury Travel" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>Luxury Travel</h3>
              </div>
            </div>
            <div className="service-card">
              <Image src="/service_family.png" alt="Family Vacations" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>Family Vacations</h3>
              </div>
            </div>
            <div className="service-card">
              <Image src="/service_international.png" alt="International Trips" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>International Trips</h3>
              </div>
            </div>
            <div className="service-card">
              <Image src="/why_choose_us.png" alt="Corporate Retreats" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>Corporate Retreats</h3>
              </div>
            </div>
            <div className="service-card">
              <Image src="/hero-bg.png" alt="Bespoke Getaways" fill sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="service-content">
                <h3>Bespoke Getaways</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container" style={{ padding: '6rem 5%' }}>
        <div className="why-choose-us">
          <div className="why-image" style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
            <Image src="/why_choose_us.png" alt="Luxury Concierge" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="why-content">
            <h2>Why Choose Us?</h2>
            <p>We believe travel should be an art, not a chore. Our dedicated team of experts works tirelessly to assure every detail of your journey is flawlessly executed.</p>
            
            <ul className="why-items">
              <li className="why-item">
                <div className="why-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="why-text">
                  <h4>Exclusive Access</h4>
                  <p>Gain access to hidden gems, VIP upgrades, and private bookings unavailable to the general public.</p>
                </div>
              </li>
              <li className="why-item">
                <div className="why-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="why-text">
                  <h4>24/7 Concierge Support</h4>
                  <p>Our team is available round the clock throughout your entire journey to ensure ultimate peace of mind.</p>
                </div>
              </li>
              <li className="why-item">
                <div className="why-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="why-text">
                  <h4>Utmost Privacy</h4>
                  <p>We treat your travel plans with strict confidentiality and provide secure, high-end arrangements.</p>
                </div>
              </li>
              <li className="why-item">
                <div className="why-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="why-text">
                  <h4>Tailored Precision</h4>
                  <p>Every itinerary is distinctly crafted down to your dietary preferences and room view selections.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="plan" className="enquiry-section">
        <div className="container">
          <div className="text-center">
            <h2>Start Your Journey</h2>
            <p>Tell us about your upcoming trip and we'll create the perfect itinerary</p>
          </div>
          
          <div className="form-container">
            <form>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="destination">Destination</label>
                  <input type="text" id="destination" className="form-control" placeholder="Where would you like to go?" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="dates">Travel Dates</label>
                  <input type="text" id="dates" className="form-control" placeholder="e.g., Nov 10 - Nov 24" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="travelers">Number of Travelers</label>
                  <select id="travelers" className="form-control">
                    <option value="">Select option</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People (Couple)</option>
                    <option value="3-5">3 - 5 People (Family/Friends)</option>
                    <option value="6+">6+ People (Group)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-control" placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="whatsapp-num">WhatsApp Number</label>
                  <input type="tel" id="whatsapp-num" className="form-control" placeholder="+1 (555) 000-0000" />
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label" htmlFor="budget">Estimated Budget</label>
                  <select id="budget" className="form-control">
                    <option value="">Select budget range</option>
                    <option value="$2k-$5k">$2,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k+">$10,000+</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <button type="button" className="btn btn-primary form-submit">Get My Plan</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Ready for the extraordinary?</h2>
          <p>Don't settle for ordinary vacations. Let us craft a memorable, luxurious journey personalized uniquely for you.</p>
          <div className="final-cta-buttons">
            <Link href="#plan" className="btn btn-primary">Start Planning</Link>
            <Link href="#plan" className="btn btn-outline btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Lumina Travel</div>
            <div className="footer-links">
              <Link href="#">About</Link>
              <Link href="#">Services</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>hello@luminatravel.com</p>
              <p style={{ margin: 0, fontSize: '0.875rem' }}>+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Lumina Travel. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Floating Button */}
      <Link href="https://wa.me/1234567890" className="sticky-whatsapp" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </Link>
    </>
  );
}
