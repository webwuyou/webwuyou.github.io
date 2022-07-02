## 基本语法
es6中的class其实只是一种语法糖，本质上和之前借助原型来实现类的功能是类似的，只是写法上更加通俗易懂
```
<!-- 定义一个class类 -->
class User{

}
<!-- 使用new关键词来实例化对象 -->
let u=new User()
console.log(u)
```

## 构造函数
在class中需要初始化的数据一般放在constructor构造函数中，并且构造函数会在实例化时自动执行
```
class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
const u=new User('张三',18)
console.log(u.name)//张三
```

## class中的实例方法
**class中的方法结尾不需要加逗号或者分号，注意和对象的区别**
```
class User{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    say(){
        console.log(`hello ${this.name}`)
    }
    study(){
        console.log('study class')
    }
}
const u=new User('张三',18)
u.say()//hello 张三
```
