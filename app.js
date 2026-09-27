/**
 * HONEY NANI - Single Landing Page Interactive Script
 * Pure landing page controller: tabs, FAQ accordion, enquiry form, sticky navbar
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`;
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`;
      });
    });
  }

  // 2. Sticky Header Elevation & Back to Top
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    highlightActiveNavLink();
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Highlight Active Navigation Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNavLink() {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }

  // 4. Products / Formats Switcher Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const formatShowcases = document.querySelectorAll('.format-showcase');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetFormat = button.getAttribute('data-target');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      formatShowcases.forEach(showcase => showcase.classList.remove('active'));

      button.classList.add('active');
      const activeShowcase = document.getElementById(targetFormat);
      if (activeShowcase) {
        activeShowcase.classList.add('active');
      }
    });
  });

  // 5. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 32 + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });

  // 6. Interactive Sample Calculator & Enquiry Form
  const formatLabels = document.querySelectorAll('.format-radio-label');
  formatLabels.forEach(label => {
    label.addEventListener('click', () => {
      formatLabels.forEach(l => l.classList.remove('checked'));
      label.classList.add('checked');
      const radio = label.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  const enquiryForm = document.getElementById('sampleEnquiryForm');
  const successModal = document.getElementById('successModal');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('enquiryName').value.trim();
      const company = document.getElementById('enquiryCompany').value.trim();
      const email = document.getElementById('enquiryEmail').value.trim();
      const sector = document.getElementById('enquirySector').value;
      const volume = document.getElementById('enquiryVolume').value;

      const selectedFormatInput = document.querySelector('input[name="formatPreference"]:checked');
      const selectedFormat = selectedFormatInput ? selectedFormatInput.value : 'Discovery Kit (Both)';

      if (!name || !email || !company) {
        alert('Please complete your name, company, and business email.');
        return;
      }

      // Populate Success Modal
      document.getElementById('modalClientName').textContent = name;
      document.getElementById('modalCompanyName').textContent = company;
      document.getElementById('modalFormat').textContent = selectedFormat;
      document.getElementById('modalVolume').textContent = volume;
      document.getElementById('modalSector').textContent = sector;

      if (successModal) {
        successModal.classList.add('open');
      }

      enquiryForm.reset();
      formatLabels.forEach(l => l.classList.remove('checked'));
      if (formatLabels[0]) formatLabels[0].classList.add('checked');
    });
  }

  // 7. Success Modal Dismiss
  const modalCloseButtons = document.querySelectorAll('.modal-close, .btn-modal-dismiss');
  modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (successModal) successModal.classList.remove('open');
    });
  });

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('open');
      }
    });
  }
});
