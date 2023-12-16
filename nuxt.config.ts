export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
  ],

  // # Module Configuration
  pinia: {
    storesDirs: ["./stores"],
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});
