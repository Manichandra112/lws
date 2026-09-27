import React from 'react';

export default function TrustTicker() {
  const tickerItems = [
    'FSSAI Certified Facility',
    '100% Cold-Extracted Multifloral Honey',
    'ISO 22000 & HACCP Compliant',
    'Leak-Proof Tested Under Atmospheric Pressure',
    'US-FDA Registered & Export Ready',
    'Zero Drip Stirrer Functionality',
    'Custom Hotel Co-Branding & Foil Printing'
  ];

  return (
    <div className="trust-ticker" aria-hidden="true">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <div className="ticker-item" key={`tick-1-${index}`}>
            <span className="ticker-bullet">&bull;</span> {item}
          </div>
        ))}
        {/* Duplicate for seamless CSS marquee */}
        {tickerItems.map((item, index) => (
          <div className="ticker-item" key={`tick-2-${index}`}>
            <span className="ticker-bullet">&bull;</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
