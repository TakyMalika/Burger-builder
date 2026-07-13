/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This project keeps JSX inside `.js` files (legacy CRA layout), so esbuild is
// told to treat `.js` as JSX rather than renaming every component to `.jsx`.
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      // Firebase Hosting is configured to serve the `build/` directory.
      outDir: 'build',
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.js$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: { '.js': 'jsx' },
      },
    },
    // Expose the app's existing `REACT_APP_*` variables on `import.meta.env`
    // (Vite injects these reliably in both dev and build).
    envPrefix: ['VITE_', 'REACT_APP_'],
    define: {
      // Bridge the remaining CRA-style `process.env` reads (NODE_ENV is used by
      // the store setup; PUBLIC_URL only by the unused service-worker register()).
      'process.env.NODE_ENV': JSON.stringify(mode === 'development' ? 'development' : 'production'),
      'process.env.PUBLIC_URL': JSON.stringify(''),
    },
    server: {
      port: 3000,
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  };
});
