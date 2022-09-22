# 安装docker

## image镜像

```shell
# 查看本地安装的镜像列表
docker images

# 下载centos镜像
docker pull centos

```

## container容器

有了镜像以后，可以基于镜像运行容器

```shell
# 查看正在运行的容器
docker ps
# 查看所有容器
docker ps --all

# 删除容器 容器id或者name
docker rm  60cc32129411

# 创建容器时指定名称
docker run --name myName centos

# 查看某个容器的日志
docker logs myName

# 停止某个容器
docker stop myName

# 启动某个容器
docker start myName

# 重启某个容器
docker restart myName
```

#### 带交互的容器
直接使用docker run myName后，容器就退出了，需要加上--interactive --tty，简写-i -t ，这样就能创建容器，并进入命令行
```
docker run -i -t centos
```

#### 在后台运行的容器 --detach 简写-d
```
docker run --detach centos ping webwuyou.com
```

## 创建容器

#### 1.手动创建(不推荐)
```shell
docker run -i -t centos

# 在centos中添加nodejs下载源
curl  --silent --location https://rpm.nodesource.com/setup_lts.x |  bash -

# 使用yum安装nodejs
yum install nodejs -y

# 将当前的容器提交为镜像

```

#### 2.使用dockerfile创建镜像
