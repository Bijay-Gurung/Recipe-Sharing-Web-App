import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Signup.css';
import {Link} from 'react-router-dom';

function Field(){
    return(
        <div className="fields">
            {/* <label for="username"><FontAwesomeIcon icon="fa-solid fa-user" /></label> */}
            <input type="text" id="username" name="username" placeholder="Username"></input>
            <br></br>
            <input type="email" id="email" placeholder="Mail"></input>
            <br></br>
            <input type="password" id="password" placeholder="Password"></input>
        </div>
    );
}

function ForgotPass(){
    return(
        <p className="forgot">Forgot Password</p>
    );
}

function Aha(){
    return(
        <div className="aha">
            <p>Already have an account</p>
            <Link to="login" alt="login">Login</Link>
        </div>
    );
}

// function Continue(){
//     return(
//         <>
//         <p>____ Countinue With ____</p>
//         <div className="continue">

//         </div>
//         </>
//     )
// }

function Register(){
    function Success(){
        alert("Signup Successfully");
    }
    
    return(
        <button onClick={Success}>Signup</button>
    );
}

function Form(){
    return(
        <div className="container">
        <div className="form">
            <div className="left"></div>

            <div className="right">
                <h1>Signup</h1>
                <Field/>
                <ForgotPass/>
                <Register/>
                <Aha/>
            </div>
        </div>
        </div>
    );
}

export default function Signup(){
    return(
        <>
        <Form/>
        </>
    );
}