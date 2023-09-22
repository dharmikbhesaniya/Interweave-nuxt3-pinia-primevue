export default defineNuxtConfig({
  devtools: { enabled: true },
  quasar: {
    plugins: ["Notify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  modules: ["@pinia/nuxt", "nuxt-quasar-ui"],
});
