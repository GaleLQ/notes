const Layer = require('./layer');
const http = require('http');

module.exports = Route = class Route {
    constructor(path) {
        this.path = path;
        this.stack = [];
        this.methods = {};
    }

    _handles_method(method) {
        const name = method.toLowerCase();
        return Boolean(this.methods[name]);
    };

    dispatch(req, res, done) {
        const method = req.method.toLowerCase();
        let idx = 0;
        let { stack } = self;

        const next = err => {
            if (err && err === 'route') {
                return done();
            }

            if (err && err === 'router') {
                return done(err);
            }

            if (idx >= stack.length) {
                return done(err);
            }

            const layer = stack[idx++];
            if (method !== layer.method) {
                return next(err);
            }

            if (err) {
                layer.handle_error(err, req, res, next);
                return done(err);
            } else {
                layer.handle_request(req, res, next);
            }
        }

        next();
    };
}

http.METHODS.forEach(function (method) {
    method = method.toLowerCase();
    Route.prototype[method] = function (fn) {
        const layer = new Layer('/', fn);
        layer.method = method;

        this.methods[method] = true;
        this.stack.push(layer);

        return this;
    };
});