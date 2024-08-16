const express = require('express');
const Signup = require('../models/signup');
const router = express.Router();

router.get("/", async (req, res) => {
    const { email, password } = req.query;
    try {
        const user = await Signup.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                return res.json("Success");
            } else {
                return res.status(401).json("The password is incorrect");
            }
        } else {
            return res.status(404).json("No record existed");
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


module.exports = router;