const http = require('http');

const req = Object.create(http.IncomingMessage.prototype);

module.exports = req;


