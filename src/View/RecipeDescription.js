import React, {useState, useEffect} from "react";
import './RecipeDescription.css';
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

function Content(){
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/recipes')
            .then(response => response.json())
            // .then(data => setRecords(data)) to display all data
            .then(data => {
                const filterRecords = data.filter(list => list.category === 'Breakfast');
                setRecords(filterRecords);
            })
            .catch(err => console.log(err));
    }, []);

    return(
        <>
        {records.map((list, index) =>(
            <div className="recipeDescription" key={index}>
            <div className="details">
                <h2>Details</h2>
                <div className="content">
                    <div className="left">
                        <div className="recipeImage">
                            <img src={`http://localhost:4000/${list.image.replace(/\\/g, '/')}`} alt="Recipe pic" height="200px" width="130px" length="100px" />
                        </div>
                    </div>

                    <div className="right">
                        <p>{list.details}</p>
                    </div>
                </div>
            </div>

            <div className="nutritionalInfo">
            <h2>Nutritional Info</h2>
                <div className="content">
                    <div className="left">
                        <div className="section">
                            <ul>
                                <li>{list.nutInfo}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="right">
                        <div className="section">
                            <div className="c1">
                                <ul>
                                    <li>Calories 270</li>
                                    <li>Calories from fat 110</li>
                                    <li>Total fat 12g (18%)</li>
                                    <li>Saturated fat 7g (34%)</li>
                                </ul>
                            </div>

                            <div className="c2">
                                <ul>
                                    <li>Trans fat 0g</li>
                                    <li>Cholesterol 35mg (11%)</li>
                                    <li>Sodium 420mg (18%)</li>
                                    <li>Total Carbohydrate 31g (10%)</li>
                                </ul>
                            </div>

                            <div className="c3">
                                <ul>
                                    <li>Dietary fiber 2g (9%)</li>
                                    <li>Sugar 2g</li>
                                    <li>Protien 10g</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="ingredient">
                <h2>Ingredient</h2>
                <div className="content">
                    <p>{list.ingredient}</p>
                </div>
                
            </div>

            <div className="processes">
                <h2>Processes</h2>
                <div className="content">
                    <ol>
                        <li>{list.process}</li>
                    </ol>
                </div>
            </div>
        </div>     
            ))};
        </>
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