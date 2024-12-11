<script setup>
    import Test from "../components/index.vue"
    import VTGroup from "../components/VTGroup.vue"
    import { ref } from 'vue'
    const count = ref(0)
</script>

# Markdown 扩展 {#markdown-extensions}

VitePress 带有内置的 Markdown 扩展。

## 标题锚点 {#header-anchor}

标题会 `自动应用锚点` 。可以使用`markdown.anchor`选项配置锚点的渲染。

### 自定义锚点 {#custom-anchor}

例如下面实例：

```
# 使用自定义标题锚点 {#use-custom-anchor}
[跳转标题锚点](#use-custom-anchor) <!--将跳转到{#use-custom-anchor}标记的锚点-->

```

[点我将锚点到标题 Markdown 扩展](#markdown-extensions) <!-- 将用户锚点到 #markdown-extensions -->

## 链接

### 内部链接

内部链接将转换为单页导航的路由链接。此外，子目录下面的 index.md 都将转换为
`index.html`，并带有相应的 URL`/`

例如目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

假如现在处于 foo/one.md 文件中：

```md
[Home](/) <!--导航到根目录下的index.html，在一般的文档说明一般是跳转到首页-->
[foo](/foo/) <!--导航到foo目录下的index.html-->
[foo head](/foo/#head) <!--导航到foo目录下index文件一个标题锚点{#head}-->
[foo footer](./#footer) <!--导航到foo目录下index文件一个标题锚点{#footer}-->
[bar - three](../bar/three) <!-- 可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 可以添加 .md -->
[bar - four](../bar/four.html) <!-- 或者可以添加 .html -->
```

## 外部链接

外部链接带有`<a href="https://www.baidu.com" target="_blank" rel="noreferrer"></a>`

<a href="https://www.baidu.com" target="_blank" rel="noreferrer">跳转</a>

## 表格

### markdown 表格

- 第一行是表头，字体加粗；
- 表头和表体直接使用`-`隔开，数量不限；
- `:---`表示居左 `:---:`表示居中 `---:`表示居右；

**输入**

```md
|    Tables     |      Are      |  Cool |
| :-----------: | :-----------: | ----: |
|   col 3 is    | right-aligned | $1600 |
|   col 2 is    |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

|    Tables     |      Are      |  Cool |
| :-----------: | :-----------: | ----: |
|   col 3 is    | right-aligned | $1600 |
|   col 2 is    |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

### HTML 形式表格

**输入**

```HTML
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>12</td>
      <td>男</td>
    </tr>
  </tbody>
</table>
```

**输出**

<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>12</td>
      <td>男</td>
    </tr>
  </tbody>
</table>

## Emoji :tada:

**输入**

```
:tada: :100: :green_salad: :astronaut:
```

**输出**

:tada: :100: :green_salad: :astronaut:

这里可以找到[所有支持的 emoji 列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

## 目录表（TOC）

默认情况下，标题表（也就是目录表）只会展示`二级`和`三级`的标题

**输入**

```
[[toc]]
```

**输出**

[[toc]]

如果想修改，vitepress 提供了`markdown.toc`自定义配置，可以在 vitepress 配置文件进行配置

```
import { defineConfig } from 'vitepress'
export default defineConfig({
 markdown:{
   toc: {
      level: [1, 2, 3], // 显示标题1、标题2和标题3
      strict: true, // 严格模式，不允许非标题内容在标题下方
      slugify: (str) => encodeURIComponent(str.toLowerCase()), // 自定义slug生成方式
      format: (heading) => `${heading.title} - Level ${heading.level}`, // 自定义TOC项的格式
      customTOCProperties: {
        // 自定义TOC属性
        before: '[[toc]]', // 在Markdown中标记TOC位置的文本
        after: '[[/toc]]', // 结束TOC位置的文本
      },
    },
 }
})
```

## 自定义容器

自定义容器可以通过它们的类型、标题和内容定义

### 默认标题

**输入**

````md
::: info
信息信息情报
:::

::: tip Prerequisites

- Familiarity with the command line
- Install [Node.js](https://nodejs.org/) version 18.3 or higher
  :::

::: warning
警告警告警告！
:::

::: danger
危险危险危险！
:::

::: details
This is a details block
:::

<!--自定义标题-->

::: details 详情

```js
console.log("Hello, VitePress!");
```

:::
````

**输出**
::: info
信息信息情报
:::

::: tip Prerequisites

- Familiarity with the command line
- Install [Node.js](https://nodejs.org/) version 18.3 or higher
  :::

::: warning
警告警告警告！
:::

::: danger
危险危险危险！
:::

::: details
This is a details block
:::

::: details 详情

```js
console.log("Hello, VitePress!");
```

:::

### 自定义标题

此外，可以通过在站点配置中添加以下内容来全局设置自定义标题，如果不是用英语书写，这会很有帮助：

```ts
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  // ...
});
```

### raw

在 VitePress 中，::: raw 是一个用于包裹原始 Markdown 内容的语法，它告诉 VitePress 不要对这段内容进行编译，而是直接将其输出到生成的页面上。这在需要在文档中嵌入原生的 HTML 或 JavaScript 代码时非常有用。

**输入**

```md
::: raw

<div>
  <p>This is raw HTML content.</p>
</div>
:::
```

**输出**
::: raw

<div>
  <p>This is raw HTML content.</p>
</div>
:::

## Github 风格预警

<VTGroup>
<Test>

```sh
$ bun create vue@latest
```

</Test>
</VTGroup>

<span style="color:var(--vt-c-green);">✔</span>

**Result**

<div class="demo">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
