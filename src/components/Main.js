import React from 'react';
import heroImage from '../images/restauranfood.jpg';
import "../styles/Main.css"

const Main = () => {
    return(
        <div className='main-container'>
            <div className='hero-section'>
                <div className='hero-wrapper'>
                    <div className='hero-titles'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                    <div>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className='button-reserve' type='button'>Reserve a Table</button>
                    </div>
                </div>
            </div>
            <div className='hero-image-wrapper'>
                <img src={heroImage} alt="Restaurant Food" />
            </div>
        </div>
    );
};

export default Main;