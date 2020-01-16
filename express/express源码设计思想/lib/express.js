const Application = require('./application');

module.exports = function createApplication() {
    const app = new Application();
    return app;
}