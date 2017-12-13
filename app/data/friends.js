// console.log("dog");
// initialize an empty array for holding the object:
var friendsMatchArr = [];


$("#formSubmit").click(function(events) {
  events.preventDefault();

// Create newUser data from user input
      var newUser = {
        nameInput: $("#nameInput").val().trim(),
        picInput: $("#picInput").val().trim(),
        surveyScores: [
          $("#questionOne").val(),
          $("#questionTwo").val(),
          $("#questionThree").val(),
          $("#questionFour").val(),
          $("#questionFive").val(),
          $("#questionSix").val(),
          $("#questionSeven").val(),
          $("#questionEight").val(),
          $("#questionNine").val(),
          $("#questionTen").val()
        ]
      };
      console.log("User Input: ", newUser);
      // push the newUser objects into an JSON array:
          friendsMatchArr.push(
            newUser
          );
          console.log(JSON.stringify(friendsMatchArr));
          // clear the values in the form fields:
          $("#nameInput").val(""),
          $("#picInput").val(""),
          $("#questionOne").val(""),
          $("#questionTwo").val(""),
          $("#questionThree").val(""),
          $("#questionFour").val(""),
          $("#questionFive").val(""),
          $("#questionSix").val(""),
          $("#questionSeven").val(""),
          $("#questionEight").val(""),
          $("#questionNine").val(""),
          $("#questionTen").val("")
  });



















// $("#formSubmit").click(function(events) {
//   events.preventDefault();
//   // console.log("cat");
//   var nameInput = $("#nameInput").val();
//   console.log("friend Name: " + nameInput);

//   var picInput = $("#picInput").val();
//   console.log("photo link: " + picInput);

//   var answerOne = $("#questionOne").val();
//   console.log("answer one: " + answerOne);

//   var answerTwo = $("#questionTwo").val();
//   console.log("answer Two: " + answerTwo);

//   var answerThree = $("#questionThree").val();
//   console.log("answer Three: " + answerThree);

//   var answerFour = $("#questionFour").val();
//   console.log("answer Four: " + answerFour);

//   var answerFive = $("#questionFive").val();
//   console.log("answer Five: " + answerFive);

//   var answerSix = $("#questionSix").val();
//   console.log("answer Six: " + answerSix);

//   var answerSeven = $("#questionSeven").val();
//   console.log("answer Seven: " + answerSeven);

//   var answerEight = $("#questionEight").val();
//   console.log("answer Eight: " + answerEight);

//   var answerNine = $("#questionNine").val();
//   console.log("answer Nine: " + answerNine);

//   var answerTen = $("#questionTen").val();
//   console.log("answer Ten: " + answerTen);
// });

