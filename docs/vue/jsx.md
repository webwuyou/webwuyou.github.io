> 大多数时候，我们都是SFC单文件组件的形式来编写组件，但是使用渲染函数更接近编译器，性能也会更好

#### JSX基本语法

单行语句可以直接return，多行语句需要使用()包裹

```jsx
render(){
    return <div>hello jsx</div>
}
```

#### 插值绑定

绑定数据，在单文件组件中，使用双大括号的形式来邦定文本数据{{message}}，在jsx中使用大括号就行了。

```jsx
render(){
    return <p>hello {this.message}</p>
}
```

#### 样式绑定
在jsx中，可以直接使用class="className"来指定样式类名，可以直接只用style="xxx"来指定内联样式
```jsx
render(){
    return (<ul class="wrap">
        <li>vue</li>
        <li style="color:red">js</li>
        <li>html</li>
    </ul>)
}
```

#### 属性绑定
在单文件组件中属性绑定通常是:id="{id}"这样的形式，在jsx中属性绑定不需要使用:和引号，并且可以通过对象解构的形式绑定多个属性
```jsx
render(){
    const params={
        disabled:true,
        id:'user',
        min:10
    }
    return(
        <div>
            <input type="text" placeholder={this.placeholderText} {...{attrs:params}} />
        </div>
    )
}
```

#### 遍历数据
在jsx中没有v-for和v-if等指令，这些需要使用原生js的方式来实现
```jsx
// 类似于v-if v-else
{isShow?<List/>:<Empty/>}

// 类似于v-for
{this.list.map(item=>{
    <div>{item.title}</div>
})}

```

#### 事件绑定
事件绑定需要在事件名前面加**on**前缀，原生事件添加**nativeOn**前缀
```jsx
render(){
    return (
        // 对应@click
        <button onclick={this.handleClick}>普通事件</button>
        // 对应于@click.native
        <el-button nativeOnClick={this.handleClick}>原生事件</el-button>
        <button onClick={e=>this.handleClick(this.id)}>事件传参</button>
    )    
}
```
**注意：如果要给事件处理函数传递参数，需要使用箭头函数，否则接收到的会是事件对象的event属性**


