// 自动生成导航栏
export default function autoNav() {
  return [
    { text: "Home", link: "/" },
    {
      text: "Vitepress",
      link: "/vitepress/index",
      activeMatch: "/Vitepress/",
    },
    { text: "React", link: "/react/index", activeMatch: "/React/" },
    {
      text: "Typescript",
      link: "/typescript/index",
      activeMatch: "/Typescript/",
    },
  ];
}
