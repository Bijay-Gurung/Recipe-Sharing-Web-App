import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import './About.css';

function Content(){
    return(
        <div className="content">
            <div className="image"></div>
            <div className="content1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className="content2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className="content3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>
    )
}

export default function About(){
    return(
        <>
        <Nav />
        <Content />
        <Footer />
        </>
    );
}