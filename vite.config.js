import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
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
