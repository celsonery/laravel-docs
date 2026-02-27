import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/laravel-docs/",

  lang: "en-US",
  title: "Development Docs",
  description: "Development documentation",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
