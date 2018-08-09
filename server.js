const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const passRoutes = require("./routes/passRoutes");
const cors = require("cors");
const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy;
const flash = require("connect-flash");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const socket = require('socket.io');


const PORT = process.env.PORT || 3001;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/equiprent");

require('./config/passport')(passport); // pass passport for configuration 
// need this for Passport configuration, to connect to mongo DB

// Define middleware here
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      console.log("user is loggin in!");
      return next();

  // if they aren't redirect them to the home page
  console.log("user is not logged in")
  res.redirect('/');
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// enable cors
app.use(cors()); // whitelist the front end?
// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(morgan('dev')); // log requests to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(session({ secret: "iloveyouhoneybear" })); // session secret? no clue it seems you can just put whatever there
app.use(passport.initialize());
app.use(passport.session()); // for persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Add routes
app.use(routes);
// app.use(passRoutes;
// process the signup form
// the following post routes are triggered by form actions
app.post('/api/signup', passport.authenticate('local-signup', {
  successRedirect : '/login', // redirect to the secure profile section
  failureRedirect : '/signup', // redirect back to the signup page if there is an error
  failureFlash : "something went wrong" // allow flash messages
}));

app.post('/api/login', passport.authenticate('local-login', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/login', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}));

// LOGOUT ==============================
// for some reason this route only works as /logout
// when routed as /api/logout heroku gave an error *shrug*
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/checklogout');
});

app.get('/checklogout', function(req, res) {// thanks to es6 i could literally send an entire page of html through here... 
  res.send(`
    <p>logout successful!</p>
    <p><a href="/">Click here to go home.</a></p>
  `);
})

app.get('/account', isLoggedIn, function(req, res) {
  // res.render('profile.ejs', {
  //     user : req.user
  // });
  res.redirect('/accountUser');
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// app.get('/TESTTHIS/', (req, res) => {
//   res.send('hello world');
// });

// Start the API server
const server = app.listen(PORT, function() {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});

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