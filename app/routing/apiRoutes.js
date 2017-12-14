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
    res.json(friends);
  });

  // A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    // res.sendFile(path.join(__dirname, "../data/friends.js"));

    //take the result of the user's survey and parse it.
    // res.json(friends);
    // newUser = req.body;
    // nameInput = newUser.nameInput;
    // picInput = newUser.picInput;
    // surveyScores = newUser.surveyScores;
    // console.log(newUser);
// push the survey results to the json object

    // friends.push(newUser);
  });


};