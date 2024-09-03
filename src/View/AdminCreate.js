import React, {useState} from "react";
import axios from "axios";
import './AdminCreate.css';
import {Link} from "react-router-dom";

function Logout(){
    return(
        <Link to="/" className="logout">Logout</Link>
    );
    
}

function Create(){
    const [recipe, setRecipe] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [nutInfo, setNutInfo] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [process, setProcess] = useState('');
    const [image, setImage] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('recipe', recipe);
        formData.append('author', author);
        formData.append('date', date);
        formData.append('cookingTime', cookingTime);
        formData.append('nutInfo', nutInfo);
        formData.append('ingredient', ingredient);
        formData.append('process', process);
        formData.append('image', image);
        formData.append('details', details);
        formData.append('category', category);
    
        axios.post("http://localhost:4000/recipes", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(result => {
            console.log(result);
            alert("New Recipe has been created");
        })
        .catch(err => console.log(err));
    }
    

    return(
        <div className="createRecipe">
            <h1>New Recipe</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="left">
                    <input type="text" id="recipe" name="recipe" placeholder="Recipe Name" onChange={(e) => setRecipe(e.target.value)} required /><br/>
                    <input type="text" id="author" name="author" placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} required /><br/>
                    <input type="date" id="date" name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} required /><br/>
                    <input type="text" id="cookingTime" name="cookingTime" placeholder="Cooking Time" onChange={(e) => setCookingTime(e.target.value)} required /><br/>
                    <textarea rows='5' cols='29' id="nutInfo" name="nutInfo" placeholder="Add Nutritional Info" onChange={(e) => setNutInfo(e.target.value)} required></textarea><br/>
                    <textarea rows='5' cols='29' id="process" name="process" placeholder="Add the process of recipe" onChange={(e) => setProcess(e.target.value)} required></textarea><br/>
                </div>

                <div className="right">
                    <input type="file" id="recipeImage" name="recipeImage" placeholder="Upload Recipe Image" onChange={(e) => setImage(e.target.files[0])} required /><br/>
                    <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} required>
                        <option>Breakfast</option>
                        <option>Meal</option>
                        <option>Dessert</option>
                    </select><br/>
                    <textarea rows='5' cols='29' id="details" name="details" placeholder="Write your recipe details here" onChange={(e) => setDetails(e.target.value)} required></textarea><br/>
                    <textarea rows='5' cols='29' id="ingredient" name="ingredient" placeholder="Add Ingredient" onChange={(e) => setIngredient(e.target.value)} required></textarea><br/>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
    
}

export default function CreateRecipe(){
    return(
        <>
        <Logout />
        <Create />
        </>
    );
}