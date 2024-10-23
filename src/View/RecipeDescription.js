import React from "react";
import './RecipeDescription.css';
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import { useLocation } from 'react-router-dom';

function Content() {
    const location = useLocation();
    const { recipe } = location.state;

    return (
        <div className="recipeDescription">
            <div className="details">
                <h2>Details</h2>
                <div className="content">
                    <div className="left">
                        <div className="recipeImage">
                            <img src={`http://localhost:4000/${recipe.image.replace(/\\/g, '/')}`} alt="Recipe pic" height="200px" width="130px" length="100px" />
                        </div>
                    </div>

                    <div className="right">
                        <p>{recipe.details}</p>
                    </div>
                </div>
            </div>

            <div className="nutritionalInfo">
                <h2>Nutritional Info</h2>
                <div className="content">
                    <div className="left">
                        <div className="section">
                            <ul>
                                <li>{recipe.nutInfo}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        {/* Nutritional data */}
                    </div>
                </div>
            </div>

            <div className="ingredient">
                <h2>Ingredient</h2>
                <div className="content">
                    <p>{recipe.ingredient}</p>
                </div>
            </div>

            <div className="processes">
                <h2>Processes</h2>
                <div className="content">
                    <ol>
                        <li>{recipe.process}</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}


export default function RecipeDescription(){
    return(
        <>
        <Nav />
        <Content />
        <Footer />
        </>
    );
}