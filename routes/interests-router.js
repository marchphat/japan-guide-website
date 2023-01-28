const express = require("express");
const path = require("path");
const authentication = require('./authentication-router');
const interests = express.Router();

interests.use(express.static(path.join(__dirname, "../public")));
interests.use(authentication);

interests.get("/temple", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/temple.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/shrines", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/shrines.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/history", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/history.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/museums", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/museums.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/gardens", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/gardens.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/festivals", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/festivals.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/anime", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/anime.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/nature", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/nature.html"));
    } else {
        res.redirect("/log-in");
    }
});

interests.get("/onsen", (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "../public/views/interests/onsen.html"));
    } else {
        res.redirect("/log-in");
    }
});


module.exports = interests;