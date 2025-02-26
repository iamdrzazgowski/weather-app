import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        hmr: true, // Włącza Hot Module Replacement
        watch: {
            usePolling: true, // Pomaga, gdy pliki nie są śledzone poprawnie
        },
    },
});
