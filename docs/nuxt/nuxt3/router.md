# nuxt3中路由的改变
> nuxt3正式版刚刚发布了，但是用法和api跟nuxt2有很多的不同，包括nuxt3 rc版本中很多用法在正式版中也已经发生了改变，但是官网文档没有及时的更新，导致之前使用过nuxt旧版本的项目在升级后不能正常运行。

## 约定式路由
nuxt3会自动将根目录下的pages中的文件注册为路由，index.vue映射为/，文件名映射为同名path。首先需要在根目录下新建一个pages目录，然后新建一个about.vue的页面，重新启动nuxt服务（新建页面需要重启），就可以通过/about来访问about页面了，这点和nuxt2保持一致。

## 动态路由
在详情页面，一般都是需要通过id来生成动态路由，比如在/pages/news目录下，新建一个[id].vue的文件，就可以通过/news/1来访问id为1的详情页面了（**nuxt2中是新建_id.vue文件**）。

**如果在文件名或者文件夹名称里面包含了方括号，它们将被转换为动态路由参数。**

在详情页面，就可以通过route.params.id在获取id参数了
```vue
const route=useRoute()
const id=route.params.id
```

## 嵌套路由
当创建的文件名和文件夹名相同时，会自动创建嵌套路由，然后在父组件中使用NuxtChild展示子组件的内容
```
比如下面目录结构：
-| pages/
---| parent/
------| child.vue
---| parent.vue
```
## 路由中间件

### 全局中间件
Nuxt3提供了路由中间件的概念，你可以在整个应用使用它，目的是在导航到某一个页面之前，执行一些代码，所以可以用路由中间件实现路由拦截的功能。
在根目录创建一个middleware文件夹，然后新建一个default.global.ts文件。其中.global表示这是一个全局中间件，也就是在每次跳转时都会执行。
```
export default defineNuxtRouteMiddleware((to,from)={
    console.log("要去那个页面:"+to.path)
  console.log("来自那个页面:"+from.path)
  if(to.path==='/admin'){
        // 停止导航
        abortNavigation()
        return navigateTo('/')
    }
})
```

### 局部中间件
在middleware中新建中间件时不加global就是局部中间件了
```ts
// customer.ts
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('局部中间件')
})
```
然后在需要使用中间件的页面通过definePageMeta引入中间件
```vue
<!-- about.vue -->
definePageMeta({
    middleware:['customer'],
    <!-- 或者middleware:'customer' -->
})
```