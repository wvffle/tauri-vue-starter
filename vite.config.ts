import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { dirResolver } from 'vite-auto-import-resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        // 'vue-router',
        // 'vee-validate',
        // '@vueuse/head',
        '@vueuse/core',
        {
          // '@vueuse/integrations/useAxios': [ 'useAxios' ],
          // '@vueuse/integrations/useFuse': [ 'useFuse' ],
        },
      ],
      resolvers: [
        dirResolver(),
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
    }),
  ]
})
