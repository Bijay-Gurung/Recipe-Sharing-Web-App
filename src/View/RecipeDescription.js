import React from "react";
import './RecipeDescription.css';
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

function Content(){
    return(
        <div className="recipeDescription">
            <div className="details">
                <h2>Details</h2>
                <div className="content">
                    <div className="left">
                        <div className="recipeImage"></div>
                    </div>

                    <div className="right">
                        <p>A type of bread flavored with garlic and butter. The garlic and butter usually spread onto bread that has already
                            been baked rather than being incorporated into bread dough. The type of bread most often used when preparing garlic
                            bread are a basic french baguette  or baton or a long Italian white loaf.</p>
                    </div>
                </div>
            </div>

            <div className="nutritionalInfo">
                <div className="left">
                    <ul>
                        <li>Serving size 1 slice (72g/2.6oz)</li>
                        <li>Serving per container 3</li>
                        <li>Amount per serving (% daily values)</li>
                    </ul>
                </div>

                <div className="right">
                    <div className="section">
                        <ul>
                            <li>Calories 270</li>
                            <li>Calories from fat 110</li>
                            <li>Total fat 12g (18%)</li>
                            <li>Saturated fat 7g (34%)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="ingredient">
                <p>Organic Bread (organic wheat flour, water, yeast & salt) butter (pasteurized rbst free cream [milk], salt), fresh garlic, roasted
                garlic, fresh basil, whole milk mozzarella (cultured pasteurized whole milk, salt, enzymes)</p>
            </div>

            <div className="Processes">
                <ul>
                    <li>Preheat oven to 450 degree.</li>
                    <li>Remove bread from packaging and place on baking sheet.</li>
                    <li>When oven is hot, place garlic bread on middle rack of oven and bake until cheese is just melted and
                        started to brown and bubble, approximately 6 to 8 minutes.</li>
                    <li>Caution: cheese will be hot, let cool slightly.</li>
                </ul>
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