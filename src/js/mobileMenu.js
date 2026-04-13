export function initMobileMenu() {
  const body = document.body;
  const hamburger = document.getElementById('hamburger-menu');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-menu-overlay');
  const mainContainer = document.querySelector('.main-container');

  function openMenu() {
    sidebar.classList.add('open');
    body.classList.add('sidebar-open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('active');
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
  }

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  if (sidebar) {
    sidebar.querySelectorAll('.sidebar-nav a').forEach(link => {
      link.addEventListener('click', () => {
        const isExternal = link.target === '_blank' || link.href?.includes('export=download');
        if (window.innerWidth <= 768 && !isExternal) closeMenu();
      });
    });
  }

  if (mainContainer) {
    mainContainer.addEventListener('click', () => {
      if (window.innerWidth <= 768 && body.classList.contains('sidebar-open')) closeMenu();
    });
  }
}
