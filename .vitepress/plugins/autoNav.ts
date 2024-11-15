// 自动生成导航栏
export default function autoNav() {
  return [
    { text: "Home", link: "/" },
    {
      text: "Vitepress",
      link: "/Vitepress/index",
      activeMatch: "/Vitepress/",
    },
    { text: "React", link: "/React/index", activeMatch: "/React/" },
    {
      text: "Typescript",
      link: "/Typescript/index",
      activeMatch: "/Typescript/",
    },
    {
      text: "简历",
      link: "https://notflybird.github.io/",
      ariaLabel: "简历",
    },
  ];
}
