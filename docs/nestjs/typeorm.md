# 在nest中使用typeorm

> 之前在使用koa2的时候，都是手动去新建mysql的数据表和相关字段。使用orm框架可以自动帮我们完成数据库表和字段的创建工作，省时省力。typeOrm是 一款比较流行的orm框架，在nestjs中自带了对typeOrm的支持。

#### 安装
```
pnpm add @nestjs/typeorm typeorm mysql
```

## 配置
在跟模块中引入TypeOrmModule，安全起见，配置内容可以放到.env环境变量文件中
```ts
TypeOrmrModule.forRoot({
    host:'172.168.0.1',
    port:'3306',
    root:'root',
    password:'123456',
    database:'test'
})
```
## 创建实体文件
<!-- 实体文件对应数据库的表名，会自动创建一个user表，字段为下面指定的 -->
```ts
// User.entity.ts
@Entry('user')//自定义user表，不传参默认会以文件名作为表名

@PrimaryGeneratedColumn()//定义主键id，类型number会定义为mysql中的int
id:number;

@Column()//定义username字段，类型string会定义为mysql中的varchar
username:string

@Column({type:'varchar',length:10})//指定varchar类型和字段长度
password:string

@Column('varchar',{length:20})
email:string
```