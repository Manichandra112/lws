import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustTicker from './components/TrustTicker.jsx';
import Philosophy from './components/Philosophy.jsx';
import HoneySpoon from './components/HoneySpoon.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import EveryMoment from './components/EveryMoment.jsx';
import Standards from './components/Standards.jsx';
import Hospitality from './components/Hospitality.jsx';
import FoundersNote from './components/FoundersNote.jsx';
import EnquiryForm from './components/EnquiryForm.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import SuccessModal from './components/SuccessModal.jsx';

export default function App() {
  const [submittedOrder, setSubmittedOrder] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="landing-page-root">
      {/* Navigation */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        <Hero />
        <TrustTicker />
        <Philosophy />
        <HoneySpoon />
        <HowItWorks />
        <EveryMoment />
        <Standards />
        <Hospitality />
        <FoundersNote />
        <EnquiryForm onOrderSubmitted={(order) => setSubmittedOrder(order)} />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Sample Order Confirmation Modal */}
      {submittedOrder && (
        <SuccessModal
          order={submittedOrder}
          onClose={() => setSubmittedOrder(null)}
        />
      )}

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
}
