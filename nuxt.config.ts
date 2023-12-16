export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
  ],

  css: ["primevue/resources/themes/lara-dark-purple/theme.css"],

  // # Module Configuration
  pinia: {
    storesDirs: ["./stores"],
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  primevue: {
    options: { unstyled: false, inputStyle: "filled", ripple: true },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      prefix: "Prime",
      exclude: ["Editor", "Chart"],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
  },
});
