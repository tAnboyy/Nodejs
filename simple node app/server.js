const http = require('http');
const url = require('url');


function startServer(route, handle) {
    function onRequest(req, res){
        let pathname = url.parse(req.url).pathname;
        console.log("Request received");
        route(handle, pathname);
        res.writeHead(200, {"Content": "text/plain"});
        res.write("Hello from the application");
        res.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started on port 8888");
}

exports.startServer = startServer;