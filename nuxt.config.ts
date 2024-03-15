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
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    },
  },

  // # Module Configuration
  pinia: {
    storesDirs: ["./controllers"],
  },
});
