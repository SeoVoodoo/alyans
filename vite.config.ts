import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }): UserConfig => {
  
  console.log('=============RUN WITH MODE============== ', mode)

  const basePath = mode === 'gh-deploy' ? '/alyans' : '/'

  return {
    base: basePath,
    plugins: [
      react()
    ],
    server: {
      open: true
    },
    build: {
      outDir: 'build'
    }
  }
})
