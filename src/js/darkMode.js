export function initDarkMode() {
  const body = document.body;
  const buttons = document.querySelectorAll('.dark-mode-toggle-btn');
  const icons = document.querySelectorAll('.dark-mode-icon-img');

  function updateIcons(isDark) {
    icons.forEach(icon => {
      icon.src = isDark ? '/images/sun-icon.svg' : '/images/moon-icon.svg';
      icon.alt = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }

  function enableDarkMode() {
    body.classList.add('dark-mode');
    updateIcons(true);
    localStorage.setItem('darkMode', 'true');
  }

  function disableDarkMode() {
    body.classList.remove('dark-mode');
    updateIcons(false);
    localStorage.setItem('darkMode', 'false');
  }

  // Default: dark mode unless explicitly disabled
  if (localStorage.getItem('darkMode') === 'false') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
    });
  });
}
