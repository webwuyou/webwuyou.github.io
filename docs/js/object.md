---
sidebar: auto
---

## 使用工厂函数生成对象
```js
function user(name){
    return {
        name,
        show(){
            console.log(this.name)
        }
    }
}
let u1=user('张三')
u1.show()//张三
let u2=user('李四')
u2.show()//李四
```

## 对象属性特征

### 查看属性特征
Object.getOwnPropertyDescriptor(obj,key)查看对象某个属性特征，Object.getOwnPropertyDescriptors(obj)查看对象所有属性特征
```js
let obj={
    name:'张三',
    age:19
}
console.log(Object.getOwnPropertyDescriptor(obj,'age'))
// {
//     configurable: true，是否可配置
//     enumerable: true，属性是否可枚举（能否被for in ，keys()遍历）
//     value: 19,属性值
//     writable: true，是否可修改属性值
// }
```
#### 属性特征描述符
|描述符|说明|默认值|
|-|-|-|
|value|对象属性值|undefined|
|writable|对象属性是否可修改，是可写的额还是只读的|true|
|enumerable|对象属性是否可枚举（能通过for in循环，或者Object.keys()读取）|true|
|configurable|属性属性能否使用delete删除，能否修改属性特征，或能否修改访问器属性|true|
#### 修改属性特征
```js
// 修改单个属性特征
Object.defineProperty(obj,'sex',{
    writable:true,
    enumerable:false,
    value:'男',
    configurable:false
})

// 修改多个属性特征
Object.defineProperties(obj,{
    name:{
        writable:false,
        enumerable:true,
        value:'李四',
        configurable:true
    },
    age:{
        writable:false,
        enumerable:false,
        value:'30',
        configurable:false
    }
})
```
**需要注意的是，如果原来的属性值不存在，就相当于新增属性了**