import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueMacros from 'unplugin-vue-macros/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['NuxtLink'].includes(tag),
        },
      },
    }),
    VueMacros(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // {
        //   '@vueuse/core': [
        //     // named imports
        //     'useMouse', // import { useMouse } from '@vueuse/core',
        //     // alias
        //     ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
        //   ],
        //   '[package-name]': [
        //     '[import-names]',
        //     // alias
        //     ['[from]', '[alias]'],
        //   ],
        // },
      ],
      dirs: ['./composables'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['./components'],
      dts: true,
      directoryAsNamespace: false,
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('../', import.meta.url)),
    },
  },
});
