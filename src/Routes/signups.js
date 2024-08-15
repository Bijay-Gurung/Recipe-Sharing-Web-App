const express = require('express');
const Signup = require('../models/signup');
const router = express.Router();


router.post('/', async (req,res) => {
    try{
        const signup = new Signup(req.body);
        await signup.save();
        console.log('Singup saved:', signup);
        res.status(201).json(signup);
    }catch (error){
        console.log('Error while signup:', error);
        res.status(400).json({message: 'error while signup', error: error.message});
    }
});

router.get('/', async (req,res) => {
    try{
        const signups = await Signup.find();
        res.json(signups);
    }catch (error){
        console.error('error retrieving signup data:', error);
        res.status(500).json({message: 'Error retrieving signup data', error: error.message});
    }
});

module.exports = router;