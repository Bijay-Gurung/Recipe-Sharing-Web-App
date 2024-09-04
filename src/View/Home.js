import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import './Home.css';
import '../Component/Footer.css';
import {useNavigate} from 'react-router-dom';


function GroceryList(){
    return(
        <div className='GroceryList'>
            <div className='Left'></div>
            <div className='Right'>
                <h1>Grocery List</h1> {/* Cherry Bomb */}
                <p>Look for your Grocery Item</p>
                <button>Check</button>
            </div>
        </div>
    );
}

function Categories(){
    const navigate = useNavigate();
    function BtnOne(){
        navigate("/breakfast");
    }

    return(
        <div className='Categories'>
            <div className='breakfast'>
                <div className='bimage'></div>
                <h3>Breakfast</h3>
                <button onClick={BtnOne}>Click Here</button>
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
