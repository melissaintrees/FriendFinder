
// make a friends array of dummy data to match with user inputs

var friends = [
  {
    "nameInput": "Griselda",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [5, 2, 4, 3, 1, 5, 5, 1, 4, 5]
  },
  {
    "nameInput": "Don",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [2, 1, 1, 1, 1, 1, 1, 1, 3, 3]
  },
  {
    "nameInput": "George",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [1, 2, 2, 2, 1, 3, 3, 5, 3, 5]
  },
  {
    "nameInput": "Hazelnut",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [2, 1, 1, 5, 5, 5, 4, 3, 1, 1]
  },
  {
    "nameInput": "Bean",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [1, 2, 3, 4, 5, 4, 5, 3, 2, 1]
  },
  {
    "nameInput": "Americao",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [1, 1, 1, 1, 2, 3, 4, 3, 2, 5]
  }
];


// $("#formSubmit").click(function(events) {
//   events.preventDefault();

// // Create newUser data from user input
//       var newUser = {
//         nameInput: $("#nameInput").val().trim(),
//         picInput: $("#picInput").val().trim(),
//         surveyScores: [
//           $("#questionOne").val(),
//           $("#questionTwo").val(),
//           $("#questionThree").val(),
//           $("#questionFour").val(),
//           $("#questionFive").val(),
//           $("#questionSix").val(),
//           $("#questionSeven").val(),
//           $("#questionEight").val(),
//           $("#questionNine").val(),
//           $("#questionTen").val()
//         ]
//       };
//       console.log("User Input: ", newUser);
//       // push the newUser objects into an JSON array:
//           friendsMatchArr.push(
//             newUser
//           );
//           console.log(JSON.stringify(friendsMatchArr));

//           // clear the values in the form fields:
//           $("#nameInput").val(""),
//           $("#picInput").val(""),
//           $("#questionOne").val(""),
//           $("#questionTwo").val(""),
//           $("#questionThree").val(""),
//           $("#questionFour").val(""),
//           $("#questionFive").val(""),
//           $("#questionSix").val(""),
//           $("#questionSeven").val(""),
//           $("#questionEight").val(""),
//           $("#questionNine").val(""),
//           $("#questionTen").val("")
//   });


module.exports = friends;