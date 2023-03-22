# react
用户构架用户界面的 js库
特点：
  声明式开发 数据驱动
  组件化
  跨平台
  jsx
# cra
安装
```js
npm i create-react-app -g
```
创建项目
```js
create-react-app 项目名
```

# 主要依赖于 三个包

react react核心语法包 （jsx解析等等）
react-dom 将 react组件 编译成虚拟dom，渲染真实dom，渲染到 index.html的 root位置处 类比 vue 中的应用实例  app 
react-scripts 隐藏 webpack配置

# react中jsx 
xml in js 
自定义标签 一开始用于前后端传输数据的
```xml
<student>
  <name>小明</name>
  <age>18</age>
  <gender>男</gender>
</student>
```


fiber算法 解析 虚拟dom

jsx概念解析：
  react也是数据驱动库， 数据驱动 设计 虚拟dom，虚拟dom 编写过于繁琐，比如 vue就设计了 sfc 单文件组件，让我们开发者 直接在template写标签，vue自动编译成虚拟dom

  react 允许 开发者 直接在 js中写标签， 自动转换成 虚拟dom对象

注意注意注意：
  react 的 js中标签 是对象对象对象对象


# jsx语法
1 在jsx  内容都会按照 字符串解析，任何想要在jsx中 写 js 表达式语法 一定要加 {} 包括属性
2 任何一个jsx 都要 包裹在一个闭合标签中
3 注释 {/*这是jsx的注释*/}
4 任何一个jsx标签 都会 编译成 虚拟dom对象， 标签属性也会编译成 对象属性，某些属性 和 js关键字 保留关键字冲突，  jsx 重名映射新的属性 必须 class --> className  for -->htmlFor

# 在vscode中 开启 emmet

# react 组件
react要求 组件首字母必须大写
## 函数式组件
本质就是一个函数返回jsx

```jsx
import React from 'react'

export default function App(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
    </div>
  )
}

```
使用时
```jsx
<App title="主标题" subTitle="这是副标题"/>
// 相当于 调用函数
```

## class组件
```jsx
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>这是class组件</h2>
        {this.props.title}
        <hr />
        {this.props.subTitle}
      </div>
    )
  }
}

```

使用class组件
```jsx
<App title="主标题" subTitle="这是副标题"/>
  // 相当于 new App 返回组件 实例 并 立即通过 实例调用render函数
```

# jsx原理
React下面有一个方法  createElement 生成虚拟dom (类似于vue中 h渲染函数)

react会自动 解析  jsx结构 会自动 转换成 利用 createElement方法 生成的虚拟dom
```js
React.createElement('div', {className:'box', id: 'wrap'}, [
  React.createElement('p', {className: 'op'}, ['这是p']),
  React.createElement('p', {}, ['这是span']),
  '这是文本内容'
])
```

# 组件的样式定义
## 内联
内联style的值 是对象  css属性 直接作为 对象属性即可
好处：
  1 值 可以写表达式
  2 省略单位

## 移入外部的 样式表
+ css
+ 使用sass
  - 安装sass
  ```js
    npm i sass -D
  ```
  - 直接引入外部的sass文件


注意：
  不管是移入 外部的 css和 sass 或scss 样式都会造成全局污染， 并向vue单文件组件一样有scoped 作用域

注意：
  引入外部的样式， 给每个组件 定义 独一无二 容器的选择器，通过子后代选择器定义样式

一下两种都可以解决css污染问题


## 使用css module  react自己约定语法 给 css 加作用域

## css in js 