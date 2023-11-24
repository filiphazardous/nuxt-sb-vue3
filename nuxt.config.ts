// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  debug: true,
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },
  modules: ["@nuxt/devtools", "@nuxtjs/storybook"],
});
