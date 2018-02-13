/*jslint node: true */
/*jslint es6 */
"use strict";

/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware

// const logger = require('morgan'); // REST Logger


/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////////
let app = express();

/////////////////////////////////////////////// /* Express Middleware */ //////////////////////////////////////////////////////////
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static / React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

////////////////////////////////////////////// /* Mongoose Configurations*/ //////////////////////////////////////////////////////////
const mongoose = require('mongoose'); // MongoDB ORM
mongoose.Promise = global.Promise; // Set up promises with mongoose
const mongooseConnection = mongoose.connection;
const db = require("./models"); // Sequelize Models
const mongoURI = process.env.MONGODB_URI || "mongodb://test:test@ds123718.mlab.com:23718/heroku_0g1bl4gg"

// Connect to the Mongo DB  Use this after Project 3 Completion. mongodb://heroku_fq360rd6:1cbk0mc9u31mqeutipesfj0ur2@ds229458.mlab.com:29458/heroku_fq360rd6
mongoose.connect(mongoURI);

mongooseConnection.on("error", console.error.bind(console, "connection error:"));

mongooseConnection.once("open", function() {
  console.log("Sucessfully Connected to Mongo DB !"); // If Connection is successful, Console.log(Message)
});


/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////////
// Authenication Routes //
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

/////////////////////////////////////////////// /* Passport */ //////////////////////////////////////////////////////////

// Passport Validation //
// const passport = require('passport');

// load passport strategies //
// const localSignupStrategy = require('./passport/localSignup');
// const localLoginStrategy = require('./passport/localLogin');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);

/////////////////////////////////////////////// /* Cross Origin Settings */ //////////////////////////////////////////////////////////
var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

// Image Upload Route
app.post("/api/upload", function(req, res) {
  console.log("Submit Images Path hit");
  console.log(req.body);
  res.json({name: 'tom'})
});

app.get("/api/images", function(req, res) {
  db.Image.find({}, function(err, found) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});



/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////////
let PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (!error) {
        console.log("listening on port", PORT);
    } else {
        console.error(error)
        throw error;
    }
});
