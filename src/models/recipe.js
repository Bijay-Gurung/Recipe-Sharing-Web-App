// Model
// Creating Structure 
const mongoose = require('mongoose');

const recipe_Schema = new mongoose.Schema({
    recipe: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    cookingTime: {
        type: String,
        required: true,
    }
    ,
    nutInfo: {
        type: String,
        required: true,
    },
    ingredient: {
        type: String,
        required: true,
    },
    process: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

// Create a text index on the 'category' field
recipe_Schema.schema.index({category: 'text'});

// Usage
recipe_Schema.find({$text: {$search: 'Breakfast'}}).exec((err, recipe_Schema) => {
    console.log(recipe_Schema);
});

recipe_Schema.find({$text: {$search: 'Meal'}}).exec((err, recipe_Schema) => {
    console.log(recipe_Schema);
})

recipe_Schema.find({$text: {$search: 'Dessert'}}).exec((err, recipe_Schema) => {
    console.log(recipe_Schema);
})

// creating new Collection
module.exports = mongoose.model("Recipe", recipe_Schema);