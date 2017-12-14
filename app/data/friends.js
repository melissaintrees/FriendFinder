
// make a friends array of dummy data to match with user inputs

var friends = [
  {
    "nameInput": "Griselda",
    "picInput":"http://lorempixel.com/400/200/people",
    "surveyScores": [5, 2, 4, 3, 1, 5, 5, 1, 4, 5]
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