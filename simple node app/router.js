function route(handle, pathname, res, formData) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res, formData);
    } else {
        console.log("No handler for " + pathname);
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("Error 404 page not found");
        res.end();
    }
}

exports.route = route;