const EventEmitter = require("events");
const fs = require("fs");

class ReadStream extends EventEmitter {
    constructor(path, options = {}) {
        super();
        this.path = path;
        this.flags = options.flags || "r";
        this.encoding = options.encoding || null;
        this.fd = options.fd || null;
        this.mode = options.mode || 0o666;
        this.autoClose = options.autoClose || true;
        this.start = options.start || 0;
        this.end = options.end || null;
        this.highWaterMark = options.highWaterMark || 64 * 1024;
        this.flowing = false;
        this.buffer = Buffer.alloc(this.highWaterMark);
        this.pos = this.start;
        this.open();
        this.on("newListener", type => {
            if (type === "data") {
                this.flowing = true;
                this.read();
            }
        });
    }
    open() {
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

    detroy() {
        if (typeof this.fd === "number") {
            fs.close(this.fd, () => {
                this.emit("close");
            });
            return;
        }
        this.emit("close");
    }
    read() {
        if (typeof this.fd !== "number") {
            return this.once("open", () => this.read());
        }
        let howMuchToRead = this.end
            ? Math.min(this.highWaterMark, this.end - this.pos + 1)
            : this.highWaterMark;

        fs.read(
            this.fd,
            this.buffer,
            0,
            howMuchToRead,
            this.pos,
            (err, bytesRead) => {
                if (bytesRead > 0) {
                    this.pos += bytesRead;
                    let realBuf = this.buffer.slice(0, bytesRead);
                    realBuf = this.encoding
                        ? realBuf.toString(this.encoding)
                        : realBuf;
                    this.emit("data", realBuf);
                    if (this.flowing) {
                        this.read();
                    }
                } else {
                    this.isEnd = true;
                    this.emit("end");
                    this.detroy();
                }
            }
        );
    };

    read() {
        if (typeof this.fd !== "number") {
            return this.once("open", () => this.read());
        }
        let howMuchToRead = this.end
            ? Math.min(this.highWaterMark, this.end - this.pos + 1)
            : this.highWaterMark;

        fs.read(
            this.fd,
            this.buffer,
            0,
            howMuchToRead,
            this.pos,
            (err, bytesRead) => {
                if (bytesRead > 0) {
                    this.pos += bytesRead;
                    let realBuf = this.buffer.slice(0, bytesRead);
                    realBuf = this.encoding
                        ? realBuf.toString(this.encoding)
                        : realBuf;
                    this.emit("data", realBuf);
                    if (this.flowing) {
                        this.read();
                    }
                } else {
                    this.isEnd = true;
                    this.emit("end");
                    this.detroy();
                }
            }
        );
    };
    pause() {
        this.flowing = false;
    };

    resume() {
        this.flowing = true;
        if (!this.isEnd) this.read();
    };
}