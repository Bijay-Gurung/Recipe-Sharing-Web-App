const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();

// Create a new recipe
router.post('/', async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        console.log('Recipe saved:', recipe); // Log the saved recipe
        res.status(201).json(recipe); // Return the created recipe
    } catch (error) {
        console.error('Error saving recipe:', error);
        res.status(400).json({ message: 'Error saving recipe', error: error.message });
    }
});

// Get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error('Error retrieving recipes:', error);
        res.status(500).json({ message: 'Error retrieving recipes', error: error.message });
    }
});

// Get a single recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('Error retrieving recipe:', error);
        res.status(500).json({ message: 'Error retrieving recipe', error: error.message });
    }
});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('Error updating recipe:', error);
        res.status(400).json({ message: 'Error updating recipe', error: error.message });
    }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ message: 'Error deleting recipe', error: error.message });
    }
});

module.exports = router;
