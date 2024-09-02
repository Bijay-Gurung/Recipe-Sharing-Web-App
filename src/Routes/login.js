const express = require('express');
const bcrypt = require('bcrypt');
const Signup = require('../models/signup');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
