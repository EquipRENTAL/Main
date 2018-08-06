const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/routes");
const cors = require('cors');
const app = express();
const socket = require('socket.io');
const session = require("express-session");
const config = require("./config/main");
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

const router = require("./routes/routes");

app.use(session({ secret: "thisisasecret" }));

// Define middleware here
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Setting up basic middleware for all Express requests
 // Log requests to API using morgan
app.use(logger('dev'));


//Code from example that enables CORS from client-side

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// enable cors
app.use(cors());

// Add routes, both API and view
app.use(routes);

// add routes, for authentication
app.use(router)

// Ronnie's Code from his server.js file
// app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/equiprent");

app.get('/TESTTHIS/', (req, res) => {
  res.send('hello world');
});

// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// redefine socket.io and the server with "io"
const io = socket(server);

// create an empty array to push messages into.  
const messageLog = [];

// initlization of socket
io.on('connection', (socket) => {
  console.log("Inside io.on.connection - returning socket.id: ", socket.id);

  socket.emit('RECEIVE_MESSAGELOG', messageLog);

  socket.on('SEND_MESSAGE', function(data){
      messageLog.push(data);
      io.emit('RECEIVE_MESSAGE', data);
  })
});





/*  Ronnie's server.js to run the chatbox and the Confirmation page. 
// start the server.js
const server = app.listen(PORT, function() {
  console.log("server.js for App.js is running on port " + PORT);
})
*/

