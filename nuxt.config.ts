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
  css: [
    "~/assets/css/main.css",
    "~/assets/css/tailwind.style.css",
    "~/assets/css/globals.css",
  ],
  modules: ["@pinia/nuxt", "nuxt-quasar-ui"],
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/2ba0febf51.js",
        },
      ],
    },
  },
});
