// docker info 查看docker详情

// 镜像
// docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签] 拉取镜像
// docker push image 发布镜像
// docker run -it --rm node:latest bash 运行, i交互式操作，t终端，rm退出删除容器， bash交互式的shell, -p 4000:80,--name 名字,-d 后台运行
// docker image ls 已下载镜像
// docker image rm node:latest 删除镜像
// docker logs container-name 查看容器日志
// docker ps 显示正在运行的容器
// docker search image 检索镜像
// docker exec -it container-name bash 进入容器
// docker diff container-name 查看容器改动
// docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]] 提交修改的容器为镜像(不推荐)
// docker container ls 查看启动的容器(-a所有)，类似docker ps
// docker container stop container-name 暂停容器
// docker build -t . 根据当前dockerfile构建镜像
// docker tag image-name  username/respository:tag 给镜像加tag