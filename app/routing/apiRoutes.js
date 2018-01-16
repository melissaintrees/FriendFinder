// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require('../data/friends.js');

// console.log(friends)
module.exports = function(app) {


  // A GET route with the url `/api/friends`. returns friends
  app.get("/api/friends", function(req, res) {
    // this routes the initial friends (what is in the friends.js) array to the api/friends path:
    // console.log("This is the response: ", res);
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    // console.log("This is the request: ", req);
    // store the req object in a var called UserInput:
    var userInput = req.body;
    console.log("this is in the userInput var: ", userInput);
    var foundUser;
    // i want to push the new UserInput to the friends Object and it works!:
    friends.push(userInput);

  });

};

// old code dude

    // for (var i = 0; i < friends.length; i ++){
    //     if (UserName === friends[i].surveyScores) {
    //       foundUser = friends[i];
    //       break
    //     }
    //   };
    //   if (foundUser) {
    //     return res.json(foundUser);
    // } else {
    //   return res.json({error: "sorry, this user is not in the system"})
    // }