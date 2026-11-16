/**
 * BiPC JUNIOR COLLEGE — CORE JAVASCRIPT
 * Pure Vanilla JavaScript (No Frameworks)
 * Lightweight, accessible, and high-performance.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNav();
  initStickyHeader();
  initAccordions();
  initForms();
  initScrollTop();
  initTabs();
});

/**
 * Mobile Navigation Toggle & Dropdowns
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownTriggers = document.querySelectorAll('.nav-item.has-dropdown > .nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile Dropdown toggles
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = trigger.parentElement;
        const dropdown = parent.querySelector('.dropdown-menu');
        if (dropdown) {
          const isOpen = dropdown.classList.toggle('mobile-open');
          parent.classList.toggle('is-open', isOpen);
          trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      }
    });
  });
}

/**
 * Active Navigation Highlight based on window location
 */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      const parentItem = link.closest('.has-dropdown');
      if (parentItem) {
        const topLink = parentItem.querySelector('.nav-link');
        if (topLink) topLink.classList.add('active');
      }
    }
  });
}

/**
 * Sticky Header shadow elevation on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * FAQ Accordion Interactions
 */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion-header');

  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = header.nextElementSibling;
      const isOpen = item.classList.contains('active');

      // Close other accordions in the same container if desired
      const parentContainer = item.parentElement;
      if (parentContainer) {
        const activeSiblings = parentContainer.querySelectorAll('.accordion-item.active');
        activeSiblings.forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            const siblingBody = sibling.querySelector('.accordion-body');
            if (siblingBody) siblingBody.style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        body.style.maxHeight = null;
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Form Validation & Demo Success Feedback (No Server Transmission)
 */
function initForms() {
  const forms = document.querySelectorAll('form[data-validate="true"]');
  const modal = document.getElementById('demoModal');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  if (closeModalBtns && modal) {
    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate required text/select/email inputs
      const requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(input => {
        const value = input.value.trim();
        const errorEl = input.parentElement.querySelector('.form-error');

        if (!value) {
          showError(input, errorEl, 'This field is required.');
          isValid = false;
        } else if (input.type === 'email' && !validateEmail(value)) {
          showError(input, errorEl, 'Please enter a valid email address.');
          isValid = false;
        } else if (input.type === 'tel' && !validatePhone(value)) {
          showError(input, errorEl, 'Please enter a valid 10-digit phone number.');
          isValid = false;
        } else {
          clearError(input, errorEl);
        }
      });

      if (isValid) {
        form.reset();
        if (modal) {
          modal.classList.add('open');
        } else {
          alert('Demo Submission: Thank you! This is an illustrative frontend demo form. No real submission occurred.');
        }
      }
    });

    // Clear error on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        const errorEl = field.parentElement.querySelector('.form-error');
        clearError(field, errorEl);
      });
    });
  });

  function showError(input, errorEl, msg) {
    input.classList.add('is-invalid');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
    }
  }

  function clearError(input, errorEl) {
    input.classList.remove('is-invalid');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
  }
}

/**
 * Scroll to Top Button
 */
function initScrollTop() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Tab Navigation (e.g. for Career pathways or NEET modules)
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabPanes = container.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        const targetPane = container.querySelector(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  });
}
