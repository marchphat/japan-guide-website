const express = require("express");
const path = require("path");
const destinations = require("./routes/destinations-router.js");
const authentication = require('./routes/authentication-router.js');
const interests = require("./routes/interests-router.js")

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.use(destinations);
app.use(authentication);
app.use(interests);

app.get('/interests', (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "/public/views/interests.html"));
    } else {
        res.redirect("/log-in");
    }
});

app.get('/destinations', (req, res) => {
    if (req.session.loggedin != null && req.session.loggedin == true) {
        res.sendFile(path.join(__dirname, "/public/views/destinations.html"));
    } else {
        res.redirect("/log-in");
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/views/index.html"));
});

app.get("/error", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/views/page-not-found.html"));
});

app.get("*", (req, res) => {
    res.redirect("/error")
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log("Listening at port", PORT);
});