export default defineNuxtConfig({
  devtools: { enabled: false },
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
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.style.css"],
  modules: ["@pinia/nuxt", "nuxt-quasar-ui", "nuxt-gtag"],
  gtag: {
    id: process.env.GOOGLEID,
    config: {
      page_title: "Intractify",
    },
  },
  runtimeConfig: {
    public: {
      gtm_id: process.env.gtm_id,
      gtm_enabled: true,
      gtm_debug: false,
      sitename: "Intractify - social media app",
      companyname: "Intractify",
    },
  },
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/2ba0febf51.js",
        },
        // { body: true },
      ],
    },
  },
});
