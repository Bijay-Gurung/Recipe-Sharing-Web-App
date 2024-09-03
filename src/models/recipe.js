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
    }
});

// creating new Collection
module.exports = mongoose.model("Recipe", recipe_Schema);