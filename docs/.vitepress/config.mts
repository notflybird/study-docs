import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习博客",
  outDir: "../dist",
  base: "/study-docs/",
  description: "Liu Lin's study docs",
  titleTemplate: "Liu Lin's study docs",
  head: [["link", { rel: "icon", href: "/study.ico" }]],
  themeConfig: {
    logo: "/study.ico",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
