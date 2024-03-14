import React, { useState, useEffect } from 'react';
import "../styles/HeroSlider.css";
import Image1 from '../images/mario_adrian_a.jpg';
import Image2 from '../images/mario_adrian_b.jpg';
import Image3 from '../images/restaurant_chef_b.jpg';

const Slider = () => {
    const images = [Image1, Image2, Image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle automatic rotation
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Rotate every 5 seconds
        return () => clearInterval(intervalId); // Cleanup
    }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

    // Function to handle manual navigation to the previous image
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Function to handle manual navigation to the next image
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slider-container">
            <button className="slider-button" onClick={goToPreviousImage}>Previous</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
            <button className="slider-button" onClick={goToNextImage}>Next</button>
        </div>
    );
};

export default Slider;