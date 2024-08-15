import React, { useState } from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Form(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/signups", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/")
            }else{
                navigate("/signup")
                alert("You are not registered to this service")
            }
       
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="container">
        <div className="form">
            <div className="left"></div>

            <div className="right">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <Field setEmail={setEmail} setPassword={setPassword} />
                <button type="submit">Login</button>
                </form>
                <ForgotPass/>
                <Dha/>
            </div>
        </div>
        </div>
    );
}

function Field({setEmail, setPassword}){
    return(
        <div className="fields">
            <input type="email" id="email" name="email" placeholder="Mail" onChange={(e) =>setEmail(e.target.value)} required></input>
            <br></br>
            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required></input>
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
            <Link to="/signup">Signup</Link>
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