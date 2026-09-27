import React from 'react';
import step01Img from '../assets/step-01-open.jpg';
import step02Img from '../assets/step-02-enjoy.jpg';
import step03Img from '../assets/step-03-go.jpg';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'OPEN',
      tag: 'Peel & Reveal',
      description: 'Peel the seal and reveal your honey.',
      image: step01Img,
      alt: 'LWS Honey Spoon Peel the seal and reveal your honey',
    },
    {
      number: '02',
      title: 'ENJOY',
      tag: 'Stir & Savor',
      description: 'Use it with tea, coffee, breakfast, or your favourite snack.',
      image: step02Img,
      alt: 'Drizzling pure LWS honey into morning tea and toast',
    },
    {
      number: '03',
      title: 'GO',
      tag: 'Zero Mess, Anywhere',
      description: 'Enjoy your honey and move on.',
      image: step03Img,
      alt: 'Tasting LWS honey spoon directly on the go with zero mess',
    },
  ];

  return (
    <section className="how-it-works-section section-padding" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">How do I use the LWS Honey Spoon?</span>
          <h2 className="section-title">
            HOW IT WORKS
          </h2>
          <p className="how-it-works-tagline">
            Open <span className="tagline-dot">&bull;</span> Enjoy <span className="tagline-dot">&bull;</span> Go
          </p>
        </div>

        {/* 3 Equal Cards Grid */}
        <div className="how-it-works-grid">
          {steps.map((step) => (
            <div key={step.number} className="how-step-card">
              <div className="how-step-image-wrap">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="how-step-img"
                  width="800"
                  height="533"
                />
                <span className="how-step-badge">
                  Step {step.number}
                </span>
              </div>
              <div className="how-step-body">
                <h3 className="how-step-title">
                  {step.title}
                </h3>
                <div className="how-step-divider"></div>
                <p className="how-step-desc">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
