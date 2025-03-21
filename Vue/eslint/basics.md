# Eslint

用于校验 Javascript 代码问题

## languageOptions

配置代码的语言环境，让 Eslint 正确解析和检查代码，作用如下：

- ecmaVersion 指定 JS 版本：latest(默认)
- sourceType 设置模块系统：module(默认)、commonjs、script
- globals 定义全局变量
- parser 解析器
- parserOptions 解析器选项

## 解析器

解析代码，将其转为 AST（抽象语法树），然后 Eslisnt 根据 AST 进行代码检查和规则校验。

| 解析器                    | 作用                                  |
| ------------------------- | ------------------------------------- |
| espree（默认）            | 支持标准 JavaScript 语法              |
| @typescript-eslint/parser | 解析 TypeScript 代码                  |
| @babel/eslint-parser      | 解析使用 Babel 转译的 JavaScript 代码 |
| vue-eslint-parser         | 用于解析 Vue 单文件组件 (.vue)        |

解析 vue 组件

```js
import tseslint from "typescript-eslint";
{
  files: ["**/*.vue"],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser
    }
  }
}
```

当指定解析器不够，还需要 parserOptions 进一步配置解析行为，例如：

```js
export default {
  languageOptions: {
    parser: require("@babel/eslint-parser"),
    parserOptions: {
      ecmaVersion: "latest", // 允许最新 ES 语法
      sourceType: "module", // 允许 ES 模块
      ecmaFeatures: {
        jsx: true, // 允许 JSX 语法（React 项目）
      },
    },
  },
};
```

## 配置规则 Rules

规则是 ESLint 的核心构建块。规则验证你的代码是否满足特定期望

## 插件 Plugins

扩展 ESLint 功能的方式，它可以提供新的规则（rules）、处理特定文件类型（processors）、增强解析器（parser）等功能，使 ESLint 能适应不同的项目需求。

## 组合配置

在许多情况下，你不会从头开始编写 ESLint 配置文件，而是将第三方预配置好的以及你自己的覆盖来为项目创建配置

```js
// eslint.config.js
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);
```

在这里，首先应用 js.configs.recommended 预定义的配置，然后另一个配置对象为 no-unused-vars 添加所需的配置。
还可以将配置应用文件子级，。

::: tip 还可以将配置应用文件子级
通过使用`files`和`extends`合并配置对象中的其余属性

```js
// eslint.config.js
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/src/safe/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
]);
```

:::

## Eslint 安装

- npm install eslint -D
- 创建 eslint.config.js 文件
- package.json 配置"lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src"
- npm install @eslint/js -D 安装 js 通用 eslint 配置
- npm install globals -D 安装全局变量规则
- npm install eslint-plugin-vue typescript-eslint -D 让 Eslint 能够解析 vue 和 ts
- npm install @stylistic/eslint-plugin -D 语法规范

```js
import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "public"],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,
  /** vue推荐配置 */
  ...eslintPluginVue.configs["flat/recommended"],

  stylistic.configs.customize({
    indent: 2,
    quotes: "single",
    semi: false,
    jsx: true,
    braceStyle: "1tbs",
    arrowParens: "always",
  }),

  /**
   * javascript 规则
   */
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      "no-console": "error",
    },
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },

  /**
   * vue 规则
   */
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        /** typescript项目需要用到这个 */
        parser: tseslint.parser,
        ecmaVersion: "latest",
        /** 允许在.vue 文件中使用 JSX */
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // 在这里追加 vue 规则
      "vue/no-mutating-props": [
        "error",
        {
          shallowOnly: true,
        },
      ],
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {},
  }
);
```

为了让项目迁移时 eslint 仍能生效，在.vscode/setting.json 文件配置如下

```js
{
  "eslint.validate": [
    "javascript",
    "vue",
    "vue-html",
    "typescript",
    "typescriptreact",
    "html",
    "css",
    "scss",
    "less",
    "json",
    "jsonc",
    "json5",
    "markdown"
  ],
}
```

## 安装 Prettier

- npm install prettier eslint-plugin-prettier eslint-config-prettier -D
- 根目录下新建文件.prettierrc.json

```json
{
  "singleQuote": true,
  "semi": false
}
```

- eslint.config.js 文件添加 eslint-plugin-prettier 防止 prettier 和 eslint 冲突，如果冲突以 pretteir 为准

```js
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
{
  eslintPluginPrettierRecommended, //解决prettier和eslint冲突,放在rules配置项最下面
}
```

注：参考文献[https://article.juejin.cn/post/7402696141495779363]
