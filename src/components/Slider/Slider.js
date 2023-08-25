import React, { useEffect } from 'react';
import Swiper , {Autoplay,Navigation} from 'swiper';
Swiper.use([Autoplay,Navigation]); //To make swiper use Navigation feature

const Slider = () => {
  useEffect(() => {
     new Swiper('.dvSlider .swiper', {
      slidesPerView: 1,
      spaceBetween: 50,
      speed:5000,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:{
        delay: 3000,
        disableOnInteraction: false,
      }
    });
  }, []);

  return (
    <div className="dvSlider">
      {/* Slider main container */}
      <div className="swiper swiper-js">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          {/* ... */}
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Slider;