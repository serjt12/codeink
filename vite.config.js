import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves the app from the domain root, so base must be '/' there —
// a relative base ('./') breaks asset loading on nested routes like
// /drop/001, which is what caused the 404.
// GitHub Pages serves from a subpath (username.github.io/repo-name), so
// the deploy workflow sets VITE_BASE_PATH to override this when building
// for Pages.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
