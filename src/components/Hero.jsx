import React from 'react';

export default function Hero() {
  return (
    <section className="hero-screen-wrap" id="hero">
      {/* Full width and height background image */}
      <img
        src="/images/hero-nature-honey.jpg"
        alt="LWS Pure Raw Honey Sunrise"
        className="hero-screen-img"
      />

      {/* Hero Overlay with exact context on the left */}
      <div className="hero-screen-overlay">
        <div className="container">
          <div className="hero-left-card">
            <div className="hero-eyebrow-text">
              <span>NATURE'S GOODNESS</span>
            </div>

            <h1 className="hero-pure-title">
              Pure Honey <br />
              <span className="hero-title-accent">On-The-Go</span>
            </h1>

            <p className="hero-pure-lead">
              100% natural raw honey, packed in convenient single-serve spoons &mdash; peel, stir, and enjoy anytime, anywhere with zero mess.
            </p>

            {/* 4 Circular Badges */}
            <div className="hero-badges-row">
              {/* Badge 1: 100% Natural */}
              <div className="hero-badge-item">
                <div className="hero-badge-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 4 13a11 11 0 0 1 17-9 11 11 0 0 1-9 17Z" />
                    <path d="M4 13c3 0 7 2 7 7" />
                  </svg>
                </div>
                <span className="hero-badge-label">100%<br />NATURAL</span>
              </div>

              {/* Badge 2: Peel & Stir */}
              <div className="hero-badge-item">
                <div className="hero-badge-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="6" r="3.5" />
                    <path d="M12 9.5v11.5" />
                    <path d="M8 17c1.5 2 6.5 2 8 0" />
                  </svg>
                </div>
                <span className="hero-badge-label">PEEL &amp;<br />STIR</span>
              </div>

              {/* Badge 3: Zero Mess */}
              <div className="hero-badge-item">
                <div className="hero-badge-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="hero-badge-label">ZERO<br />MESS</span>
              </div>

              {/* Badge 4: Easy to Carry */}
              <div className="hero-badge-item">
                <div className="hero-badge-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="7" width="18" height="13" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <span className="hero-badge-label">EASY<br />TO CARRY</span>
              </div>
            </div>

            {/* Pill CTA Button */}
            <div className="hero-btn-wrap">
              <a href="#every-moment" className="btn-hero-explore">
                Explore Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
