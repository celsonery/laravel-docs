import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "Backend",
      icon: "book",
      prefix: "backend/",
      children: "structure",
    },
    {
      text: "Frontend",
      icon: "book",
      prefix: "frontend/",
      children: "structure",
    },
    {
      text: "Teste",
      icon: "computer",
      prefix: "teste/",
      children: ['teste']
    }
  ],
});
