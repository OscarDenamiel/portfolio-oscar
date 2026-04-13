export function initScrollManager() {
  const progressBar = document.getElementById('myProgressBar');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const SCROLL_THRESHOLD = 200;

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

  // Initial state
  updateProgressBar();
  toggleScrollToTop();
}
