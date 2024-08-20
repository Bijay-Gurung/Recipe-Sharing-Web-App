import React from "react";
import Nav from "../Component/Nav";
import './About.css';

function Content(){
    return(
        <div className="content">
            <div className="image"></div>
            <div className="content1">
            Welcome to Bijay Recipes, your go-to destination for sharing, discovering, and exploring the world of recipes! Whether you're a seasoned chef or just beginning your culinary journey, our platform is designed to bring together food enthusiasts from all walks of life.
            </div>
            <div className="content2">
            At Bijay Recipes, we believe that food is more than just sustenance—it's a way to connect, celebrate, and express creativity. Our mission is to create a vibrant community where anyone can share their unique recipes, find inspiration, and learn from others. From tried-and-true family recipes to innovative culinary creations, every dish has a story, and we’re here to help you tell it.
            </div>
            <div className="content3">
                <h3>What We Offer:</h3>
                <ul>
                    <li>Recipe Sharing: Easily upload your favorite recipes, complete with photos, ingredients, and step-by-step instructions.</li>
                    <li>Inspiration & Discovery: Browse an extensive collection of recipes from around the world, curated by our community of food lovers.</li>
                    <li>Community Interaction: Connect with other members, leave comments, share tips, and even ask questions to make your cooking experience more engaging.</li>
                    <li>Personalized Experience: Save your favorite recipes, create your own collections, and receive recommendations based on your tastes and dietary preferences.</li>
                </ul>
            </div>
        </div>
    )
}

export default function About(){
    return(
        <>
        <Nav />
        <Content />
        </>
    );
}