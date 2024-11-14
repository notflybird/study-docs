// 自动生成侧边栏

export default function autoSidebar() {
  return {
    "/Vitepress/": [
      {
        text: "Vitepress",
        items: [{ text: "入门", link: "/Vitepress/index" }],
      },
    ],
    "/React/": [
      {
        text: "React",
        items: [{ text: "入门", link: "/React/index" }],
      },
    ],
    "/Typescript/": [
      {
        text: "Typescript",
        items: [{ text: "类型基础", link: "/Typescript/index" }],
      },
    ],
  };
}
