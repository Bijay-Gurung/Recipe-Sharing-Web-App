import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Signup.css';

function Field(){
    return(
        <div className="fields">
            {/* <label for="username"><FontAwesomeIcon icon="fa-solid fa-user" /></label> */}
            <input type="text" id="username" name="username" placeholder="Username"></input>
            <br></br>
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

function Aha(){
    return(
        <div className="aha">
            <p>Already have an account</p>
            <a href="/src/Login.js" alt="login">Login</a>
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