import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import './Home.css';


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
    return(
        <div className='Categories'>
            <div className='breakfast'>
                <div className='bimage'></div>
                <h3>Breakfast</h3>
                <button>Click Here</button>
            </div>

            {/* <div className='meal'>
                <div className='mimage'></div>
                <h3>Meal</h3>
                <button>Click Here</button>
            </div> */}

            <div className='dinner'>
                <div className='dimage'></div>
                <h3>Dinner</h3>
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
