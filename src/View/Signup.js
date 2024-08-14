import React, { useState } from "react";
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/signups", { userName: name, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => console.log(err));
    };    

    return (
        <div className="container">
            <div className="form">
                <div className="left"></div>
                <div className="right">
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <Field setName={setName} setEmail={setEmail} setPassword={setPassword} />
                        <button type="submit">Signup</button>
                    </form>
                    <ForgotPass />
                    <Aha />
                </div>
            </div>
        </div>
    );
}

function Field({ setName, setEmail, setPassword }) {
    return (
        <div className="fields">
            <input type="text" id="username" name="username" placeholder="Username" onChange={(e) => setName(e.target.value)} required/>
            <br />
            <input type="email" id="email" placeholder="Mail" onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            <br />
        </div>
    );
}

function ForgotPass() {
    return (
        <p className="forgot">Forgot Password</p>
    );
}

function Aha() {
    return (
        <div className="aha">
            <p>Already have an account</p>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default function Signup() {
    return (
        <>
            <Form />
        </>
    );
}
