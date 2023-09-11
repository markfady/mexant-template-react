import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import "./Carousel.css";

import "animate.css";
const Carousel = () => {
  return (
    <>
          <div class='container'>      
          <div className="top-title">
            <h5>Testimonials</h5>
            <h3>What They Say</h3>
          </div>
          <div className="row">
             <div className=".col-lg-10 offset-lg-1">
             <OwlCarousel items={1}  
          className="owl-theme"  /*Contains all the three dots buttons*/
          loop   
          margin={8} >  
           <div className="item">Slide1</div>  
           <div className="item">Slide2</div>  
           <div className="item">Slide3</div> 
      </OwlCarousel>  
             </div>
          </div>
         
      </div>  
    </>
  );
};
export default Carousel;
