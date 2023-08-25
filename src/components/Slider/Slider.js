import React, { useEffect } from 'react';
import Swiper , {Autoplay,Navigation} from 'swiper';
import image2 from'../../images/slide-01.jpg'
import image3 from'../../images/slide-02.jpg'
import image4 from'../../images/slide-03.jpg'
import './Swipper.css'

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
    <> 
    <div className="dvSlider">
      {/* Slider main container */}
      <div className="swiper-container swiper">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">
            <div className="slide-inner dataone imageback1">
              <div className="container">
                <h2>Slide1</h2>
              </div>
            </div>
          </div>

      
          <div className="swiper-slide datatwo imageback2"> 

          </div>
          <div className="swiper-slide datathree imageback3"> </div>
          {/* ... */}
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
    </>
  );
};

export default Slider;