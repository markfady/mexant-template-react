import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import "./Carousel.css";
import Image5 from '../../images/testimonials-01.jpg';
import "animate.css";
import Carosuelcomponent from './Carosuelcomponent';
const Carousel = () => {
  return (
    <>
          <div class='container'>      
          <div className="top-title">
            <h5>Testimonials</h5>
            <h3>What They Say</h3>
          </div>
          <div className="row">
             <div className="col-lg-10 offset-lg-1">
             <OwlCarousel items={1}  
          className="owl-theme"  /*Contains all the three dots buttons*/
          loop   
          margin={8} >  
          {/*Slide 1*/}
            <Carosuelcomponent
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cumque eaque ullam iste, quo mollitia!"
            name="Andrew Garfiled"
            title="CTO of Mexant"
            image={Image5}
            />
              {/*Slide 2*/}
             <Carosuelcomponent
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cumque eaque ullam iste, quo mollitia!"
            name="Andrew Garfiled"
            title="CTO of Mexant"
            image={Image5}
            />  
              {/*Slide 3*/}
             <Carosuelcomponent
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit cumque eaque ullam iste, quo mollitia!"
            name="Andrew Garfiled"
            title="CTO of Mexant"
            image={Image5}
            />
      </OwlCarousel>  
             </div>
          </div>
         
      </div>  
    </>
  );
};
export default Carousel;
