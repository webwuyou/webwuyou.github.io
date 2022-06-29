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