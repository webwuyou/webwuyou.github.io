# typeorm内容关系
在写sql语句时经常需要连表查询，这时就会涉及到数据表之间的内容关系了，常见的内容关系有一对多、多对一、多对多等。

## 一对一
一对一是指数据表中的一条数据仅关联另外一个表的一条数据。比如用户表和用户档案表，一个用户只有一份档案。
一对一关系通过@OneToOne装饰器来装饰，第一个参数表示关联的是哪个实体，第二个参数表示关联的实体中对应的字段（外键），@JoinColumn只能用在一个实体中
```ts
// user.entity.ts
@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @OneToOne(type=>InfoEntity,info=>info.user)
    @JoinColumn()
    // 默认生成的是infoId，也可以通过@JoinColumn({name:'info_id'})指定生成的名称
    info:InfoEntity;
}
```
```ts
// info.entity.ts
@Entity('info')
export class InfoEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    idcard:string;
     
    @Column()
    gender: string;

    @OneToOne(type=>UserEntity,user=>user.info)
}
```
在一对一关系中，外键可以在任意一方。
以上两个实体生成的数据表如下：
```
|                       user表                                         |
+--------+--------------+-----+-----------------+----------------------+
| Field  | Type         | Key | Default         | Extra                |
+--------+--------------+-----+-----------------+----------------------+
| id     | int(11)      | PRI | NULL            | auto_increment       |
| name   | varchar(255) |     | NULL            |                      |
| infoId | int(11)      | MUL | NULL            |                      |
+--------+--------------+-----+-----------------+----------------------+

|                       info表                                         |
+--------+--------------+-----+-----------------+----------------------+
| Field  | Type         | Key | Default         | Extra                |
+--------+--------------+-----+-----------------+----------------------+
| id     | int(11)      | PRI | NULL            | auto_increment       |
| idcard | varchar(255) |     | NULL            |                      |
| gender | varchar(255) |     | NULL            |                      |
+--------+--------------+-----+-----------------+----------------------+
```

## 一对多
一对多是指在A表中的一条记录，可以关联B表中的一条或者多条记录。比如：一个文章分类可以对应多篇文章，反过来一篇文章只能属于一个分类，这种文章表和分类表的关系就是一对多的关系。
一对多使用@OneToMany()装饰器，多对一使用@ManyToOne()装饰器，并且两个是成对出现的。
```ts
// category.entity.ts
import {PostEntity} from "../../post/post.entity"
@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @OneToMany(type=>PostEntity,post=>post.category)
    posts:PostEntity[]
}
```
在category实体中，使用@OneToMany()指定关联到Post实体中的category
```ts
// post.entity.ts
import {CategoryEntity} from "../../category/category.entity"
@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    title:string;

    @ManyToOne(type=>CategoryEntity,category=>category.posts)
    @JoinColumn({name:'category_id'})
    category:CategoryEntity
}
```
在Post实体中使用@ManyToOne()关联大屏category实体，并且在一对多的关系中，@JoinColumn肯定是在Many的一方，也只能在Many的一方。

以上两个实体生成的数据表如下：
```
|                       category表                                         |
+--------+--------------+-----+-----------------+----------------------+
| Field  | Type         | Key | Default         | Extra                |
+--------+--------------+-----+-----------------+----------------------+
| id     | int(11)      | PRI | NULL            | auto_increment       |
| name   | varchar(255) |     | NULL            |                      |
+--------+--------------+-----+-----------------+----------------------+

|                       post表                                         |
+-------------+--------------+-----+------------+----------------------+
| Field       | Type         | Key | Default    | Extra                |
+-------------+--------------+-----+------------+----------------------+
| id          | int(11)      | PRI | NULL       | auto_increment       |
| title       | varchar(50)  |     | NULL       |                      |
| category_id | int(11)      |     | NULL       |                      |
+-------------+--------------+-----+------------+----------------------+
```

## 多对多
在多对多关系中，表A中的记录可能与表B中的一个或者多个记录相关联。例如，文章和标签之间，一篇文章可以有多个标签，一个标签可以对应多篇文章。
```ts
// post.entity.ts
import {TagEntity} from "../../tag/tag.entity"
@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    title:string;

    @ManyToMany(type=>tagEntity.posts,tag=>tag.posts)
    @JoinTable({
        name:'post_tag',//中间表的名称
        joinColumns:[{name:'posy_id'}],
        inverseJoinColumns:[{name:'tag_id'}]
    })
    tags:TagEntity[]
}
```

```ts
// tag.entity.ts
import {PostEntity} from "../../post/post.entity"
@Entity('tag')
export class TagEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    name:string;

    @ManyToMany(type=>PostEntity,post=>post.tags)
    posts:PostEntity[]
}
```
多对多使用@ManyToMany()来装饰，并且两方都要使用，通过JoinTable生成一个中间表，通过配置joinColumns和inverseJoinColumns来自定义中间表的列名称。

上面的实体关系会生成以下表：

```
|                       post表                                         |
+-------------+--------------+-----+------------+----------------------+
| Field       | Type         | Key | Default    | Extra                |
+-------------+--------------+-----+------------+----------------------+
| id          | int(11)      | PRI | NULL       | auto_increment       |
| title       | varchar(50)  |     | NULL       |                      |
| category_id | int(11)      |     | NULL       |                      |
+-------------+--------------+-----+------------+----------------------+

|                       tag表                                          |
+-------------+--------------+-----+------------+----------------------+
| Field       | Type         | Key | Default    | Extra                |
+-------------+--------------+-----+------------+----------------------+
| id          | int(11)      | PRI | NULL       | auto_increment       |
| name        | varchar(50)  |     | NULL       |                      |
| category_id | int(11)      |     | NULL       |                      |
+-------------+--------------+-----+------------+----------------------+

|                       post_tag表                                     |
+-------------+--------------+-----+------------+----------------------+
| Field       | Type         | Key | Default    | Extra                |
+-------------+--------------+-----+------------+----------------------+
| tag_id      | int(11)      | PRI | NULL       | auto_increment       |
| post_id     | int(11)      |     | NULL       |                      |
+-------------+--------------+-----+------------+----------------------+
```