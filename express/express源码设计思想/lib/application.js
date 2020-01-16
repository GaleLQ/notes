const http = require('http');
const Router = require('./router/index');
const request = require('./request');
const response = require('./response');

module.exports = Application = class {

    constructor() {
        this._router = new Router();
    }

    listen(port, cb) {
        const self = this;
        const server = http.createServer(function (req, res) {
            self.handle(req, res);
        });

        return server.listen(...arguments);
    }

    handle(req, res) {
        Object.setPrototypeOf(req, request);
        Object.setPrototypeOf(res, response);
        const done = function finalhandler(err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            const msg = err ? `404: ${err}` : `Cannot  ${req.method} ${req.url};`
            res.end(msg);
        };

        const router = this._router;
        if (router) {
            router.handle(req, res, done);
        } else {
            done();
        }
    };

    use(fn) {
        let path = '/';
        if (typeof fn !== 'function') {
            path = fn;
            fn = arguments[1];
        }
        this._router.use(path, fn);
        return this;
    }
}

http.METHODS.forEach(function (method) {
    method = method.toLowerCase();
    Application.prototype[method] = function (path, fn) {
        this._router[method].apply(this._router, arguments);
        return this;
    };
});