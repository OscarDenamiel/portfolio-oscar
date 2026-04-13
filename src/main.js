import { projects } from './data/projects.js';
import { initDarkMode } from './js/darkMode.js';
import { initMobileMenu } from './js/mobileMenu.js';
import { initAudioManager } from './js/audioManager.js';
import { initScrollManager } from './js/scrollManager.js';

// --- LOAD COMPONENT ---
async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  const response = await fetch(componentPath);
  const html = await response.text();

  // Create a temporary container to parse the HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;

  // Replace placeholder with actual nodes (avoids outerHTML timing issues)
  placeholder.replaceWith(...temp.childNodes);
}

// --- RENDER PROJECT CARDS ---
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map((project, index) => `
    <div class="project-card">
      <div class="project-image-container">
        <img
          src="${project.thumbnail}"
          alt="${project.thumbnailAlt}"
          class="project-image"
          width="640"
          height="360"
          loading="${index === 0 ? 'eager' : 'lazy'}"
          ${index === 0 ? 'fetchpriority="high"' : ''}
        >
        <div class="tooltip-container">
          <button class="audio-control" aria-label="Play audio">
            <img class="icon play-icon" src="/images/speaker-icon.svg" alt="">
            <img class="icon pause-icon hidden" src="/images/pause-icon.svg" alt="">
          </button>
          <span class="tooltip tooltip-text">Hear preview</span>
        </div>
      </div>
      <a href="${project.url}" class="card-content-link">
        <div class="card-content">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-description">${project.description}</p>
          <div class="card-actions">
            <div class="tooltip-container-button">
              <span class="btn-primary"><span class="arrow-icon"></span></span>
              <span class="tooltip tooltip-text tooltip-button">Read case study</span>
            </div>
          </div>
        </div>
      </a>
      <audio class="project-audio" preload="none">
        <source src="${project.audio}" type="audio/mpeg">
      </audio>
    </div>
  `).join('');
}

// --- TYPEWRITER ---
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (el) el.textContent = "Hi, I'm Oscar!";
}

// --- ANIMATIONS ---
function initAnimations() {
  setTimeout(() => {
    document.querySelectorAll('.animate-fade-up, .animate-fade-in').forEach(el => {
      el.classList.add('visible');
    });
    document.querySelectorAll('.project-card').forEach((card, i) => {
      setTimeout(() => {
        requestAnimationFrame(() => card.classList.add('project-card--visible'));
      }, i * 200);
    });
  }, 100);
}

// --- INIT ---
async function init() {
  // Load all components in parallel
  await Promise.all([
    loadComponent('header-placeholder', '/components/header.html'),
    loadComponent('sidebar-placeholder', '/components/sidebar.html'),
    loadComponent('footer-placeholder', '/components/footer.html'),
    loadComponent('footer-sm-placeholder', '/components/footer-sm.html'),
  ]);

  // Render dynamic content
  renderProjects();
  initTypewriter();

  // Wait one frame to ensure all injected DOM is fully processed
  await new Promise(resolve => requestAnimationFrame(resolve));

  // Init all modules — DOM is guaranteed ready at this point
  initDarkMode();
  initMobileMenu();
  initScrollManager();
  initAnimations();
  initAudioManager();

  // Show page once everything is ready
  document.body.classList.add('ready');
}

init();
