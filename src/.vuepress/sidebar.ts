import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Backend - Laravel",
      icon: "book",
      prefix: "backend/",
      children: "structure",
    },
    {
      text: "Frontend - Vue.js",
      icon: "book",
      prefix: "frontend/",
      children: "structure",
    },
    {
      text: "Mobile",
      icon: "mobile-screen",
      prefix: "teste/",
      children: "structure"
    }
  ],
});
