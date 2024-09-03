import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from "react-spinners";

function Form() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            console.log('Login successful:', response.data);
            setTimeout(() =>{
                setIsLoading(false);
                navigate('/adminPanel'); 
            },2000);
        } catch (error) {
            console.error('Error during login:', error.response.data);
            alert('Login failed. Please check your email and password.');
        }
    };

    return (
        <div className="container">
            {isLoading ? (
                 <div className="loader-container">
                    <ClipLoader size={43} color="black" />
                    </div>
            ) :(
                <div className="form">
                <div className="left"></div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <Field setEmail={setEmail} setPassword={setPassword} />
                        <button type="submit">Login</button>
                    </form>
                    {/* <ForgotPass /> */}
                    <Dha />
                </div>
            </div>
            )}
        </div>
    );
}

function Field({ setEmail, setPassword }) {
    return (
        <div className="fields">
            <input type="email" id="email" name="email" placeholder="Mail" onChange={(e) => setEmail(e.target.value)} required/>
            <br />
            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
    );
}

// function ForgotPass() {
//     return (
//         <p className="forgot">Forgot Password</p>
//     );
// }

function Dha() {
    return (
        <div className="dha">
            <p>Don't have an account</p>
            <Link to="/signup">Signup</Link>
        </div>
    );
}

export default function Login() {
    return (
        <>
            <Form />
        </>
    );
}
