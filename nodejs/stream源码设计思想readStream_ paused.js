// todo 读取结束后会emit readable, read会拿到null
// 此文件emitReadable的结构有问题,带完善
const EventEmitter = require("events");
const fs = require("fs");

class ReadableStream extends EventEmitter {
    constructor(path, options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || "r";
        this.encoding = options.encoding || null;
        this.fd = options.fd || null;
        this.mode = options.mode || 0o666;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.highWaterMark = options.highWaterMark || 64 * 1024;

        this.reading = false;
        this.emitReadable = true;
        this.arr = [];
        this.len = 0;
        this.pos = this.start;

        this.open();

        this.on("newListener", type => {
            if (type === "readable") {
                this._read();
            }
        });
    }
}

function computeNewHighWaterMark(n) {
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
    return n;
}

module.exports = ReadableStream;

ReadableStream.prototype.open = function () {
    fs.open(this.path, this.flags, this.mode, (err, fd) => {
        if (err) {
            this.emit("error", err);
            if (this.autoClose) {
                this.destroy();
                return;
            }
        }
        this.fd = fd;
        this.emit("open");
    });
};

ReadableStream.prototype.detroy = function () {
    if (typeof this.fd === "number") {
        fs.close(fd, () => {
            this.emit("close");
        });
        return;
    }
    this.emit("close");
};

ReadableStream.prototype.read = function (n) {
    if (n > this.len) {
        this.highWaterMark = computeNewHighWaterMark(n);
        this.reading = true;
        this.emitReadable = true;
        this._read();
    }

    let buffer;
    if (n > 0 && n <= this.len) {
        buffer = Buffer.alloc(n);

        let current;
        let index = 0;
        let flag = true;
        while (flag && (current = this.arr.shift())) {
            for (let i = 0; i < current.length; i++) {
                buffer[index++] = current[i];
                if (index === n) {
                    flag = false;
                    let residue = current.slice(i + 1);
                    this.len -= n;
                    if (residue.length) {
                        this.arr.unshift(residue);
                    }

                    break;
                }
            }
        }
    }
    if (this.len === 0) {
        this.emitReadable = true;
    }
    if (this.len < this.highWaterMark) {
        if (!this.reading) {
            this.reading = true;
            this.emitReadable = true;

            this._read();
        }
    }
    if (buffer) {
        buffer = this.encoding ? buffer.toString(this.encoding) : buffer;
    }

    return buffer || null;
};

ReadableStream.prototype._read = function () {
    if (typeof this.fd !== "number") {
        return this.once("open", () => this._read());
    }
    let buffer = Buffer.alloc(this.highWaterMark);

    fs.read(
        this.fd,
        buffer,
        0,
        this.highWaterMark,
        this.pos,
        (err, bytesRead) => {
            this.arr.push(buffer);
            this.len += bytesRead;
            this.pos += bytesRead;
            this.reading = false;
            if (this.emitReadable && this.len > 0) {
                this.emitReadable = false;

                this.emit("readable");
                if (bytesRead.length === 0) {
                    this.emit("end");
                }
            }
        }
    );
};