// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'nuxt-security',
    '@nuxtjs/seo',
    'nuxt-zod-i18n',
    '@nuxtjs/i18n'
  ],


  // Pinia
  pinia: {
    storesDir: ['~/stores/**'],
  },

  // ESLint
  eslint: {
    config: {
      stylistic: {
        semi: true
      }
    }
  }
})