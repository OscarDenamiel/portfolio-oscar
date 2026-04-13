export function initAudioManager() {
  const cards = document.querySelectorAll('.project-card');
  const loadedAudio = new Map();

  cards.forEach(card => {
    const imageContainer = card.querySelector('.project-image-container');
    const audio = card.querySelector('.project-audio');
    const playIcon = card.querySelector('.play-icon');
    const pauseIcon = card.querySelector('.pause-icon');
    const audioControl = card.querySelector('.audio-control');

    if (!audio) return;

    audio.preload = 'none';

    audio.addEventListener('ended', () => {
      playIcon?.classList.remove('hidden');
      pauseIcon?.classList.add('hidden');
    });

    function stopAllOthers() {
      loadedAudio.forEach((_, otherAudio) => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
          const otherCard = otherAudio.closest('.project-card');
          otherCard?.querySelector('.play-icon')?.classList.remove('hidden');
          otherCard?.querySelector('.pause-icon')?.classList.add('hidden');
        }
      });
    }

    function toggleAudio(e) {
      e.preventDefault();

      if (!loadedAudio.has(audio)) {
        audio.preload = 'auto';
        audio.load();
        loadedAudio.set(audio, true);
      }

      stopAllOthers();

      if (audio.paused) {
        audio.play().catch(err => console.warn('Audio play failed:', err));
        playIcon?.classList.add('hidden');
        pauseIcon?.classList.remove('hidden');
      } else {
        audio.pause();
        playIcon?.classList.remove('hidden');
        pauseIcon?.classList.add('hidden');
      }
    }

    imageContainer?.addEventListener('click', toggleAudio);
    audioControl?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudio(e);
    });
  });
}
