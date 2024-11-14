import { defineConfig } from "vitepress";
import autoSidebar from "./plugins/autoSidebar";
import autoNav from "./plugins/autoNav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习博客",
  outDir: "../dist",
  base: "/study-docs/",
  description: "Liu Lin's study docs",
  titleTemplate: "Liu Lin's study docs",
  head: [["link", { rel: "icon", href: "/study-docs/favicon.ico" }]],
  themeConfig: {
    logo: "/bg.png",
    search: {
      provider: "local",
    },

    nav: autoNav(),

    sidebar: autoSidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/notflybird/study-docs" },
    ],
  },
});
