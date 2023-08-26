import React, { useEffect } from 'react';
import Swiper , {Autoplay,Navigation} from 'swiper';
import SliderComponent from './SliderComponent';
import './Slider.css'
/*Start Importing Animation */
import 'animate.css';

Swiper.use([Autoplay,Navigation]); //To make swiper use Navigation feature

const Slider = () => {
  useEffect(() => {
     new Swiper('.dvSlider .swiper', {
      slidesPerView: 1,
      spaceBetween: 0, //space between each slide
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:{
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

          {/*Start of Slide one*/}
         <SliderComponent 
         data="dataone"
         image="imageback1"
         first="Get" 
         second="ready" 
         third="for your business"
         fourth="upgrade"
         fifth="all aspects"
         text="Mexant HTML5 Template is provided for free of charge. 
         This layout is based on Boostrap 5 CSS framework. Anyone can download
        and edit for any professional website. Thank you for visiting TemplateMo website."
         />
          <SliderComponent 
         data="datatwo"
         image="imageback2"
         first="Digital" 
         second="Currency" 
         third="for you"
         fourth="Best"
         fifth="Crypto Tips"
         text="You will see a bunch of free CSS templates when you search on Google. 
         TemplateMo website is probably the best one because it is 100% free.It does not ask
        you anything in return. You have a total freedom to use any template for any purpose.."
         />
          <SliderComponent  //Here I want to make the last one colored and skip the other props
         data="datathree"
         image="imageback3"
         first="Best one in Town" 
         fourth="Crypto"
         fifth="Services"
         text="Mexant HTML5 Template is provided for free of charge. 
         This layout is based on Boostrap 5 CSS framework. Anyone can download
        and edit for any professional website. Thank you for visiting TemplateMo website."
         />
            {/*End of Slide one*/}
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