import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <a href="#hero" className="brand-logo" onClick={closeMenu}>
            <div className="brand-icon">
              {/* Bee Emblem SVG */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">LWS</span>
              <span className="brand-tagline">Love with Sacrifice</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#philosophy" className="nav-link" onClick={closeMenu}>The Idea</a>
            <a href="#honey-spoon" className="nav-link" onClick={closeMenu}>The Spoon</a>
            <a href="#how-it-works" className="nav-link" onClick={closeMenu}>How It Works</a>
            <a href="#every-moment" className="nav-link" onClick={closeMenu}>Moments</a>
            <a href="#standards" className="nav-link" onClick={closeMenu}>Standards</a>
            <a href="#hospitality" className="nav-link" onClick={closeMenu}>For Business</a>
            <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <a href="#enquiry" className="btn btn-primary" onClick={closeMenu}>Request Samples &rarr;</a>
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
  );
}
