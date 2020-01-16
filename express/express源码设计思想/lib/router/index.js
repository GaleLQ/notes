const http = require('http');
const Layer = require('./layer');
const Route = require('./route');

class Router {
    constructor() {
        this.stack = [];
    }

    handle(req, res, done) {
        const { method } = req;
        let idx = 0;
        const { stack } = this;
        let removed = '';
        let slashAdded = false;

        const parentUrl = req.baseUrl || '';
        req.baseUrl = parentUrl;
        req.orginalUrl = req.orginalUrl || req.url;


        function next(err) {
            const layerError = err === 'route' ? null : err;

            if (slashAdded) {
                req.url = '';
                slashAdded = false;
            }

            if (removed.length !== 0) {
                req.baseUrl = parentUrl;
                req.url = removed + req.url;
                removed = '';
            }

            if (layerError === 'router') {
                return done(null);
            }

            if (idx >= stack.length) {
                return done(layerError);
            }

            // const path = require('url').parse(req.url).pathname;
            const layer = stack[idx++];
            if (layer.match(req.url)) {
                if (!layer.route) {
                    removed = layer.path;
                    req.url = req.url.substr(removed.length);
                    if (req.url === '') {
                        req.url = '/' + req.url;
                        slashAdded = true;
                    }

                    req.baseUrl = parentUrl + removed;
                    if (layerError) {
                        layer.handle_error(layerError, req, res, next);
                    } else {
                        layer.handle_request(req, res, next);
                    }
                } else if (layer.route._handles_method(method)) {
                    return layer.handle_request(req, res, next);
                }
            } else {
                layer.handle_error(layerError, req, res, next);
            }
        }
        next();
    };

    route(path) {
        const route = new Route(path);
        const layer = new Layer(path, route.dispatch.bind(route));
        layer.route = route;
        this.stack.push(layer);
        return route;
    };

    use(fn) {
        const path = '/';
        if (typeof fn !== 'function') {
            path = fn;
            fn = arguments[1];
        }
        const layer = new Layer(path, fn);
        layer.route = undefined;
        this.stack.push(layer);
        return this;
    }
}

http.METHODS.forEach(function (method) {
    method = method.toLowerCase();
    Router.prototype[method] = function (path, fn) {
        var route = this.route(path);
        route[method].call(route, fn);
        return this;
    };
});

module.exports = function () {
    function router(req, res, next) {
        router.handle(req, res, next);
    }

    Object.setPrototypeOf(router, new Router());
    return router;
};