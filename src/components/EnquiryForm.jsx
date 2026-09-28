import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase.js';

const CATEGORIES = {
  individual: {
    id: 'individual',
    name: 'Individual / Personal',
    tagline: 'Direct-to-Doorstep Honey Spoons',
    leftEyebrow: 'Direct Orders & Home Wellness',
    leftTitle: 'Pure honey, single-served for your day.',
    leftDescription:
      'Order artisanal raw wildflower honey spoons directly to your home. Individually sealed 8g portions mean no sticky jars, no crystallized mess, and perfect portioning for your daily morning rituals.',
    guarantees: [
      '100% pure raw wildflower honey — zero adulteration',
      'Hygienically pre-measured single 8g spoons',
      'Fast doorstep dispatch within 24–48 hours across India',
      'Food-safe, BPA-free recyclable single-serve spoons'
    ],
    emailLabel: 'Email Address *',
    emailPlaceholder: 'you@example.com',
    sectorLabel: 'Primary Use Case',
    sectorOptions: [
      'Daily Wellness & Morning Warm Water / Green Tea',
      'Travel, Commute & On-the-Go Nutrition',
      'Home Breakfast Table & Artisan Cheese Platters',
      'Personal Celebrations & Family Occasions'
    ],
    defaultSector: 'Daily Wellness & Morning Warm Water / Green Tea',
    volumeLabel: 'Desired Pack Size',
    volumeOptions: [
      'Starter Box (15 Honey Spoons)',
      'Monthly Wellness Box (30 Honey Spoons)',
      'Family Provision Box (60 Honey Spoons)',
      'Custom Personal Bulk (100+ Honey Spoons)'
    ],
    defaultVolume: 'Monthly Wellness Box (30 Honey Spoons)',
    notesLabel: 'Delivery Shipping Address & Notes',
    notesPlaceholder: 'Enter your complete postal address (Flat/House, Street, Landmark, City & Pincode)...'
  },
  restaurant: {
    id: 'restaurant',
    name: 'Restaurant / Hospitality',
    tagline: 'Table Service & Beverage Experience',
    leftEyebrow: 'Hospitality Procurement & Table Service',
    leftTitle: 'Elevate your guest beverage experience.',
    leftDescription:
      'Upgrade breakfast trays, specialty tea & coffee stations, and bar mixology with single-serve honey spoons. Eliminate messy open jars, minimize waste, and offer an unforgettable luxury dining touchpoint.',
    guarantees: [
      'Dedicated B2B commercial procurement rates',
      'Curated evaluation tasting kit dispatched to your venue',
      'Export-grade laboratory test documentation & FSSAI certified',
      'Flexible scheduled recurring batch deliveries'
    ],
    companyLabel: 'Restaurant / Hotel / Cafe Name *',
    companyPlaceholder: 'e.g. The Oberoi Grand / Blue Tokai',
    emailLabel: 'Work / Procurement Email *',
    emailPlaceholder: 'procurement@hotel.com',
    sectorLabel: 'Establishment / Service Type',
    sectorOptions: [
      'Specialty Cafe, Bakery & Breakfast Bar',
      'Fine Dining Restaurant & Mixology Bar',
      'Luxury Hotel / Resort Table & Room Service',
      'Aviation, Airline & Lounge Catering',
      'Corporate Cafeteria & Co-Working Lounge'
    ],
    defaultSector: 'Specialty Cafe, Bakery & Breakfast Bar',
    volumeLabel: 'Estimated Monthly Volume',
    volumeOptions: [
      'Trial / Pilot Batch (500 – 1,500 Spoons)',
      'Standard Hospitality Service (1,500 – 5,000 Spoons/mo)',
      'High-Volume / Enterprise Chain (5,000+ Spoons/mo)'
    ],
    defaultVolume: 'Trial / Pilot Batch (500 – 1,500 Spoons)',
    notesLabel: 'Property Address & Service Requirements',
    notesPlaceholder: 'Mention property location, current beverage service setup, or custom private-label branding interest...'
  },
  corporate: {
    id: 'corporate',
    name: 'Company Hampers & Gifting',
    tagline: 'Bespoke Corporate Gifting & Hampers',
    leftEyebrow: 'Corporate Partnerships & Hamper Curation',
    leftTitle: 'Craft memorable festive & executive hampers.',
    leftDescription:
      'LWS single-serve honey spoons are the ideal luxury inclusion for festive gifting, employee onboarding kits, wedding hampers, and VIP client tokens. Custom packaging and co-branded sleeve options available.',
    guarantees: [
      'Custom co-branding and bespoke presentation sleeves',
      'Multi-city pan-India corporate drop shipping',
      'Tiered bulk corporate invoicing & GST documentation',
      'Dedicated gifting account manager'
    ],
    companyLabel: 'Company / Gifting Agency Name *',
    companyPlaceholder: 'e.g. Deloitte / Curated Hampers Co.',
    emailLabel: 'Official Corporate Email *',
    emailPlaceholder: 'gifting@company.com',
    sectorLabel: 'Gifting Occasion / Project Type',
    sectorOptions: [
      'Corporate Festive Hampers (Diwali / New Year)',
      'Executive Welcome & Employee Onboarding Kits',
      'Luxury Wedding Favors & Celebration Hampers',
      'VIP Client Appreciation & Brand Gifting',
      'Conferences, Summits & Delegate Bags'
    ],
    defaultSector: 'Corporate Festive Hampers (Diwali / New Year)',
    volumeLabel: 'Units / Gift Sets Needed',
    volumeOptions: [
      'Boutique Order (100 – 300 Spoons / Gift Sets)',
      'Mid-Tier Campaign (300 – 1,000 Units)',
      'Large Enterprise Rollout (1,000 – 5,000+ Units)'
    ],
    defaultVolume: 'Boutique Order (100 – 300 Spoons / Gift Sets)',
    notesLabel: 'Hamper Details & Delivery Timelines',
    notesPlaceholder: 'Mention target delivery date, co-branding requirements, or multi-location dispatch details...',
    highlightBadge: '🎀 Pairs perfectly with specialty teas, dry fruits, and luxury lifestyle gift boxes.'
  }
};

export default function EnquiryForm({ onOrderSubmitted }) {
  const [activeCategory, setActiveCategory] = useState('individual');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const config = CATEGORIES[activeCategory];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: config.defaultSector,
    volume: config.defaultVolume,
    notes: ''
  });

  const handleCategoryChange = (newCatId) => {
    setActiveCategory(newCatId);
    const newConfig = CATEGORIES[newCatId];
    setFormData((prev) => ({
      ...prev,
      sector: newConfig.defaultSector,
      volume: newConfig.defaultVolume
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    if (activeCategory !== 'individual' && !formData.company.trim()) {
      setErrorMessage(`Please enter your ${config.companyLabel.replace(' *', '')}.`);
      return;
    }

    setIsSubmitting(true);

    const submissionPayload = {
      category: config.name,
      name: formData.name.trim(),
      company: activeCategory === 'individual' ? 'Individual' : formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      format: 'Honey Spoon (8g)',
      sector: formData.sector,
      volume: formData.volume,
      notes: formData.notes?.trim() || null
    };

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase.from('enquiries').insert([submissionPayload]);

        if (error) {
          throw new Error(error.message || 'Database error occurred while submitting.');
        }
      } else {
        console.warn('Supabase not configured in .env. Falling back to local confirmation.');
      }

      onOrderSubmitted(submissionPayload);

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        sector: config.defaultSector,
        volume: config.defaultVolume,
        notes: ''
      });
    } catch (err) {
      console.error('Submission failed:', err);
      setErrorMessage(err.message || 'Failed to submit to Supabase. Please verify your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="enquiry-section section-padding" id="enquiry">
      <div className="container">
        <div className="enquiry-wrapper">
          {/* Left Info Pane - Dynamically reflects selected category */}
          <div className="enquiry-info-pane">
            <div>
              <span className="eyebrow eyebrow-dark">{config.leftEyebrow}</span>
              <h3>{config.leftTitle}</h3>
              <p>{config.leftDescription}</p>

              <ul className="sample-guarantees">
                {config.guarantees.map((item, idx) => (
                  <li key={idx}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="direct-contacts">
              <div className="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Direct Sales: <a href="mailto:lwshoney1@gmail.com">lwshoney1@gmail.com</a></span>
              </div>
              <div className="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>WhatsApp Desk: <a href="https://wa.me/916303143435" target="_blank" rel="noopener noreferrer">+91 63031 43435</a></span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Pane - Dynamically adapts */}
          <div className="enquiry-form-pane">
            <form onSubmit={handleSubmit}>
              {/* Category Selector Tabs */}
              <div className="form-group">
                <label className="form-label">I am enquiring as:</label>
                <div className="format-selection-group">
                  {Object.values(CATEGORIES).map((cat) => (
                    <div
                      key={cat.id}
                      className={`format-radio-btn ${activeCategory === cat.id ? 'checked' : ''}`}
                      onClick={() => handleCategoryChange(cat.id)}
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              {activeCategory === 'individual' ? (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">{config.companyLabel}</label>
                      <input
                        type="text"
                        id="company"
                        className="form-input"
                        placeholder={config.companyPlaceholder}
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">{config.emailLabel}</label>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder={config.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Dynamic Dropdown Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="sector">{config.sectorLabel}</label>
                  <select
                    id="sector"
                    className="form-select"
                    value={formData.sector}
                    onChange={handleChange}
                  >
                    {config.sectorOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="volume">{config.volumeLabel}</label>
                  <select
                    id="volume"
                    className="form-select"
                    value={formData.volume}
                    onChange={handleChange}
                  >
                    {config.volumeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Notes Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="notes">{config.notesLabel}</label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  placeholder={config.notesPlaceholder}
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              {errorMessage && (
                <div
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#dc2626',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    marginBottom: '1.25rem',
                    lineHeight: '1.4'
                  }}
                >
                  <strong>Submission Error:</strong> {errorMessage}
                </div>
              )}

              {!isSupabaseConfigured && (
                <div
                  style={{
                    backgroundColor: 'rgba(217, 119, 6, 0.08)',
                    border: '1px solid rgba(217, 119, 6, 0.25)',
                    color: '#b45309',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  ℹ️ <strong>Supabase Note:</strong> Add your <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env</code> to store submissions in your Supabase database.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-honey"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending Request to Supabase...' : `Submit ${config.name} Enquiry →`}
              </button>

              <p className="form-privacy-note">
                By submitting, you agree to be contacted by LWS regarding your enquiry. We never share or sell your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
