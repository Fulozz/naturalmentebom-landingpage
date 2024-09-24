// src/Carousel.js
import React, { useState } from 'react';
import image1 from '../Assets/carousel/carousel-image-1.jpg';
import image2 from '../Assets/carousel/carousel-image-2.jpg';
import image3 from '../Assets/carousel/carousel-image-3.jpg';
import image4 from '../Assets/carousel/carousel-image-4.jpg';

const Carousel = () => {
  const images = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
          <img src={images[activeIndex].url} alt="" className="carousel__image" />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;