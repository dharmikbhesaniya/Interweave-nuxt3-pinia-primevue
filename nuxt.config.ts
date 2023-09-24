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
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-quasar-ui"],
});
