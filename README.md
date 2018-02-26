# Friend Finder - Node & Express Servers

## UCF Coding Bootcamp Week 13 Project

---

### Overview

In this activity, I was asked to build a compatibility-based "FriendFinder" application -- kind of like a "dating app". I decided to give mine a Game of Thrones theme, and my app has two features. It will let the user submit a form of 10 questions and let them know which Game of Thrones character they best match up to. It also gives them an option of a another survey to match up to other fans. If they fill out the fan based survey the app will store their name and image link for furture searches by other users. This full-stack site takes in results of the users' surveys, then compares their answers with those from other users(or characters). The app will then display the name and picture of the user(or character) with the best overall match.

I used Express to handle routing. Check out the app running on heroku here: https://warm-scrubland-27867.herokuapp.com/

## Installation Instructions

1. Fork this repo and clone the forked repo to your computer. You will need node.js installed on your system.
2. At the command line navigate to the apps folder and run `npm install`, this will install the npm dependencies from the package.json file.
2. Then run `node server.js` the console should log the port number the app will be on (currently 3121).
4. Go to your browser and type http://localhost:3121/ into the address bar to bring up the app.

---

### Instructions

1. The home page will give you the option to take a survey to match up to a Game of Thrones character or take a different survey to match up with other GoT fans.

![Home-Page](/app/public/assets/images/screenshot_home.jpg)

2. The surveys are a list of 10 statements that the user clicks a dropdown to answer how much they agree with said statement . 1) Strongly disagree, 2) Slightly disagree, 3) Neither agree or disagree, 4) Agree, 5) Strongly agree.

![Question](/app/public/assets/images/screenshot_question.jpg)

3. Once all ten questions are answered the user can hit the submit button at the bottom of the form....

![Submit](/app/public/assets/images/screenshot_submit.jpg)

Then a modal pops up with the users best match. The app compares the users answers with pre-filled character answer arrays to find the character with the smallest difference.

![CharModal](/app/public/assets/images/screenshot_charmodal.jpg)

4. The Fan Match Survey will require the user to enter their name and a link to an image of themselves that will upon submission be added to the API Friends List for future searches by other users.

![FanSurvey](/app/public/assets/images/screenshot_fansurvey.jpg)

Submitting on the Fan Survey will pop up a modal of the Fan on the API friends list that best matches the users answers.

![FanModal](/app/public/assets/images/screenshot_fanmodal.jpg)

5. There are nav buttons and the bottom of each page. _API Characters List_ will bring up the json list of all stored characters. _API Friends List_ will bring up the json of all Fans that previously submitted their info. _Repo_ will take the user to my Github repository hosting this project. _Home_ will return the user to the home.html page.

![Nav](/app/public/assets/images/screenshot_nav.jpg)



- - -
## Known Issues & TODO Items

  * Add additional fields for user information.

  * Find ways to DRY up code better. App works, but there is some repetition that could likely be streamlined.


- - -

## Copyright

Jason O'Brien (C) 2017.
