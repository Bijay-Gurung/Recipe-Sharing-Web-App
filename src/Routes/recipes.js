const multer = require('multer');
const Recipe = require('../models/recipe');
const express = require('express');
const router = express.Router();
const path = require('path');

// Configuring multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Creating a new recipe route
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { recipe, author, date, cookingTime, nutInfo, ingredient, process, details, category } = req.body;
        const imagePath = req.file ? req.file.path : '';

        const newRecipe = new Recipe({
            recipe,
            author,
            date,
            cookingTime,
            nutInfo,
            ingredient,
            process,
            image: imagePath,  // Saving the path of the uploaded image
            category,
            details
        });

        await newRecipe.save();
        console.log('Recipe saved:', newRecipe);
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error('Error saving recipe:', error);
        res.status(400).json({ message: 'Error saving recipe', error: error.message });
    }
});

// Get all recipes
router.get('/', async (req, res) => {
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    }catch (error){
        console.error('Error retrieving recipes:', error);
        res.status(500).json({message: 'Error retrieving recipes', error: error.message});
    }
});

module.exports = router;
