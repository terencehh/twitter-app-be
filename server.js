// Express.js for server-side routing
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT;

// todo - deploy server to heroku later on
// https://protected-scrubland-83638.herokuapp.com/

const twitter = require("./controllers/twitter");

const app = express();
// allow cross origin resource sharing
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is working!");
});

//Twitter API  --> GET Request --> Success/Fail
app.get("/collections/:twitterId", twitter.getAllLists());

//Twitter API  --> GET Request --> Success/Fail
app.get("/members/:listId", twitter.getAllListMembers());

//Twitter API  --> GET Request --> Success/Fail
app.get("/follower-recent-follows/:twitterId", twitter.getRecentFollowers());


app.listen(PORT || 3001, () => {
  console.log(`Server Successfully Started on Port ${PORT}`);
});

