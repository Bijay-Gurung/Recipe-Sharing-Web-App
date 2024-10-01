import React, { useState, useEffect } from "react";
import './Breakfast.css';
import Nav from "../Component/Nav";
import axios from 'axios';
import { ClipLoader } from "react-spinners";

function Search() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:4000/recipes/search", { isSearch });
            console.log('The recipe you are searching for is found.', response.data);

            setSearchResults(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error while searching recipe', error.response?.data || error);
            alert("Recipe not found");
            setIsLoading(false);
        }
    };

    return (
        <div className="searchDiv">
            {isLoading ? (
                <div className="loader-container">
                    <ClipLoader size={43} color="black" />
                </div>
            ) : (
                <div>
                    {searchResults.length > 0 && (
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index}>{result.recipe} | {result.author}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input type="text" id="search" name="search" placeholder="Search..." onChange={(e) => setIsSearch(e.target.value)} required />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

function FetchData() {
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

    return (
        <div className="recipeSection">
            {/* <ul>
                {records.map((list, index) => (
                    <li key={index}>{list.recipe} | {list.author}</li>
                ))}
            </ul> */}

            {records.map((list, index) => (
                <div key={index} className="recipeCard">
                    <div className="left">
                        <img src={`http://localhost:4000/${list.image.replace(/\\/g, '/')}`} alt="Recipe pic" length="100px" width="100px" />
                    </div>

                    <div className="right">
                        <h2 className="recipe">{list.recipe}</h2>
                        <h3 className="author">{list.author}</h3>
                        <p className="date">{list.date}</p>
                        <div className="cookingTime">
                            <p className="title">Cooking Time</p>
                            <p className="time">{list.cookingTime}</p>
                        </div>
                        <button className="view">view all</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Breakfast() {
    return (
        <div>
            <Nav />
            <Search />
            <FetchData />
        </div>
    );
}
