import type { StorybookConfig } from "@storybook-vue/nuxt";
// import { mergeConfig } from "vite";
// import viteConfig from "./vite.config";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-vue-slots",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // async viteFinal(config) {
  //   const syncedPlugins = await Promise.all(config.plugins);
  //   config.plugins = syncedPlugins.filter(
  //     (p) => !!p && (Array.isArray(p) || p.name !== "vite:vue")
  //   );
  //   const newConf = mergeConfig(config, viteConfig);
  //   console.log("*** Vite config:\n", newConf);
  //   return newConf;
  // },
};
export default config;
