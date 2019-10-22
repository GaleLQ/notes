// 开辟的是堆外内存,c++层分配,node管理
// 创建时大小已确定
// 8位二进制存储,超出丢弃
// global.Buffer === require('buffer').Buffer
// slab分配机制
// 8kb为界限区分大对象还是小对象

// Buffer.from()
// Buffer.alloc() 填入0
// Buffer.allocUnsafe() 小于4kb从内部分配,所以释放慢
// Buffer.allocUnsafeSlow() 不从内存分配,所以可能slow
// buffer.toString('utf8', 0, 2)
// buffer.toJSON()
// buffer.slice() 指向同一块内存
// buffer.copy(target[, targetStart[, sourceStart[, sourceEnd]]]) 会产生截断现象
// buffer1.equals(buffer2)
// buffer1.compare(buffer2) 0, 1, -1比较. Buffer.compare(buf1, buf2)