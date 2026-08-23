// ============================================================
// UNDULI SENADHEERA — PORTFOLIO
// Minimal vanilla JS: mobile nav, dynamic year, social links
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after selecting a link (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Footer year + title block revision year ---
  const yearEls = [document.getElementById('year'), document.getElementById('tbYear')];
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => { if (el) el.textContent = currentYear; });

  // --- EDIT ME: social links -------------------------------------------
  // Replace the URLs below with your real LinkedIn / GitHub profile links.
  const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE',
    github:   'https://github.com/YOUR-GITHUB-USERNAME'
  };
  // -----------------------------------------------------------------------

  const linkedinLink = document.getElementById('linkedinLink');
  const githubLink = document.getElementById('githubLink');
  if (linkedinLink) linkedinLink.href = SOCIAL_LINKS.linkedin;
  if (githubLink) githubLink.href = SOCIAL_LINKS.github;

  // --- Scroll-reveal for sections and cards ---
  const revealTargets = document.querySelectorAll(
    '.project-card, .achievement-card, .timeline-item, .about-grid, .contact-item'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // Add visible-state styles via a class toggle
    const style = document.createElement('style');
    style.textContent = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
  }

  // --- Active nav link highlight on scroll ---
  const sections = document.querySelectorAll('main .section, .hero');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(section => navObserver.observe(section));
  }

});
