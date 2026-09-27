import React from 'react';
import businessHeroImg from '../assets/business-hospitality-bulk.jpg';

export default function Hospitality() {
  const businessTouchpoints = [
    {
      title: 'HOTELS & HOSPITALITY',
      desc: 'Serve LWS alongside tea, coffee, breakfast, and room service.',
      tags: ['Breakfast Buffets', 'Room Service'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      )
    },
    {
      title: 'CAFÉS & RESTAURANTS',
      desc: 'A convenient honey portion for beverages, toast, pancakes, yogurt, and desserts.',
      tags: ['Coffee & Tea', 'Bakery & Toast'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      )
    },
    {
      title: 'CORPORATE GIFTING',
      desc: 'Add LWS honey spoons to gift hampers, events, welcome kits, and packages.',
      tags: ['Gift Hampers', 'Welcome Kits'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="14" rx="2" />
          <path d="M12 8v14" />
          <path d="M19 12H5" />
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
      )
    },
    {
      title: 'RETAIL',
      desc: 'Offer LWS-branded honey spoons as a convenient everyday honey option.',
      tags: ['Counter Displays', 'Retail Packs'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
        </svg>
      )
    }
  ];

  return (
    <section className="hospitality-section section-padding" id="hospitality">
      <div className="container">
        {/* Split Hero: Heading & Context on Left, Compact Image on Right */}
        <div className="hospitality-split-hero">
          <div className="hospitality-hero-text">
            <span className="eyebrow">FOR BUSINESS &amp; BULK ORDERS</span>
            <h2 className="hospitality-title">
              A Better Way to <span className="italic-serif">Serve Honey.</span>
            </h2>
            <p className="hospitality-lead">
              LWS brings pure, single-serve honey to hotels, caf&eacute;s, restaurants, retailers, and gifting businesses &mdash; giving customers a convenient alternative to traditional sugar portions.
            </p>
          </div>

          <div className="hospitality-hero-media">
            <img
              src={businessHeroImg}
              alt="LWS Love with Sacrifice single-serve honey spoons in solid walnut presentation box for luxury hotels and restaurants"
              width="900"
              height="600"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 Touchpoints Grid */}
        <div className="business-channels-grid-four">
          {businessTouchpoints.map((item, i) => (
            <div className="business-channel-card-premium" key={`bt-${i}`}>
              <div className="business-channel-icon-wrap">
                {item.icon}
              </div>

              <h3 className="business-channel-title">{item.title}</h3>
              <div className="business-channel-divider"></div>
              <p className="business-channel-desc">{item.desc}</p>

              <div className="business-channel-tags-grid">
                {item.tags.map((tag, tIdx) => (
                  <span className="channel-tag-pill" key={`tag-${i}-${tIdx}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Procurement / Sample Request Banner */}
        <div className="hospitality-procurement-bar">
          <div className="procurement-text">
            <h4>Ready to elevate honey service at your establishment?</h4>
            <p>Request complimentary samples and wholesale volume pricing for your hotel, caf&eacute;, or corporate gifting.</p>
          </div>
          <div className="procurement-action">
            <a href="#enquiry" className="btn-business-cta">
              Request Business Samples &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

