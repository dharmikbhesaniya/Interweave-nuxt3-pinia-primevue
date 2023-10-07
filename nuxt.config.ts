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
  runtimeConfig: {
    public: {
      gtm_id: process.env.gtm_id,
      gtm_enabled: true,
      gtm_debug: false,
      sitename: "Interwave - social media app",
      companyname: "Interwave"
    },
  },
});
