# nuxt3中的数据请求
nuxt3中的数据请求和nuxt2中有非常大的区别，建议是直接使用框架提供的$fetch方法来请求数据，而不是之前的 @nuxt/http and @nuxtjs/axios 请求库。

而且为了方便使用，框架提供了useFetch、useLazyFetch、useAsyncData、useLazyAsyncData来处理应用程序中的数据获取。

## useAsyncData
```
const res=await useAsyncData('getList',()=>{
    $fetch('http://localhost:8080/api/article/list')
},{
    params:{page:1,limit:10}
})
```

## useFetch
useFetch相当于简化版的useAsyncData,会自动生成请求的key
```
const res=await useFetch('http://localhost:8080/api/article/list',{
    params:{page:1,limit:10}
})
```

