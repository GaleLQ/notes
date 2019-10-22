// fs方法路径默认process.cwd()
// import { promises as fs } from 'fs' 大量支持promise

// fs.readFile(path[, options], callback)
// fs.writeFile(file, data[, options], callback)
// fs.unlink(path, callback)
// fs.appendFile(file, data[, options], callback)
// fs.access(path[, mode], callback)
// fs.readdir(path[, options], callback)
// fs.stat(path, callback) Stats.isFile()
// fs.rename(oldPath, newPath, callback)
// fs.unlink(path, callback)
// fs.open(filename,flags,[mode],callback);
// fs.read(fd, buffer, offset, length, position, callback((err, bytesRead, buffer)))
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// fs.close(fd,[callback]);
// fs.existsSync(path) 同步版避免风格不一致废弃

// fs.access(path[, mode], callback) 检查文件的可访问性,windows的acl判断不出
// fs.appendFile(path, data[, options], callback) 将数据追加到文件,不存在则创建
// fs.chmod(path, mode, callback) 更改文件的权限
// fs.copyFile(src, dest[, flags], callback) 拷贝文件,覆盖原则
// fs.createReadStream(path[, options]) 流
// fs.createWriteStream(path[, options])
// fs.existsSync(path) 同步版避免err风格不一致废弃
// fs.mkdir(path[, options], callback) 创建目录
// fs.mkdtemp(prefix[, options], callback) 以prefix+6位随机创建唯一的临时目录,注意分隔符
// fs.readdir(path[, options], callback) 返回读取目录的数组
// fs.readFile(path[, options], callback) 读
// fs.writeFile(file, data[, options], callback)
// fs.rename(oldPath, newPath, callback) 重命名,覆盖原则
// fs.rmdir(path[, options], callback) 删除文件夹, 12.10.0起支持recursive
// fs.stat(path[, options], callback) 查看文件的信息
// fs.unlink(path, callback) 删除文件
// fs.watch(filename[, options][, listener]) 监听文件
