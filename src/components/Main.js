import React from 'react';
import Slider from './HeroSlider';
import "../styles/Main.css"

const Main = () => {
    return (
        <div className='hero-container'>
            <div className='hero-texts'>
                <div className='hero-headers'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className='hero-description'>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div className='hero-button-wrapper'>
                    <button className='button-reserve' type='button'>Reserve a Table</button>
                </div>
            </div>
            <div className='slider-wrapper'>
                <Slider />
            </div>
        </div>
    );
};

export default Main;