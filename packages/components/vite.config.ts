import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite',
  plugins: [
    react(),
    dts({ entryRoot: 'src', tsconfigPath: path.join(__dirname, 'tsconfig.json') }),
  ],
  css: {
    postcss: {
      to: path.join(__dirname, 'css'),
    },
  },
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssCodeSplit: true,
    lib: {
      entry: {
        index: 'src/index.ts',
        utilities: path.join(__dirname, 'src/styles/utilities.scss'),
        fonts: path.join(__dirname, 'src/styles/fonts.scss'),
        variables: path.join(__dirname, 'src/styles/variables/index.scss'),
        reset: path.join(__dirname, 'src/styles/reset.scss'),
      },
      fileName: 'components',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', /@rhino-ui\/.*/],
    },
  },
});
