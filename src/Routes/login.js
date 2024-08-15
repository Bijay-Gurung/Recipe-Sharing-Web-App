const express = require('express');
const Signup = require('../models/signup');
const router = express.Router();

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    Signup.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password == password){
                res.json("Success");
            }
            else{
                res.status(401).json("The password is incorrect");
            }
        }else{
            res.status(404).json("No record Existed");
        }
    });
});

module.exports = router;