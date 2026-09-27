import React from 'react';

export default function Philosophy() {
  return (
    <section className="manifesto-section section-padding" id="philosophy">
      <div className="container manifesto-grid">
        {/* Left Column: The Idea Story (Section 2) */}
        <div className="idea-story-col">
          <span className="eyebrow">THE IDEA BEHIND THE SPOON</span>
          <h2 className="manifesto-title">
            Honey’s natural sweetness, <br />
            <span className="italic-serif">made simple.</span>
          </h2>

          <div className="idea-narrative">
            <p className="idea-lead-p">
              Honey has always been one of nature’s simplest pleasures. But enjoying it is not always as simple. Jars can be messy, sachets can be inconvenient, and taking honey with you is not always easy.
            </p>

            <div className="idea-pivot-callout">
              <span className="pivot-line"></span>
              <p className="pivot-text">We wanted to change that.</p>
            </div>

            <p className="idea-p">
              The idea was simple &mdash; bring the goodness of honey into a format that is easy to carry, easy to use, and ready whenever you need it. That’s how our single-serve honey spoon was born: a clean, convenient portion made for everyday moments.
            </p>

            <p className="idea-p">
              From your morning tea and breakfast to travel and everything in between, our spoon brings honey into your routine without the mess or fuss. Just open, enjoy, and go.
            </p>
          </div>
        </div>

        {/* Right Column: Lifestyle Experience Image */}
        <div className="idea-visual-card">
          <div className="idea-image-wrap">
            <img
              src="/images/section2-idea-lifestyle.jpg"
              onError={(e) => {
                if (!e.target.dataset.triedRelative) {
                  e.target.dataset.triedRelative = 'true';
                  e.target.src = './images/section2-idea-lifestyle.jpg';
                }
              }}
              alt="LWS Single-Serve Honey Spoon Stirred in Hot Morning Tea"
              className="idea-spoon-img"
              width="600"
              height="520"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
