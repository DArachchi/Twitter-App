// Require Twitter NPM and keys for twitter
var twitter = require('twitter');
var keys = require('../../keys.js');

var client = new twitter ({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

module.exports = function(app) {

    // GET route to pull tweets for specified user
    app.get("/api/tweets/", function(req, res) {
        var params = {
                        screen_name: 'LewisHamilton',
                        count: 5
                    };

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.log(error);
            } else {
                res.send(tweets);
            }
        });
    });
};