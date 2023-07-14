import React, { useState } from 'react';
import "./CarouselWithoutText.css";

export default function CarouselWithoutText(props){
    const [selectedIndex, setSelectedIndex] = useState(0);
    const cellCount = 9;

    const rotateCarousel = () => {
        const angle = (selectedIndex / cellCount) * -360;
        const carousel = document.querySelector('.image-carousel');
        carousel.style.transform = `translateZ(-26.875rem) rotateY(${angle}deg)`;
    };

    const handlePrevButtonClick = () => {
        setSelectedIndex((prevIndex) => prevIndex - 1);
        rotateCarousel();
    };

    const handleNextButtonClick = () => {
        setSelectedIndex((prevIndex) => prevIndex + 1);
        rotateCarousel();
    };
    return(
        <div className='carousel-containing-buttons'>
            <div className="image-carousel-container">
            <h1>{props.text}</h1>
            <div className="image-carousel">
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
                <div class="carousel_image"></div>
            </div>
        </div>
        <p className="carousel-buttons">
            <button onClick={handlePrevButtonClick} class="previous-button carousel-button">Previous</button>
            <button onClick={handleNextButtonClick} class="next-button carousel-button">Next</button>
        </p>
        </div>
    );
}