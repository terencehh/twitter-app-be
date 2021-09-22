const Twitter = require('twitter');
require('dotenv/config');

const apiKey = process.env.apikey;
const apiSecretKey = process.env.apikeysecret;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.accesstokensecret;

const client = new Twitter({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});

const getAllLists = () => (req, res) => {
  var username = String(req.params.twitterId);
  client.get('lists/list', {screen_name: username}, function(error, tweets, response) {
        if (!error) {
          res.json(tweets);
        } else {
          res.status(400).json(error);
        }
      });
}

const getAllListMembers = () => (req, res) => {
  var listId = String(req.params.listId);
  client.get('lists/members', {list_id: listId, count: 50}, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
          res.json(tweets);
        } else {
          console.log(error)
          res.status(400).json(error);
        }
      });
}

const getRecentFollowers = () => (req, res) => {
  var id = req.params.twitterId;
  client.get('friends/list', {user_id: id, count: 50}, function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    } else {
      console.log(error)
      res.status(400).json(error);
    }
  });
}

module.exports = {
  getAllLists,
  getAllListMembers,
  getRecentFollowers,
};
