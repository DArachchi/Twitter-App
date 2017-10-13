// Require Twitter NPM and keys for twitter
var twitter = require('twitter');

var client = new twitter ({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

module.exports = function(app) {

    // GET route to pull tweets for specified user
    app.get("/api/tweets/:username", function(req, res) {
        var params = {screen_name: req.params.username, count: 100};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.log(error);
            } else {
                res.send(tweets);
            }
        });
    });
};