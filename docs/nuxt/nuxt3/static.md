# nuxt3中静态资源的使用
nuxt3项目中的静态资源（图片、css等）可以放在项目根目录下的public和assets这两个文件夹中，那么public和assets有什么区别呢？

## public中的文件不会被打包工具处理（原样输出）

在页面中使用public中的文件时，直接使用/就会映射到public目录
```
├─assets
|   └avatar.jpg
├─public
|   └avatar.jpg
```
```vue
<!-- about.vue -->
<img src="/img/avatar.jpg" />
```
## assets中的文件在打包时会被打包工具处理
比如小图片会被打包成base64减少请求数量，在页面使用assets中的文件时时，通过~/assets引入

```
<!-- about.vue -->
<img src="~/assets/avatar.jpg" />
```