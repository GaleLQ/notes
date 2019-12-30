let fs = require('fs')
let EventEmitter = require('events')

class WriteStream extends EventEmitter {
	constructor (path, options) {
		super(path, options);
		this.path = path;
		this.flags = options.flags || 'w';
		this.mode = options.model || 0o666;
		this.start = options.start || 0;
		this.pos = this.start;
		this.encoding = options.encoding || 'utf8';
		this.autoClose = options.autoClose;
		this.highWaterMark = options.highWaterMark || 16 * 1024;
		
		this.buffers = [];  //缓冲区，实际代码是用链表实现的
		this.writing = false;
		this.length = 0;
		this.fd = null;
		this.open();
	}
	
	open () {
		fs.open(this.path, this.flags, this.mode, (err, fd) => {
			if (err) {
				if (this.autoClose) {
					this.destroy()
				}
				return this.emit('error', err)
			}
			this.fd = fd
			this.emit('open')
		})
	}
	
	write (chunk, encoding, cb) {
		chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, this.encoding)
		let len = chunk.length
		this.length += len
		let rest = this.length < this.highWaterMark
		
		if (this.writing) {
			this.buffers.push({
				chunk,
				encoding,
				cb
			})
		} else {
			this.writing = true
			this._write(chunk, encoding, () => this.clearBuffer())
		}
		return rest
	}
	
	clearBuffer () {
		let data = this.buffers.shift();
		if(data) {
			this._write(data.chunk, data.encoding, () => this.clearBuffer())
		}else {
			this.writing = false;
			this.emit('drain');
		}
	}
	
	_write (chunk, encoding, cb) {
		if (typeof this.fd !== 'number') {
			return this.once('open', () => {
				this._write(chunk, encoding, cb)
			})
		}
		fs.write(this.fd, chunk, 0, chunk.length, this.pos, (err, bytesWritten) => {
				if (err) {
					if (this.autoClose) {
						this.destroy()
						this.emit('error', err)
					}
				}
				this.pos += bytesWritten;
				this.length -= bytesWritten;
				cb && cb();
			}
		)
	}
	
	destroy () {
		fs.close(this.fd, () => {
			this.emit('close');
		})
	}
}