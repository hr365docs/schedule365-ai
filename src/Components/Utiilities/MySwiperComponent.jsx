import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";  // Correct module import

// // Import Swiper styles
// import "swiper/css";    
// import "swiper/css/pagination";

const MySwiperComponent = ({ slidesData }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}  // Ensure correct module usage
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id} className="swiperSlidestyles">
          <div className="CardHeaderStyle">
            <span className="UserNameStyles">{slide.name}</span>
            <div className="elementor-star-rating">
              {[...Array(slide.rating)].map((_, i) => (
                <i key={i} className="elementor-star-full">★</i>
              ))}
            </div>
            <span className="elementor-testimonial__title">{slide.company}</span>
            <div className="elementor-testimonial__content">
              <div className="elementor-testimonial__text">
                "{slide.testimonial}"
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
