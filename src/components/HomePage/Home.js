import image1 from "../../images/logo.png"
import Slider from "../Slider/Slider";
import './home.css';
function Home() {
  return (
    <> 
    {/* Start Header Area */}
    <header>
      <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav"> 
          <img className="pr-5" src={image1} alt="logo"/>
          <ul className="nav">
            <li className="active">Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Pages</li>
            <li>Testimonals</li>
            <li><a href="../Contact-US/Contact-US.js">Contact Support</a></li>
          </ul>
          </nav>
        </div>
      </div>
      </div>
    </header>
     {/* End Header Area */}
     {/* Start Landing Page */}
  <div>
  <Slider/>
  </div>
    </>
  )
}
export default Home;
