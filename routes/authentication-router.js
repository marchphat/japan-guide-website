const express = require("express");
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const authentication = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'japan_guide',
    multipleStatements: true
});

authentication.use(bodyParser.urlencoded({ extended: false }));
authentication.use(express.urlencoded({ extended: true }));
authentication.use(express.json());
authentication.use(
  session({
    secret: "mySession",
    cookie: { maxAge: 6000000 },
    resave: true,
    saveUninitialized: false,
  })
);

authentication.route('/log-in')
.get((req,res)=>{
    if (req.session.loggedin == true) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(__dirname, "../public/views/log-in.html")); 
    } 
})
.post((req, res)=>{
    var user_email = req.body.email;
    var user_password = req.body.password;

    if (user_email != null && user_password != null) {
        connection.query(
            'select * from users where email = ?', user_email,
            (error, results) => {
                if (error) { console.error(); }

                if (results.length > 0) {
                    bcrypt.compare(user_password, results[0].password, (err, result)=>{
                        if (err) { console.error(); }

                        if (result == true) {
                            req.session.loggedin = true;
                            req.session.userID = user_email;
                            res.redirect('/');
                        } else {
                            res.redirect('/log-in');
                        }
                    });
                } else {
                    res.redirect('/log-in');
                }
            }
        )
    } else {
        res.redirect('/log-in');
    }
});

authentication.route('/sign-up')
.get((req, res)=>{
    res.sendFile(path.join(__dirname, "../public/views/sign-up.html")); 
})
.post((req, res)=>{
    const user_email = req.body.email;
    const user_password = req.body.password;

    if (user_email != null && user_password != null) {
        connection.query(
            'select * from users where email = ?', user_email,
            (error, results) => {
                if (error) { console.error(); }

                if (results.length > 0) {
                    res.redirect("/log-in");
                } else {
                    bcrypt.genSalt(10, (err, salt)=>{
                        bcrypt.hash(user_password, salt, (err, hash)=>{
                            connection.query('insert into users values (?, ?)', [user_email, hash], (err)=>{
                                console.log('Sign Up Successfully');
                                req.session.loggedin = true;
                                req.session.userID = user_email;
                                res.redirect('/');
                            });
                        });
                    });
                }
            }
        )
    } else {
        res.redirect('/login');
    }
});

authentication.get("/log-out", (req, res) => {
    if (req.session.loggedin == true) {
        req.session.destroy();
        res.redirect("/");
    } else {
        res.redirect("/");
    } 
});

module.exports = authentication;




