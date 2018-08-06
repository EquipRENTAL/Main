// Items routes 
const router = require("express").Router();
const itemsController = require("../controllers/itemsController.js");

// authentication routes 
const AuthenticationController = require('../controllers/authenticationController');  
// const express = require('express');
const passportService = require('../config/passport');
const passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false }); 


module.exports = function(app) {
  const apiRoutes = express.Router();
  const authRoutes = express.Router();

 // Set auth routes as subgroup/middleware to apiRoutes
router.use('/auth', authRoutes);
router.post('/register', AuthenticationController.register);
router.post('/login', requireLogin, AuthenticationController.login);

// Set url for API group routes
app.use('/api', apiRoutes);
}



// Matches with "/api/items"
router.route("/api/")
  .get(itemsController.findAll)
  .post(itemsController.create);

// Matches with "/api/items/:id"
router.route("/api/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

module.exports = router;











// // 
// const AuthenticationController = require('./controllers/authentication'),  
//       UserController = require('./controllers/user'),
//       ChatController = require('./controllers/chat'),
//       express = require('express'),
//       passportService = require('./config/passport'),
//       passport = require('passport');
