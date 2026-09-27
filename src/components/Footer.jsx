import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Summary */}
          <div className="footer-brand">
            <h3>LWS</h3>
            <div className="brand-tagline">Love with Sacrifice</div>
            <p>
              Single-serve honey, considered from honey to seal, for businesses who care how the smallest details land with their guests.
            </p>
          </div>

          {/* Architecture Links */}
          <div className="footer-col">
            <h5>Architecture</h5>
            <ul className="footer-links">
              <li><a href="#philosophy">The Idea</a></li>
              <li><a href="#honey-spoon">The Honey Spoon</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#every-moment">Every Moment</a></li>
            </ul>
          </div>

          {/* Programmes */}
          <div className="footer-col">
            <h5>Programmes</h5>
            <ul className="footer-links">
              <li><a href="#standards">Quality &amp; Standards</a></li>
              <li><a href="#hospitality">For Business &amp; Bulk</a></li>
              <li><a href="#enquiry">Request Sample Kit</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="footer-col">
            <h5>Connect &amp; Procure</h5>
            <div className="footer-contact-item">
              <span>Email:</span>
              <a href="mailto:lwshoney@gmail.com" style={{ color: '#FFFFFF' }}>lwshoney@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <span>WhatsApp:</span>
              <a href="https://wa.me/916303143435" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>
                +91 63031 43435
              </a>
            </div>
            <div className="footer-contact-item" style={{ marginTop: '0.8rem', whiteSpace: 'nowrap' }}>
              <span>Facility:</span>
              <span style={{ color: '#FFFFFF' }}>Tirupati, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; 2026 LWS (Love with Sacrifice). All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
