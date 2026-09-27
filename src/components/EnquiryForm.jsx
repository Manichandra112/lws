import React, { useState } from 'react';

export default function EnquiryForm({ onOrderSubmitted }) {
  const [formatPreference, setFormatPreference] = useState('Honey Spoon (8g)');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Luxury Hotel or Resort',
    volume: 'Pilot Batch (500 - 2,000 units)',
    notes: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      alert('Please fill in your name, company, and business email.');
      return;
    }

    onOrderSubmitted({
      ...formData,
      format: formatPreference
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      sector: 'Luxury Hotel or Resort',
      volume: 'Pilot Batch (500 - 2,000 units)',
      notes: ''
    });
  };

  return (
    <section className="enquiry-section section-padding" id="enquiry">
      <div className="container">
        <div className="enquiry-wrapper">
          {/* Left Info Pane */}
          <div className="enquiry-info-pane">
            <div>
              <span className="eyebrow eyebrow-dark">Procurement &amp; Sampling</span>
              <h3>Let’s create something together.</h3>
              <p>
                Tell us where LWS might live in your business—on a breakfast tray, in a festive corporate hamper, or on a boutique retail shelf. We will return with a considered proposal and a sample tasting kit.
              </p>

              <ul className="sample-guarantees">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Response within two business days</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Curated sample kit shipped to your address</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Export-ready laboratory test documentation</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Dedicated OEM private label support</span>
                </li>
              </ul>
            </div>

            <div className="direct-contacts">
              <div className="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Direct Sales: <a href="mailto:lwshoney@gmail.com">lwshoney@gmail.com</a></span>
              </div>
              <div className="contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>WhatsApp Desk: <a href="https://wa.me/916303143435" target="_blank" rel="noopener noreferrer">+91 63031 43435</a></span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Pane */}
          <div className="enquiry-form-pane">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Preferred Format For Sample Evaluation</label>
                <div className="format-selection-group">
                  {['Honey Spoon (8g)', 'Honey Pod (16g)', 'Discovery Kit (Both)'].map((fmt) => (
                    <div
                      key={fmt}
                      className={`format-radio-btn ${formatPreference === fmt ? 'checked' : ''}`}
                      onClick={() => setFormatPreference(fmt)}
                    >
                      {fmt}
                    </div>
                  ))}
                </div>
              </div>

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
                  <label className="form-label" htmlFor="company">Hotel / Company *</label>
                  <input
                    type="text"
                    id="company"
                    className="form-input"
                    placeholder="e.g. The Oberoi Grand"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="procurement@hotel.com"
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

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="sector">Sector / Business Type</label>
                  <select
                    id="sector"
                    className="form-select"
                    value={formData.sector}
                    onChange={handleChange}
                  >
                    <option value="Luxury Hotel or Resort">Luxury Hotel or Resort</option>
                    <option value="Aviation / Airline Catering">Aviation / Airline Catering</option>
                    <option value="Fine Dining / Specialty Cafe">Fine Dining / Specialty Cafe</option>
                    <option value="Corporate Gifting Agency">Corporate Gifting Agency</option>
                    <option value="Retail Brand / Private Label">Retail Brand / Private Label</option>
                    <option value="International Export">International Export</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="volume">Estimated Monthly Volume</label>
                  <select
                    id="volume"
                    className="form-select"
                    value={formData.volume}
                    onChange={handleChange}
                  >
                    <option value="Pilot Batch (500 - 2,000 units)">Pilot Batch (500 - 2,000 units)</option>
                    <option value="Hospitality Standard (2,000 - 10,000 units)">Hospitality Standard (2,000 - 10,000 units)</option>
                    <option value="Enterprise / Export (10,000+ units)">Enterprise / Export (10,000+ units)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="notes">Delivery Address &amp; Specific Requirements</label>
                <textarea
                  id="notes"
                  className="form-textarea"
                  placeholder="Provide shipping address for sample dispatch or mention custom branding requirements..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-honey" style={{ width: '100%', padding: '1.1rem' }}>
                Submit Sample Request &rarr;
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
