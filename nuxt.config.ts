export default defineNuxtConfig({
  devtools: { enabled: true },
  quasar: {
    plugins: ["Notify"],
  },
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-quasar-ui", "nuxt-gtag"],
  gtag: {
    id: process.env.GOOGLEID,
    config: {
      page_title: "Interwave",
    },
  },
});
