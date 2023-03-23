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
原理：
  根据  cssmodule 命名 和 定义选择器 名字 以及 内容生成随机hash值 生成独一无二的类
+ 定义 某个 组件的 css module文件
  命名推荐： 组件名.module.css
  例如
    组件名   
        app  app.module.css
        HomePage   home-page.module.css


app.module.css
```css
.red {
  color: red;
}
```

App.js 组件中
```js
import React from "react";

/**
 * 使用es module 语法直接引入css样式
 * 注意：不要忘记后缀
 */
// import './learn-className.css'

/**
 * 引入的时候需要设置一个变量接收刚定义的css module模块
 * 并且引入的时候注意写完路径learn-className.module.css
 * Styles是一个对象，里面存放的就是我们定义的样式
 */
import Styles from "./learn-className.module.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* 
          使用Styles.xxx 拿到对应的className然后给
          className进行赋值
          注意：必须使用Styles也就说引入的这个对象给className进行
          赋值，否则脚手架将无法根据规则自动生成模块化cssName
         */}
        <div className={Styles.red}>红色</div>
      </div>
    );
  }
}
```
## css in js 
styled-components

+ 安装
```js
npm i styled-components -S
```

# 组件数据挂载 -props
## props 校验
使用 prop-types 插件 做 props类型校验


# props类型校验
```js
npm i props-types -S
```

定义props类型
```js
import PropsTypes from 'prop-types'
class MyComponent extends Component{

}
// or
const MyComponent = () => {

}

MyComponent.propTypes = {
  // 一下是常用类型校验
  a: PropTypes.array,
  b: PropTypes.bigint,
  c: PropTypes.bool,
  d: PropTypes.func,
  e: PropTypes.number,
  f: PropTypes.object,
  g: PropTypes.string,
  i: PropTypes.symbol,

  // react组件 <组件/> 使用时 直接  {props.j} 即可渲染 组件内容
  j: PropTypes.element,

  // react组件 Todo  没加标签 <props.k/> 渲染组件内容
  k: PropTypes.elementType,

  // 必须是 Message的实例
  o: PropTypes.instanceOf(Message),

  // 必须是 给定值中的一个
  p: PropTypes.oneOf(['News', 'Photos']),

  // 值得类型 必须是 给定类型中的一个
  q: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 固定 类型的数组
  r: PropTypes.arrayOf(PropTypes.number),

  // 对象属性值 必须是 固定类型
  s: PropTypes.objectOf(PropTypes.number),

  // 描述的对象的结构， 非严格模式 不要求其他 的属性 （可以有其他属性）
  t: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),

  // 描述对象结构 严格模式 不能出现其他属性
  u: PropTypes.exact({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),
  // 链式调用
  v: PropTypes.func.isRequired,
};
```
## props的默认值
直接定义 组件的 defaultProps属性 即可
```js
Todo.defaultProps = {
  a: 'aprop的默认值'
}
```
## props的children
类似于 vue中的插槽
组件标签 嵌套 的 jsx 可以在 组件内部 props.children属性拿到并渲染
+ 嵌入内容
```js
<Todo>
  <div>
    xx
    xx
    xx
  </div>
</Todo>
```
+ 内部渲染
```js
const Todo = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
```
# class组件相关
对比 class组件 函数式组件 没有自己内部的状态  没有 生命周期

## 组件的state属性   类比 （vue组件的data）
管理组件内部的状态
直接定义 实例的state属性即可 管理组件内部的状态

+ 定义state属性存储 class组件的内部数据
```js
export default class App extends Component {
  // 直接定义
  state = {
    msg: '我是自己内部的数据',
    isBeauty: true
  }
  // 或在 constructor中定义
  constructor(){
    super();
    this.state = {
      msg: '我是自己内部的数据',
      isBeauty: true,
      arr: [1,2,3,4]
    }
  };
}
```
+ 获取state
render或者 其他方法
```js
this.state.状态名 // 访问
```
+ setState修改state
react不是 mvvm， 类组件中 必须调用  setState方法 修改数据
```js
    // 参数是对象  对象中修改 state  可以批量修改
    this.setState({
      msg: '值改变了',
      isBeauty: !this.state.isBeauty
    })
    // 参数是函数 在函数返回值中修改
    this.setState(() => {
      return {
        msg: '值改变了',
        isBeauty: !this.state.isBeauty
      }
    })
```
+ setState异步处理
  setState修改数据和 视图更新是异步，无法 立即获取修改后最新的数据和dom
setState设计了 第二个参数 回调，等待数据修改完成，且视图刷新完成后触发

```js
    this.setState({
      msg: '值改变了',
      isBeauty: !this.state.isBeauty
    }, () => {
      // 等待数据修改完成，且视图刷新完成后触发
    })
```
# react事件绑定

## react合成事件
on普通事件 首字母大写
onClick onMouseover。。。
## 事件绑定语法
```js
<button onClick={函数}></button>
```
注意：
  不能加括号
+ class组件 事件函数 挂载
  - 行内直接定义箭头函数
  ```js
     <button onClick = {
          () => {
            this.setState({
              msg: '值修改了'
            })
          }
        }>修改msg</button>
  ```
  注意：
    不推荐使用，js业务嵌入 到视图中 代码混乱
  - 事件 定义在原型上 行内通过bind改变this指向
  ```js
     <button onClick = {
          this.clickBtn.bind(this)
      }>修改msg</button>

      clickBtn(){
        console.log(this);
        this.setState({
          msg: '值修改了'
        })
      }
  ```
  注意：
    render会在每一次 更新时都触发，频繁 触发 bind 返回新函数；浪费内存和性能
  
  - 定义在原型，在constructor 给实例定义同名方法，值为 原型上 同名方法，改变this指向
  ```js
    class App extends Component {
      constructor(){
        super();
        this.state = {
          msg: 'hello react'
        }
        this.clickBtn = this.clickBtn.bind(this)
      };
      render() {
        return (
          <div>

            <button onClick={
              this.clickBtn
            }>修改msg</button>
            {this.state.msg}
          </div>
        )
      };
      clickBtn() {
        console.log(this);
        this.setState({
          msg: '值修改了'
        })
      }
    }

  ```
  - 直接在实例上定义方法  key= () => {}
  ```jsx
    export default class App extends Component {
            state = {
            msg: 'hello react'
          }

        render() {
          return (
            <div>
              <button onClick={
                this.clickBtn
              }>修改msg</button>
              {this.state.msg}
            </div>
          )
        };
        clickBtn = () => {
          console.log(this);
          this.setState({
            msg: '值修改了'
          })
        }
      }
  ```
  

## 事件对象
react合成事件中，事件函数的第一个参数就是事件对象
```js
// 取消冒泡 e.stopPropagation()
// 阻止默认 e.preventDefault()
// 获取事件源 e.target
```

## 事件传参
原理：
  行内定义箭头函数 充当事件函数， 方法 在箭头函数中调用即可
```js
class App extends Component {
  state = {
    arr: [1,2,3,4]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.arr.map(el=> (
              <li key={el} onClick={
                {/* 行内定义箭头函数充当事件函数 */}
                (e) => {
                  this.clickLi(el, e)
                }
              }>
                {el}
              </li>
            ))
          }
          
        </ul>
      </div>
    )
  };
  clickLi = (el, e) => {
    console.log(el, e);
  }
}
```

# react 常用数据渲染
+ 条件渲染
```js
        {
          this.state.isShow
          &&
          <div className="box"></div>
        }

        {
          this.state.isShow
          ?
          <div className="box"/>
          :
          <div className="box2"/>
        }
```
+ 列表循环
使用 原生map方法
```js
        <ul>
          {
            this.state.arr.map((el, index) => {
              return (
                <li key={el}>
                 {el}
                </li>
              )
            })
          }
        </ul>
```
注意：
  循环每个元素要加 独一无二key属性，提高 fiber算法 虚拟dom比较效率
  嵌套循环，变量命名问题（作用域问题）

+ 渲染富文本
```js
<div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
```
# 容器组件 Fragment

jsx规定 任何一个jsx 都必须 包裹在 闭合标签， 组件 嵌套，造成 层级过深问题， 怎么解决？

解决方案
1 引入 Fragment 容器组件
```js
import { Fragment } from 'react'
<Fragment>
  jsx内容
</Fragment>
```
2 使用 空标签
```js
<>
  这里写jsx内容
</>
```
# ref 转发子组件或者 dom实例
```js
import React, { Component, Fragment, createRef } from 'react'
import TodoChild from './TodoChild'

export default class Todo extends Component {
  constructor(){
    super();
    // 定义容器 存储 实例
    this.btnRef = createRef();
    this.childRef = createRef();
  };
  render() {
    return (
      <Fragment>
        {/* 挂载实例 */}
        <button ref={this.btnRef}>按钮</button>
        <TodoChild ref={this.childRef}/>
      </Fragment>
    )
  };
  componentDidMount(){
    // 合适的 时机获取
    console.log(this.btnRef.current);
    console.log(this.childRef.current);
  }
}

```

# react组件通信
+ 父向子 props
+ 子向父 也是通过props
在父组件中定义 方法， 通过props将这个方法传递给子组件， 子组件 直接调用 方法 传递参数即可
+ 兄弟组件通信
pubsub-js
原理是 发布订阅模式

# 表单值的绑定
+ 单向  将 状态（数据） 绑定给表单的初始值
defaultValue
defaultChecked 
```js
<input type="text" defaultValue={this.state.msg}/>
<input type="checkbox" defaultChecked={this.state.isChecked} />
```
+ 值双向绑定
```js
        <input type="checkbox" checked={this.state.isChecked} onChange={
          this.handleChecked
        }/>

       inputMsg = (e) => {
        console.log(e.target.value);
        this.setState({
          msg: e.target.value
        })
      }; 

      // 绑定checked属性
      <input type="checkbox" checked={this.state.isChecked} onChange={
          this.handleChecked
        }/>

      handleChecked = (e) => {
        this.setState({
          isChecked: e.target.checked
        })
      }
```

# 单向数据流
状态提升 

逻辑组件 UI组件（傻瓜组件）

受控组件 非受控组件 
页面 受react的状态控制 （react数据驱动 实现业务和视图更新）

