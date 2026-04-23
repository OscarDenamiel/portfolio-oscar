// v2
import { projects } from './data/projects.js';
import { initMobileMenu } from './js/mobileMenu.js';
import { initAudioManager } from './js/audioManager.js';
import { initScrollManager } from './js/scrollManager.js';
import { initChatbot } from './js/chatbot.js';  // ← NUEVO

// --- LOAD COMPONENT ---
async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  const response = await fetch(componentPath);
  const html = await response.text();

  const temp = document.createElement('div');
  temp.innerHTML = html;

  placeholder.replaceWith(...temp.childNodes);
}

// --- MORE PROJECTS MAP (slug → component file) ---
const MORE_PROJECTS_MAP = {
  '/map':                  'more-projects-map.html',
  '/self-service-booking': 'more-projects-self-service.html',
  '/smart-suggester':      'more-projects-smart-suggester.html',
  '/mobile-first':         'more-projects-mobile-first.html',
};

// --- LOAD PROJECT PAGE COMPONENTS ---
async function loadProjectComponents() {
  const path = window.location.pathname;
  const moreProjectsFile = MORE_PROJECTS_MAP[path];

  const loads = [];

  if (moreProjectsFile) {
    loads.push(loadComponent('more-projects-placeholder', `/components/${moreProjectsFile}`));
  }

  if (document.getElementById('footer-project-placeholder')) {
    loads.push(loadComponent('footer-project-placeholder', '/components/footer-project.html'));
  }

  await Promise.all(loads);
}

// --- YEARS OF EXPERIENCE ---
function initYearsExperience() {
  const years = new Date().getFullYear() - 2018;
  document.querySelectorAll('.years-experience').forEach(el => {
    el.textContent = years + '+';
  });
}

// --- CAROUSEL CONTROLS ---
function initCarouselControls() {
  const carousels = [
    { carousel: 'travel-carousel',          prev: 'travel-prev',          next: 'travel-next' },
    { carousel: 'about-carousel',           prev: 'about-prev',           next: 'about-next' },
    { carousel: 'adventure-carousel',       prev: 'adventure-prev',       next: 'adventure-next' },
    { carousel: 'world-carousel',           prev: 'world-prev',           next: 'world-next' },
    { carousel: 'hobbies-carousel',         prev: 'hobbies-prev',         next: 'hobbies-next' },
    { carousel: 'project-context-carousel', prev: 'project-context-prev', next: 'project-context-next' },
    { carousel: 'project-images-carousel',  prev: 'project-images-prev',  next: 'project-images-next' },
  ];

  carousels.forEach(({ carousel: carouselId, prev: prevId, next: nextId }) => {
    const carousel = document.getElementById(carouselId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    if (!carousel || !prevBtn || !nextBtn) return;

    const controls = prevBtn.closest('.carousel-controls');

    function getItemWidth() {
      const firstItem = carousel.querySelector('.carousel-item, .about-column');
      if (!firstItem) return 0;
      return firstItem.offsetWidth + 16;
    }

    function updateCarouselState() {
      const items = carousel.querySelectorAll('.carousel-item, .about-column');
      const gap = 16;
      const paddingLeft = parseFloat(getComputedStyle(carousel).paddingLeft) || 0;
      const paddingRight = parseFloat(getComputedStyle(carousel).paddingRight) || 0;
      const totalItemsWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth + gap, 0) - gap;
      const availableWidth = carousel.clientWidth - paddingLeft - paddingRight;
      const hasOverflow = totalItemsWidth > availableWidth + 2;

      if (hasOverflow) {
        if (controls) controls.style.display = 'flex';
        carousel.style.overflowX = 'auto';
        carousel.style.scrollSnapType = 'x mandatory';
      } else {
        if (controls) controls.style.display = 'none';
        carousel.style.overflowX = 'hidden';
        carousel.style.scrollSnapType = 'none';
      }
    }

    function updateGradients() {
      if (window.innerWidth < 1750) return;
      const wrapper = carousel.closest('.carousel-wrapper');
      if (!wrapper) return;

      const atStart = carousel.scrollLeft <= 2;
      const atEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 2;

      wrapper.classList.toggle('at-start', atStart);
      wrapper.classList.toggle('at-end', atEnd);
    }

    prevBtn.addEventListener('click', () => {
      const atStart = carousel.scrollLeft < getItemWidth() / 2;
      if (atStart) {
        carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
      }
    });

    nextBtn.addEventListener('click', () => {
      const atEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1;
      if (atEnd) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
      }
    });

    carousel.addEventListener('scroll', updateGradients, { passive: true });
    window.addEventListener('resize', updateGradients, { passive: true });

    requestAnimationFrame(() => {
      setTimeout(() => {
        updateCarouselState();
        updateGradients();
      }, 100);
    });

    window.addEventListener('resize', updateCarouselState, { passive: true });
  });
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
  await Promise.all([
    loadComponent('header-placeholder', '/components/header.html'),
    loadComponent('sidebar-placeholder', '/components/sidebar.html'),
    loadComponent('footer-placeholder', '/components/footer.html'),
    loadComponent('footer-sm-placeholder', '/components/footer-sm.html'),
    loadProjectComponents(),
  ]);

  renderProjects();
  initTypewriter();
  initYearsExperience();

  await new Promise(resolve => requestAnimationFrame(resolve));

  initMobileMenu();
  initScrollManager();
  initAnimations();
  initAudioManager();
  initCarouselControls();
  initChatbot();  // ← NUEVO: se llama después de que los componentes están en el DOM

  document.body.classList.add('ready');
}

init();