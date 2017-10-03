// Require Twitter NPM and keys for twitter
var twitter = require('twitter');
var keys = require('./keys.js');

module.exports = function(app) {

    // GET route to pull tweets
    app.get("/api/tweets/", function(req, res) {
        var client = new twitter ({
            consumer_key: keys.twitterKeys.consumer_key,
            consumer_secret: keys.twitterKeys.consumer_secret,
            access_token_key: keys.twitterKeys.access_token_key,
            access_token_secret: keys.twitterKeys.access_token_secret
        })
        var params = {screen_name: "LewisHamilton"};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (error) {
                console.log(error);
            } else {
                output = "";
                for (var i=0; i<20; i++) {
                    if (tweets[i]) {
                        var currentTweetData = tweets[i].created_at + " " + tweets[i].text + "\r\n";
                        output = output + currentTweetData;
                    }
                }
                res.send(response);
                console.log(output + 'hi');
            }
        });
    });
};