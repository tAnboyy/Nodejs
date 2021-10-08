const server = require('./server');
const router = require('./router');
server.startServer(router.route);