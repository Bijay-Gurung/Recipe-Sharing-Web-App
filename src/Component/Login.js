import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Login.css';

function Field(){
    return(
        <div className="fields">
            <input type="email" id="email" name="email" placeholder="Mail"></input>
            <br></br>
            <input type="password" id="password" name="password" placeholder="Password"></input>
        </div>
    );
}

function ForgotPass(){
    return(
        <p className="forgot">Forgot Password</p>
    );
}

function Dha(){
    return(
        <div className="dha">
            <p>Don't have an account</p>
            <a href="/src/Signup.js" alt="signup">Signup</a>
        </div>
    );
}

function Signin(){
    function Success(){
        alert("Login Successfully");
    }
    
    return(
        <button onClick={Success}>Login</button>
    );
}

function Form(){
    return(
        <div className="container">
        <div className="form">
            <div className="left"></div>

            <div className="right">
                <h1>Login</h1>
                <Field/>
                <ForgotPass/>
                <Signin/>
                <Dha/>
            </div>
        </div>
        </div>
    );
}

export default function Login(){
    return(
        <>
        <Form/>
        </>
    );
}