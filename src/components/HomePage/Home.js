import image1 from "../../images/logo.png";
import Slider from "../Slider/Slider";
import Services from "../Services/Services";
import "./home.css";
import Business from "../Business/Business";
import About_us from "../About-us/About_us";
import Financial from "../Financial/Financial";
import Carousel from "../Testimonials/Carousel.js";
import Companies from "../Companies/Companies";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <>
      {/* Start Header Area */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <img className="pr-5" src={image1} alt="logo" />
                <ul className="nav">
                  <li className="active">Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Pages</li>
                  <li>Testimonals</li>
                  <li>
                    <a href="../Contact-US/Contact-US.js">Contact Support</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}
      {/* Start Slider Page */}
      <section>
        <Slider />
      </section>
      {/* End Slider Page */}
      {/*Start Services Page*/}
      <section>
        <div className="Services">
          <div className="container">
            <div className="row">
              <Services
                title="Css Templates"
                content="TemplateMo website is the best for you to explore and download free website templates."
                logo="fa-box-archive"
              />
              <Services
                title="Html 5 web pages"
                content="Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs."
                logo="fa-cloud"
              />
              <Services
                title="Responisve Designs"
                content="All of our CSS templates are 100% free to use for commercial or business websites."
                logo="fa-charging-station"
              />
              <Services
                title="Mobile and Tablet Ready!"
                content="Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility. "
                logo="fa-suitcase"
              />
              <Services
                title="Fast Customer Support"
                content="Do not be hesitated to contact us if you have any question or concern about our templates."
                logo="fa-archway"
              />
              <Services
                title="Fully Customizable"
                content="If you have any idea or suggestion about new templates, feel free to let us know."
                logo="fa-puzzle-piece"
              />
            </div>
          </div>
          /
        </div>
      </section>
      {/*End Services Page*/}
      {/*Start Business Solutions*/}
      <section>
        <Business />
      </section>
      {/*End Business Solutions*/}
      {/*Start About-us*/}
      <section>
        <About_us />
      </section>
      {/*End About-us */}
      {/*Start Financial*/}
      <section>
        <Financial />
      </section>
      {/*End Financial*/}
      {/* Start Testimonials */}
      <section>
        <Carousel />
      </section>
      {/*End Testimonials*/}

      {/* Start Companies*/}
      <section>
        <Companies/>
      </section>
      {/* End Companies*/}
      {/*Start Footer*/}
      <footer>
        <Footer/>
      </footer>
      {/*End Footer*/}
    </>
  );
}
export default Home;
