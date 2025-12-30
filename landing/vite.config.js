import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'gizlilik-politikasi.html'),
        verifyEmail: resolve(__dirname, 'verify-email.html'),
        resetPassword: resolve(__dirname, 'reset-password.html'),
      },
    },
  },
})

