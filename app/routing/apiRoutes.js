// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require('../data/friends.js');

// console.log(friends)
module.exports = function (app) {


  // A GET route with the url `/api/friends`. returns friends
  app.get("/api/friends", function (req, res) {
    // this routes the initial friends (what is in the friends.js) array to the api/friends path:
    // console.log("This is the response: ", res);
    res.json(friends);
  });

  // POST route for /api/friends that takes in the new user data and responds with the most compatible match.
  app.post("/api/friends", function (req, res) {

    // console.log("This is the request: ", req);
    // store the req object in a var called UserInput:

    // setting up an object to hold our current best match that we are updating as we loop through
    // the friends array of objects

    var bestMatches = {
      name: "",
      photo: "",
      friendDiff: 1000
    }
    var userInput = req.body;
    console.log("this is user input stored in req.body: ", userInput);
    var userScores = userInput.surveyScores;
    console.log("these are the inputed user's scores stored in userInput.surveyScores: ", userScores);
    var totalDifference;
  
      // we need to loop through each friends in data/friends.js object
      // then for each friend we have to loop through their survey scores,
      // comparing the value at every index in the server survey scores array with
      // with the value at every index of the user survey scores array.

      for (var i = 0; i < friends.length; i ++ ){
        var currentFriend = friends[i];
        
        console.log(currentFriend.nameInput);

        currentFriendScoresArr = currentFriend.surveyScores;
        
        for (var j = 0; j < userScores.length; j++){
          totalDifference = 0;
          var currentUserScore = userScores[j];
          var currentFriendScore = currentFriendScoresArr[j];
          // getting the difference between each score value in friendscore 
          // and comparing it to userscore values and adding to total difference 
          totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
          console.log(totalDifference);
        }

        if(totalDifference <= bestMatches.friendDiff){
          // update the best match to be the friend that has smallest difference
          bestMatches.name = currentFriend.nameInput;
          bestMatches.photo = currentFriend.picInput;
          bestMatches.friendDiff = totalDifference;
        }
         console.log("current best match is: ", bestMatches.name )
      }


      // Then send bestMatches to the client.
      console.log(bestMatches);
      // friends.push(bestMatches)
      res.json(bestMatches);
      // pushing the user input to the api friends list
      friends.push(userInput);
  });
};


