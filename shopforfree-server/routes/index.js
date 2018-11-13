var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const UserData = require('../models/User');

const path = require("path");
const multer = require("multer");

router.post('/login', function (req, res) {
    console.log('>>>>posted date>>>', req.body);

    UserData.findOne({email: req.body.email, password: req.body.password})
        .exec(function (err, results) {
            console.log("-----------------", err, results);
            if (err) {
                console.log("Login Failure>>>>>>>>>>>>>>>>>", err);
                res.json({
                    state: "fail",
                    message: err,
                });
            }
            else if (results) {
                console.log("Login success>>>>>>>>>>>>>>>>");
                res.json({
                    state: "success",
                    message: "Login successful!",
                    data: results
                })
            }
            else {
                console.log("Login Failure>>>>>>>>>>>>>>>>>");
                res.json({
                    state: "fail",
                    message: "Invalid infos",
                });
            }
        });
});

router.post('/register', function (req, res) {
    console.log(">>>>posted data>>>", req.body);
    const user_data = new UserData({
        title: req.body.title,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    });

    UserData.findOne({email: req.body.email})
        .exec(function (err, results) {
            if (err) {
                console.log("Register Failure>>>>>>>>>>>>>>>>>", err);
                res.json({
                    state: "fail",
                    message: err,
                });
                // throw err;
            }
            if (results) {
                console.log("User alreasy exists>>>>>>>>>>>>>>>>");
                res.json({
                    state: "fail",
                    message: "This email exists already!",
                    data: results
                })
            } else {
                user_data.save(function (err, result) {
                    if (err) {
                        console.log(err);
                        res.json({
                            state: "fail",
                            message: err
                        });
                    }
                    if (result) {
                        console.log("Register success>>>>>>>>>>>>>>>>>>");
                        res.json({
                            state: "success",
                            message: "Register successful!",
                            data: result,
                        });
                    }
                });
            }
        });
});

module.exports = router;
