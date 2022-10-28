import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgLoader(), WindiCSS()],
    resolve: {
        alias: {
            '@/': '/src/',
        },
    },
    server: {
        port: 5172,
        proxy: {
            '^/api': {
                target: 'http://api-zuul.k8s.testuoko.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
})
