const http = require('http');
const url = require('url');

function startServer(route, handle) {
    function onRequest(req, res){
        let formData = "";
        let pathname = url.parse(req.url).pathname;
        console.log("Request received for " + pathname);
        req.setEncoding('utf8');
        req.addListener('data', function(chunk){
            formData += chunk;
        });
        req.addListener("end", function(){
            route(handle, pathname, res, formData);
        })
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started on port 8888");
}

exports.startServer = startServer;