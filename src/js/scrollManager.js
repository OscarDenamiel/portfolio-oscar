export function initScrollManager() {
  const progressBar = document.getElementById('myProgressBar');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const SCROLL_THRESHOLD = 200;

  // --- PROGRESS BAR & SCROLL TO TOP ---
  function updateProgressBar() {
    if (!progressBar) return;
    const scrolled = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = height > 0 ? (scrolled / height) * 100 + '%' : '0%';
  }

  function toggleScrollToTop() {
    if (!scrollToTopBtn) return;
    scrollToTopBtn.classList.toggle('visible', window.pageYOffset > SCROLL_THRESHOLD);
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgressBar();
        toggleScrollToTop();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  scrollToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- SCROLL REVEAL ---
  const isMobile = window.innerWidth <= 768;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: isMobile ? '0px 0px 0px 0px' : '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // --- INITIAL STATE ---
  updateProgressBar();
  toggleScrollToTop();
}