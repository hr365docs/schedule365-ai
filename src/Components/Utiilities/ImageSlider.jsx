import React, { useState } from 'react';

import { FaAngleLeft, FaAngleRight} from "react-icons/fa6";
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      {/* <button onClick={prevSlide} className="slider-button prev">&#9665;</button> */}
      <FaAngleLeft className="slider-button prev" onClick={prevSlide}/>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'inactive' }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <FaAngleRight  className="slider-button next" onClick={nextSlide}/>
      {/* <button onClick={nextSlide} className="slider-button next">&#9655;</button> */}
    </div>
  );
};

export default ImageSlider;
