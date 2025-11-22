import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
            buildDirectory: 'build', // Laravel itt keresi a cuccokat
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],

    build: {
        // kényszerítjük, hogy legyen manifest
        manifest: true,
        // ide menjen minden, ez lesz a /public/build
        outDir: 'public/build',
        assetsDir: 'assets',
        emptyOutDir: true,
    },

    // TSX miatt
    esbuild: {
        jsx: 'automatic',
    },
});
