export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
  ],

  // # Module Configuration
  pinia: {
    storesDirs: ["./controllers"],
  },
});
