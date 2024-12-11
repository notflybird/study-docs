// 自动生成导航栏
export default function autoNav() {
  return [
    { text: "Home", link: "/" },
    {
      text: "Vitepress",
      link: "/Vitepress/guide/mount",
      activeMatch: "/Vitepress/",
    },
    {
      text: "Vue",
      items: [{ text: "入门基础", link: "/Vue/guide/introduction" }],
    },
    { text: "React", link: "/React/index", activeMatch: "/React/" },
    {
      text: "Typescript",
      link: "/Typescript/special/any",
      activeMatch: "/Typescript/",
    },
    {
      text: "简历",
      link: "https://notflybird.github.io/",
      ariaLabel: "简历",
    },
  ];
}
