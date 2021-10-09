function home(){
    console.log("Executing 'home' handler");
}

function review(){
    console.log("Executing 'review' handler");
}

exports.home = home;
exports.review = review;