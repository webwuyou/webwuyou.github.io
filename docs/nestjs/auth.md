---
sidebar: auto
---

# nest用户鉴权
用户鉴权主要分为给用户下发token和校验token这两步，并且采用比较流行的jwt形式

## 生成token
**1. nestjs集成了jwt，我们需要安装对应的依赖**
```
pnpm add @nestjs/jwt
```
**2. 在module中导入JwtModule模块**
```ts
// Auth.Module.ts
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports:[JwtModule.register({
        secret:'secret',
        signOptions:{
            expiresIn:'1h'//300 '7d' token有效期 300秒 1小时 7天
        }
    })],
    controllers:[AuthController],
    provides:[AuthService]
})
export class AuthModule{}
```
**3. 在服务中注入JwtService服务**
```ts
// Auth.Service.ts
import {JwtService} from "@nestjs/jwt"
@Injectable()
export class AuthService{
    constructor(private readonly jwtService:JwtService){}
}
```

**4.在服务中使用jwtService的sign方法生成token**
```ts
// Auth.service.ts
async login({name,password}){
    // 1、判断用户是否存在（调用用户服务中的方法啊）
    const user=this.userService.findByName(name)
    if(!user){
        thorw new NotFoundException('用户不存在')
    }
    // 2、判断用户密码是否正确
    if(password!==user.password){
        throw new BadRequestException('用户密码错误');
    }
    // 3、生成token
    const payload={
        id:user.id,
        name
    }
    const token=await=this.jwtService.sign(payload)
    // 4、返回用户信息和token
    return {
        ...payload,token
    }
}
```

## 验证token

:::tip passport
passport中提供了很多验证用户身份的方法，这些方法在passport中称为策略
:::

**1.nestjs中集成了passport，需要安装对应的依赖包和对应的策略passport-jwt**
```shell
# 安装依赖包
pnpm add @nestjs/passport passport passport-jwt
# 安装对应的类型文件
pnpm add -D @types/passport @types/passport-jwt
```
**2.在module中导入PassportModule模块**
```ts
// Auth.Module.ts
@Module({
    imports:[
        JwtModule.register({
      secret: 'hello',
      signOptions: { expiresIn: '1h' },//设置过期时间
    }),
    PassportModule.register({
        defaultStrategy:'jwt',//设置默认策略为jwt
    })
    ]
})
```
**3.添加策略文件**
为了方便拓展，我们建立一个stratagies文件夹用户存放所有的策略文件,然后新建jwt的策略文件jwt.stratagy.ts
```ts
// jwt.stratagy.ts
@Injectable()
export class JwtStratagy extends PassportStrategy(Stratage){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),//从Header中获取BearerToken
            ignoreExpiration: false,
            secretOrKey: 'hello',//跟生成token是的密钥保持一致
        })
    }
}
```
