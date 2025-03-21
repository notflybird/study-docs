// 自动生成侧边栏

export default function autoSidebar() {
  return {
    "/Vitepress/": [
      {
        text: "基础入门",
        items: [
          {
            text: "安装",
            link: "/Vitepress/guide/mount",
            activeMatch: "/Vitepress/guide/",
          },
          {
            text: "Markdown扩展",
            link: "/Vitepress/guide/markdownConfig",
            activeMatch: "/Vitepress/guide/",
          },
        ],
      },
    ],
    "/Vue/": [
      {
        text: "入门基础",
        items: [
          { text: "简介", link: "/Vue/guide/introduction" },
          { text: "项目安装", link: "/Vue/guide/project-create" },
        ],
      },
      {
        text: "EsLint",
        items: [{ text: "基础配置", link: "/Vue/eslint/basics" }],
      },
    ],
    "/React/": [
      {
        text: "React Hooks",
        items: [
          {
            text: "useState",
            link: "/React/hooks/useState",
          },
          {
            text: "useEffect",
            link: "/React/hooks/useEffect",
          },
          {
            text: "useCallback",
            link: "/React/hooks/useCallback",
          },
          {
            text: "useContext",
            link: "/React/hooks/useContext",
          },
          {
            text: "useDeferredValue",
            link: "/React/hooks/useDeferredValue",
          },
        ],
      },
      {
        text: "React API",
        items: [
          {
            text: "memo",
            link: "/React/api/memo",
          },
        ],
      },
    ],
    "/Typescript/": [
      {
        text: "特殊类型",
        items: [
          {
            text: "any",
            link: "/Typescript/special/any",
          },
          {
            text: "unknown",
            link: "/Typescript/special/unknown",
          },
          {
            text: "void",
            link: "/Typescript/special/void",
          },
          {
            text: "never",
            link: "/Typescript/special/never",
          },
        ],
      },
      {
        text: "基础类型",
        items: [
          { link: "/Typescript/primitiveTypes/string", text: "字符串(string)" },
          { link: "/Typescript/primitiveTypes/number", text: "数字(number)" },
          {
            link: "/Typescript/primitiveTypes/boolean",
            text: "布尔类型(boolean)",
          },
          { link: "/Typescript/primitiveTypes/null", text: "空值(null)" },
          {
            link: "/Typescript/primitiveTypes/undefined",
            text: "未定义(undefined)",
          },
          { link: "/Typescript/primitiveTypes/symbol", text: "symbol" },
          { link: "/Typescript/primitiveTypes/bigint", text: "bigint" },
        ],
      },
      {
        text: "对象类型",
        items: [
          { link: "/Typescript/object/array", text: "数组类型" },
          { link: "/Typescript/object/tuple", text: "元组类型" },
          { link: "/Typescript/object/object", text: "对象字面量" },
          { link: "/Typescript/object/class", text: "class类" },
          { link: "/Typescript/object/interface", text: "interface接口" },
        ],
      },
      {
        text: "函数类型",
        items: [
          { link: "/Typescript/function/function", text: "函数" },
          { link: "/Typescript/function/arrow", text: "箭头函数" },
        ],
      },
      {
        text: "类型操作",
        items: [
          { link: "/Typescript/advanced/declare", text: "声明文件" },
          { link: "/Typescript/advanced/union", text: "联合类型" },
          { link: "/Typescript/advanced/intersection", text: "交叉类型" },
          { link: "/Typescript/advanced/generics", text: "泛型" },
        ],
      },
      {
        text: "内置工具类型",
        link: "/Typescript/utility/index",
      },
    ],
  };
}
