import { defineConfig } from 'vite'
import { resolve } from 'path'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    purgecss({
      content: [
        './*.html',
        './src/**/*.html',
        './src/**/*.js',
        './public/components/*.html',
        './src/js/chatbot-kb.js'
      ],
      safelist: [
        // Classes added dynamically by JS — never purge these
        'dark-mode',
        'ready',
        'open',
        'active',
        'visible',
        'hidden',
        'sidebar-open',
        'project-card--visible',
        'animate-fade-up',
        'animate-fade-in',
        'typing-complete',
        /^body/,
        /^dark-mode/,
        /^kb-/,
        /^chatbot/,
        /^orb-/,
        /^chatbot-typing/,
        { pattern: /dark-mode-toggle-btn/, greedy: true },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        map: resolve(__dirname, 'map.html'),
        'self-service-booking': resolve(__dirname, 'self-service-booking.html'),
        'smart-suggester': resolve(__dirname, 'smart-suggester.html'),
        'mobile-first': resolve(__dirname, 'mobile-first.html'),
      }
    }
  }
})
