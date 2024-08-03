import React from 'react';

export default function Footer(){
    return(
        <div className='footer'>
            <div className='ContactUs'>
                <h3>Contact Us</h3>
                <p className='phoneNo'>+977 9813262790</p>
                <p className='email'>bijayRecipe@gmail.com</p>
            </div>

            <div className='other'>
                <p className='aboutUs'>About Us</p>
                <p className='followUs'>Follow Us</p>
                <div className='socialMedia'>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>

            <div className='copyright'>
                <p>@ 2024 Kathmandu Nepal, Inc All right reserved</p>
            </div>

            <div className='chatbot'></div>
        </div>
    );
}