const querystring = require('querystring');

function home(res) {
    console.log("Executing 'home' handler");
    let htmlFile = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/review" method="post">' +
        '<textarea name="text" rows="20" cols="20"></textarea>' +
        '<input type="submit" value="Submit review" />' +
        '</form>' +
        '</body>' +
        '</html>';
    res.writeHead(200, {"Content-type": "text/html"});
    res.write(htmlFile);
    res.end();
}

function review(res, formData) {
    console.log("Executing 'review' handler");
    res.writeHead(200, "Content-type: text/plain");
    res.write("Your review is-\n" + querystring.parse(formData).text);
    res.end();
}

exports.home = home;
exports.review = review;