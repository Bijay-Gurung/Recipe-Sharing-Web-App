import React from 'react';
// import {Link, useNavigate} from 'react-router-dom';

export default function Nav(){
    // const navigate = useNavigate();

    return(
    <div className="nav">
        <div className="logo"></div>
        <Link to="/" className="home">Home</Link>
        <Link to="" className="recipes">Recipes</Link>
        <Link to="/about" className="aboutUs">About Us</Link>
        <Link to="" className="contactUs">Contact Us</Link>
        <Link to="/login" className='login'>Login</Link>
        {/* <button id="login" onClick={() => navigate("/login")}>Login</button> */}
    </div>
    );
}
