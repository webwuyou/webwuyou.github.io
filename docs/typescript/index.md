#### 编译环境
**全局安装**
```shell
npm i -g typescript
# 查看ts版本
tsc -v
# Version 4.7.4
```
**项目安装**
```
npm init -y
npm i typescript -D
```

### 基本类型
#### 字符串

使用string来声明字符串类型
```ts
let str:string="hello"
```
#### 数字
ts中不区分整数和浮点数，使用number来声明数字类型
```ts
let num:number=18
```
#### 布尔值
使用boolean来声明布尔类型
```ts
let flag:boolean=true
let flag:boolean=1>2
```

#### 数组
```ts
// 定义一个number类型的数组,数组元素必须是number类型
let arr:number[]=[1,2,3]
arr.push(4)
arr.push('hello')//类型错误
```
#### 元组
上面定义number类型的数组，数组中的每个元素就必须都为数组，有的时候我们需要数组的第一个元素为number，第二个元素为string，第三个元素为boolean，这个时候就可以使用元组来明确指定数组每个元素的类型
```ts
let arr:[string,number,boolean]=['张三',18,true]
```
