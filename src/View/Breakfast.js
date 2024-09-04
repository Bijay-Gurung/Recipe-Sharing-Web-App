// import React from "react";
import React, {useState} from "react";
import './Breakfast.css';
import Nav from "../Component/Nav";
import axios from 'axios';
import { ClipLoader } from "react-spinners";
// import {Link, useNavigate} from 'react-router-dom';

function Search(){
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        try{
            const response = axios.post("http://localhost:4000/recipes", {isSearch});
            console.log('The recipe you are searching is found.', response.data);
            setTimeout(()=>{
                setIsSearch(false);
            },2000);
        } catch(error){
            console.error('Error while searching recipe', error.response.data);
            alert("Recipe is not found");
        }

    }

    return(
        <div className="searchDiv">
            {isLoading ? (
                <div className="loader-container">
                    <ClipLoader size={43} color="black" />
                </div>
            ) : (null) // here, i have to replace null and put the recipes div
            }

            <form onSubmit={handleSubmit}>
                <input type="text" id="search" name="search" placeholder="Search..." onChange={(e) => setIsSearch(e.target.value)} required />
                <button type="submit">search</button>
            </form>
        </div>
    );
}

export default function Breakfast(){
    return(
        <div>
            <Nav />
            <Search />
        </div>
    );
}