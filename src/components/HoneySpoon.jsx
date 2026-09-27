import React from 'react';
import spoonHeroImg from '../assets/section3-honey-spoon.jpg';

export default function HoneySpoon() {
  return (
    <section className="honey-spoon-section section-padding" id="honey-spoon">
      <div className="container honey-spoon-grid">
        {/* Left Column: Product Context */}
        <div className="spoon-story-col">
          <span className="eyebrow">THE HONEY SPOON</span>
          <h2 className="spoon-title">
            One Spoon. <br />
            <span className="italic-serif">One Perfect Portion.</span>
          </h2>

          <div className="spoon-narrative">
            <p className="spoon-lead-p">
              Our single-serve honey spoon is designed to make enjoying honey simple and convenient. <strong>Pure honey is sealed into the spoon’s lower bowl, while the smooth, flat handle keeps it easy to hold and carry.</strong>
            </p>

            <p className="spoon-p">
              Just open it when you need it and enjoy honey without carrying a jar or dealing with messy sachets.
            </p>

            <div className="spoon-perfect-highlight">
              <span className="highlight-sparkle">✦</span>
              <p className="highlight-tagline">
                Pure honey. Perfectly portioned. Ready when you are.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Large LWS Honey Spoon Image */}
        <div className="spoon-visual-card">
          <div className="spoon-image-wrap">
            <img
              src={spoonHeroImg}
              alt="LWS Single-Serve Honey Spoon with Honeycomb Pattern Handle and Pure Golden Honey"
              className="spoon-product-img"
              width="1024"
              height="768"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
