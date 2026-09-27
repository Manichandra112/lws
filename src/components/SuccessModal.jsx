import React from 'react';

export default function SuccessModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--honey-subtle)',
              border: '1px solid var(--honey-border)',
              color: 'var(--honey-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.8rem'
            }}
          >
            &#10003;
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sample Request Registered</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            Thank you, <strong style={{ color: 'var(--text-main)' }}>{order.name}</strong> from{' '}
            <strong style={{ color: 'var(--text-main)' }}>{order.company}</strong>.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-card)',
            borderRadius: 'var(--radius-sm)',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Selected Format:</span>
            <strong style={{ color: 'var(--text-main)' }}>{order.format}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Sector:</span>
            <strong style={{ color: 'var(--text-main)' }}>{order.sector}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>Volume Tier:</span>
            <strong style={{ color: 'var(--text-main)' }}>{order.volume}</strong>
          </div>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', marginBottom: '2rem', textAlign: 'center' }}>
          Our hospitality team will review your requirements and reach out via email / WhatsApp within two business days to confirm sample dispatch details.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Return to Page
          </button>
          <a
            href="https://wa.me/919427779669"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-honey"
          >
            Chat on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
