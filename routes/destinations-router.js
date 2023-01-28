const express = require("express");
const path = require("path");
const authentication = require('./authentication-router');
const destinations = express.Router();

destinations.use(express.static(path.join(__dirname, "../public")));
destinations.use(authentication);

destinations.get("/tokyo", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/tokyo.html"));
  } else {
    res.redirect("/log-in");
  }
});

destinations.get("/kyoto", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/kyoto.html"));
  } else {
    res.redirect("/log-in");
  }
});

destinations.get("/osaka", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/osaka.html"));
  } else {
    res.redirect("/log-in");
  }
});

destinations.get("/nara", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/nara.html"));
  } else {
    res.redirect("/log-in");
  }
});

destinations.get("/fuji", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/fuji.html"));
  } else {
    res.redirect("/log-in");
  }
});

destinations.get("/hiroshima", (req, res) => {
  if (req.session.loggedin != null && req.session.loggedin == true) {
    res.sendFile(path.join(__dirname, "../public/views/destinations/hiroshima.html"));
  } else {
    res.redirect("/log-in");
  }
});

module.exports = destinations;
