import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const faqs = [
    {
      q: 'What exactly is a single-serve honey spoon?',
      a: 'A honey spoon is a sealed, single-serve spoon made of food-grade high-clarity material filled with 8 grams of 100% pure raw honey. Peel the barrier film, stir directly into tea, coffee, or hot water, and enjoy. There is nothing else to open, pour, or wash. Every guest receives an identical portion with zero drip and zero shared honey jars.'
    },
    {
      q: 'How does the honey pod differ from the honey spoon?',
      a: 'A honey pod is a deeper 16 gram portion in a hexagonal peel-back cup without a built-in spoon handle. Where the spoon is designed for stirring into liquids, the pod is intended for drizzling over solids: toast, pancakes, waffles, fresh curd, and cheese platters. It is ideal for in-room breakfast trays, first-class airline cabins, and luxury gift hampers.'
    },
    {
      q: 'Can we add our own hotel or brand logo to the packaging?',
      a: 'Yes. Our packaging is deliberately engineered with dedicated real estate for partner branding. We offer custom-printed kraft sleeves, hot-stamped gold foil lidding, and bespoke rigid keepsake gift boxes for luxury hotels, private labels, and corporate gifting. Minimum order quantities apply for custom print runs.'
    },
    {
      q: 'What is the shelf life and proper storage condition?',
      a: 'Honey is naturally stable. Every sealed spoon and pod carries a validated 24-month shelf life. Store in a cool, dry pantry away from direct sunlight. Exact batch analysis and certificate of analysis (COA) accompany every quotation and shipment.'
    },
    {
      q: 'How leak-proof is the seal during flight or transport?',
      a: 'The seal uses high-integrity ultrasonic heat-bonding with multi-layer barrier film. Every production batch undergoes negative-pressure vacuum chamber testing to ensure zero leaks under standard airline cabin pressure drops and rough carton transit.'
    },
    {
      q: 'What are the minimum order quantities (MOQs)?',
      a: 'We offer flexible pilot tiers starting from 500 units for standard LWS branded formats. For customized sleeves and private-label foil printing, MOQs range between 2,500 and 5,000 units depending on the complexity of printing.'
    },
    {
      q: 'Do you export internationally?',
      a: 'Yes. We are based in Bhavnagar, Gujarat, India, and support buyers across India as well as international export markets (Middle East, Europe, Southeast Asia, and North America). Full regulatory export documentation, including US-FDA registration and phytosanitary certificates, is provided.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Clarity &amp; Confidence</span>
          <h2 className="section-title">
            Asked before <span className="italic-serif">the first order.</span>
          </h2>
          <p className="section-subtitle">
            The questions hospitality directors, gifting managers, and procurement officers ask us most, answered plainly.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div className={`faq-item ${openIndex === idx ? 'active' : ''}`} key={`faq-${idx}`}>
              <button className="faq-question" onClick={() => toggleFAQ(idx)}>
                <span>{item.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
