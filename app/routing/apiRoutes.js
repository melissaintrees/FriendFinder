// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require('../data/friends.js');

// console.log(friends)
module.exports = function(app) {


  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    // this routes the initial friends (what is in the friends.js) array to the api/friends path:
    console.log("This is the response: ", res);
    res.json(friends);

  });

  app.post("/api/getfriendname", function(req, res) {

    // req.body = {nameInput: userEntry}
    // get the request from the friends object.nameInput back and assign it to the User Name var?
    var UserName = req.body.surveyScores
    var foundUser;

    for (var i = 0; i < friends.length; i ++){
        if (UserName === friends[i].surveyScores) {
          foundUser = friends[i];
          break
        }
      };
      if (foundUser) {
        return res.json(foundUser);
    } else {
      return res.json({error: "sorry, this user is not in the system"})
    }
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
    console.log("This is the request from the survey: ", req.body)
    // req.body(friends);
  });


};