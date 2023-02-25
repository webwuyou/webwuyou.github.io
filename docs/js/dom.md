## DOM定义
DOM全称document Object Model，表示文档对象模型

## DOM节点
DOM中主要有三种节点，元素节点、属性节点、文本节点(换行符也属于文本节点)
节点常用属性：nodeName:节点名称(大写,DIV,SPAN)，nodeType节点类型（1、元素节点、2、属性节点、3、文本节点），nodeValue节点值

## 获取节点
```js
document.getElementById('id')
document.getElementsByClassName('btn')
document.getElementsByTagName('div')

// 新增
document.querySelector('.btn')//获取第一个
document.querySelectorAll('.btn')//获取所有
```

## 父节点
```js
// parentNode获取当前元素的直接父节点
node.parentNode
```

## 子节点
```js
node.childNodes
```
childNodes获取的是所有子节点，包括文本节点，如果只需要元素节点，需要通过nodeType===1来过滤

```
node.children
```
children获取所有的**子元素节点**，不包括文本节点，这是一个非标准的属性，但是各大浏览器都支持，推荐使用

## 兄弟节点
```js
// 下一个节点包含文本节点
node.nextSibling
// 下一个元素节点
node.nextElementSibling

// 上一个节点包含文本节点
node.previousSibling
// 上一个元素节点
node.previousElementSibling
```

## 首尾节点
```js
// 第一个子节点，包含文本节点
node.firstChild
// 第一个元素节点
node.firstElementChild

// 最后一个子节点，包含文本节点
node.lastChild
// 最后一个元素节点
node.lastElementChild
```
## 创建节点
```js
//创建一个div元素
document.createElement('div')
```
## 新增节点
```js
var ul=document.querySelector('ul')
var li=document.createElement('li')
li.innerText='我是li标签'
// appendChild向后插入，类似数组的push方法
ul.appendChild(li)
// insertBefore向前插入,第二个参数表示要插入的位置，为null时将向最后插入
ul.insertBefore(li,ul.childNodes[1])
```
## 删除节点
```js
// parentNode.removeChild(child)
var ul=document.querySelector('ul')
var li=document.getElementsByTagName('li')
ul.removeChild(li[1])
```
## 替换节点
```js
// 用newChild来替换oldChild，如果oldChild已经存在，会先从原来的位置删除
parentNode.replaceChild(newChild,oldChild)
```