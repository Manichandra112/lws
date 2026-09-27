import React from 'react';

export default function Standards() {
  const steps = [
    {
      number: '01',
      title: 'HONEY PREPARATION',
      description: 'Quality honey is prepared and made ready for filling.'
    },
    {
      number: '02',
      title: 'PRECISION FILLING',
      description: 'A measured portion of honey is carefully filled into the lower bowl of the spoon.'
    },
    {
      number: '03',
      title: 'SECURE SEALING',
      description: 'The filled spoon is sealed with a protective cover to help keep the honey secure and prevent leakage.'
    },
    {
      number: '04',
      title: 'INDIVIDUAL PROTECTION',
      description: 'Each spoon is individually protected to maintain hygiene and keep it safe during handling.'
    },
    {
      number: '05',
      title: 'READY TO GO',
      description: 'Ready to reach homes, businesses, and customers.'
    }
  ];

  const certs = [
    { code: 'FSSAI', label: 'Central Food Safety' },
    { code: 'ISO 22000', label: 'Food Safety Mgmt' },
    { code: 'HACCP', label: 'Hazard Control Certified' },
    { code: 'US-FDA', label: 'Facility Registered' },
    { code: 'NABL LAB', label: 'Purity Tested Batches' },
    { code: '100% RAW', label: 'Unadulterated Nectar' }
  ];

  return (
    <section className="standards-section section-padding" id="standards">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">FROM HONEY TO SPOON</span>
          <h2 className="section-title">
            The Journey Behind <span className="italic-serif" style={{ color: '#E8C582' }}>Every Single Spoon.</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light-muted)', maxWidth: '820px' }}>
            Every LWS spoon follows a careful process &mdash; from preparing the honey to filling, sealing, individually protecting, and finally getting each finished spoon ready to reach its destination.
          </p>
        </div>

        {/* 5-Step Process & Visual Grid */}
        <div className="standards-grid">
          <div className="process-steps">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-header">
                  <span className="step-number">{step.number}</span>
                  <span className="step-dash">&mdash;</span>
                  <span className="step-title">{step.title}</span>
                </div>
                <p className="step-desc">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="standards-image-card">
            <img
              src="/images/cleanroom-manufacturing.jpg"
              onError={(e) => {
                if (!e.target.dataset.triedRelative) {
                  e.target.dataset.triedRelative = 'true';
                  e.target.src = './images/cleanroom-manufacturing.jpg';
                }
              }}
              alt="Careful filling and hygienic sealing process of LWS honey spoons"
              width="600"
              height="540"
            />
          </div>
        </div>

        {/* Uncompromised Quality Certifications */}
        <div className="cert-matrix">
          {certs.map((c, i) => (
            <div className="cert-box" key={`cert-${i}`}>
              <div className="cert-code">{c.code}</div>
              <div className="cert-label">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
