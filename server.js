const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/website1.html", function(request, response) {
  response.sendFile(__dirname + "/views/website1.html");
});
app.get("/website2.html", function(request, response) {
  response.sendFile(__dirname + "/views/website2.html");
});
app.get("/website3.html", function(request, response) {
  response.sendFile(__dirname + "/views/website3.html");
});
app.get("/website4.html", function(request, response) {
  response.sendFile(__dirname + "/views/website4.html");
});
app.get("/website5.html", function(request, response) {
  response.sendFile(__dirname + "/views/website5.html");
});
app.get("/website6.html", function(request, response) {
  response.sendFile(__dirname + "/views/website6.html");
});
app.get("/website7.html", function(request, response) {
  response.sendFile(__dirname + "/views/website7.html");
});
app.get("/vidcode.html", function(request, response) {
  response.sendFile(__dirname + "/views/vidcode.html");
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
