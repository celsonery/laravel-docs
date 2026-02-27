import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Development Docs",
  description: "Development documentation",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
