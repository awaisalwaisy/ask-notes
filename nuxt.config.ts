// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "shadcn-nuxt"],

  build: {
    transpile: ["vue-clerk", "@clerk/clerk-js"],
  },

  devServer: {
    port: 3333,
  },

  css: ["~/assets/css/global.css"],

  app: {
    rootTag: "body",
  },

  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
});
