import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
    <div className="nav">
        <div className="logo"></div>
        <Link to="home" className="home">Home</Link>
        <Link to="" className="recipes">Recipes</Link>
        <Link to="about" className="aboutUs">About Us</Link>
        <Link to="" className="contactUs">Contact Us</Link>
        <button id="login">Login</button>
    </div>
    );
}
