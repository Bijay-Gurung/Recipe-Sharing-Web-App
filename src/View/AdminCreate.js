import React, {useState} from "react";
import axios from "axios";
import './AdminCreate.css';

function Create(){
    const [recipe, setRecipe] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [nutInfo, setNutInfo] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [process, setProcess] = useState('');
    const [image, setImage] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/recipes",{recipe, author, date, nutInfo, ingredient, process, image, details})
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="createRecipe">
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="recipe" name="recipe" placeholder="Recipe Name" onChange={(e) => setRecipe(e.target.value)} required />
                <input type="text" id="author" name="author" placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} required />
                <input type="date" id="date" name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} required />
                <textarea rows='5' cols='24' id="nutInfo" name="nutInfo" placeholder="Add Nutritional Info" onChange={(e) => setNutInfo(e.target.value)} required></textarea>
                <textarea rows='5' cos='24' id="process" name="process" placeholder="Add the process of recipe" onChange={(e) => setProcess(e.target.value)} required></textarea>
                <input type="file" id="recipeImage" name="recipeImage" placeholder="Upload Recipe Image" onChange={(e) => setImage(e.target.value)} required />
                <textarea rows='5' cos='24' id="details" name="details" placeholder="Write your recipe details here" onChange={(e) => setDetails(e.target.value)} required></textarea>
                <textarea rows='5' cols='24' id="ingredient" name="ingredient" placeholder="Add Ingredient" onChange={(e) => setIngredient(e.target.value)} required></textarea>
                <button type="submit">Create</button>
            </form>
        </div>
    );
    
}

export default function CreateRecipe(){
    return(
        <>
        <Create />
        </>
    );
}