// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ROUTING
// ===============================================================================
// tells router which path goes to which URL, and put it in a module.exports 
// so we can then use it in the server

module.exports = function(app) {

    // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // HTML routes that send the user to the Public Pages
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // // catch-all
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // or 
  // app.use(function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

};

