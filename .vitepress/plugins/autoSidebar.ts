// 自动生成侧边栏

export default function autoSidebar() {
  return {
    "/vitepress/": [
      {
        text: "Vitepress",
        items: [{ text: "入门", link: "/vitepress/index" }],
      },
    ],
    "/react/": [
      {
        text: "React",
        items: [{ text: "入门", link: "/react/index" }],
      },
    ],
    "/typescript/": [
      {
        text: "Typescript",
        items: [{ text: "类型基础", link: "/typescript/index" }],
      },
    ],
  };
}
