import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer' // You need to import autoprefixer
 
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: "http://localhost:3002",
        secure: false,
      }
    }
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),  // Ensure tailwindcss is also used here if needed
        autoprefixer(), // Autoprefixer is now correctly imported and used
      ],
    },
  },
})
