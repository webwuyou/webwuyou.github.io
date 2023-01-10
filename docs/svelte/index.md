# 什么是Sevelte
sevelte和vue、react之类的框架的核心区别是，sevelte会在打包时将框架编译成原生代码，而不是在运行时再去解析框架代码，因此sevelte项目打包后的体积会更小，因为不会包含框架本身，sevelte仅仅是作为项目的开发依赖。
还有一点就是，可以将sevelte组件打包成跨框架的包，提供给vue、react项目使用，

## 文本渲染
使用{name}来渲染变量name，注意不是{{}}
```
<h1>hello {name}</h1>
<script>
    let name="world"
</script>
```
## html渲染
使用@html来渲染html内容
```
<p>{@html str}</p>
<script>
let str=`<h1>hello world</h1>`
</script>
```


## 属性绑定
```
<img src={src}/>
<script>
    let src="https://www.baidu.com/img/flexible/logo/pc/result.png"
</script>
```
**当属性名和变量名相同时可以简写为 <img {src} />**

## 事件绑定
通过on:click来绑定事件
```
<button on:click={handleClick}>{num}</button>
<script>
    let num=1;
    function handleClick(){
        num++
    }
</script>
```

## 计算属性
sevelte提供了反应式声明$:
通过$:double这样的形式来定义,$:后为新变量的名称
```
<p>{num} double is {doubleNum}</p>
<script>
    let num=1
    $:doubleNum=num*2
</script>
```

使用$:声明反应式的语，当count改变时，会自动打印信息
```
$: console.log(`the count is ${count}`);
```

## 多属性传递

如果需要给组件传递一个对象的多个属性，可以使用{...obj}展开运算符的形式，组件中通过$$props直接获取，类似vue中的v-bind和$attrs的用法
```
<script>
	import Info from './Info.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/>
<Info {...pkg}/>
```

## 条件渲染
```
<script>
<!-- if -->
    {#if user.token}
        <button on:click={logout}>退出</button>
    {/if}
    {#if !user.token}
        <button on:click={login}>登录</button>
    </if>
<!-- if else  -->
    {#if user.token}
        <button on:click={logout}>退出</button>
    {/if}
    {:else}
        <button on:click={login}>登录</button>
    {/if}
    <!-- if else if -->
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
    
</script>
```

## 循环渲染
```
<ul>
    {#each list as item,index}
        <li>{item.name}--{index+1}</li>
    {/each}
</ul>
```
**第二个参数为下标index**，通过(key)来指定唯一key
```
<ul>
    {#each list as item (item.id)}
        <li>{item.name}</li>
    {/each}
</ul>
```
## 事件修饰符
在事件名后通过|符号来使用事件修饰符

```
<button on:click|once={handleClick}>提交</button>
```
常用的事件修饰符


|修饰符|功能|
|:---|:---|
|preventDefault|调用event.preventDefault()，禁止默认事件|
|stop|调用event.stopPropagation()，阻止事件冒泡|
|capture|在捕获阶段调用|
|once|只会执行一次|
|self|仅当event.target为本身时才执行|
|passive|优化了对 touch/wheel 事件的滚动表现(Svelte 会在合适的地方自动添加滚动条)。|

**修饰符可以组合使用 on:click|once|capture={handleClick}**