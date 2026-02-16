import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    // Generate TypeScript declarations
    dts({ include: ['src/components'] })
  ],
  build: {
    lib: {
      // Entry point for your library
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyUILibrary',
      // Output both ESM and UMD formats
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize React - consumers provide their own
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    },
    // Source maps for debugging
    sourcemap: true,
    // Clear output directory
    emptyOutDir: true
  }
});