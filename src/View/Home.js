import React, { useState } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import './Home.css';
import '../Component/Footer.css';
import {useNavigate} from 'react-router-dom';
import { ClipLoader } from "react-spinners";

function GroceryList(){
    return(
        <div className='GroceryList'>
            <div className='Left'>
                <div className='box box1'></div>
                <div className='box box2'></div>
                <div className='box box3'></div>
                <div className='box box4'></div>
                <div className='box box5'></div>
                <div className='box box6'></div>
            </div>
            <div className='Right'>
                <h1>Grocery List</h1> {/* Cherry Bomb */}
                <p>Look for your Grocery Item</p>
                <button>Check</button>
            </div>
        </div>
    );
}

function Categories(){
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function BtnOne(){
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            navigate("/breakfast");
        },2000);
        
    }

    return(
        <div className='Categories'>
            <div className='breakfast'>
                <div className='bimage'></div>
                <h3>Breakfast</h3>
                <button onClick={BtnOne}>Click Here</button>
                
                {isLoading ? (
                    <div className="loader-container">
                        <ClipLoader size={63} color="black" />
                    </div>
                ) : (null)}
                
            </div>

            {/* <div className='meal'>
                <div className='mimage'></div>
                <h3>Meal</h3>
                <button>Click Here</button>
            </div> */}

            <div className='meal'>
                <div className='dimage'></div>
                <h3>Meal</h3>
                <button>Click Here</button>
            </div>

            <div className='dessert'>
                <div className='deimage'></div>
                <h3>Dessert</h3>
                <button>Click Here</button>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <Nav />
            <GroceryList />
            <Categories />
            <Footer />
        </div>
    );
}
