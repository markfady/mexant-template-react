/*Here we make the component called in slider.js to not repeat the classes and HTML code!*/ 
function SliderComponent (props) {
    return (
        <>
         <div className="swiper-slide">
            <div className={`slide-inner ${props.data , props.image}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="header-main">
                      <h1 className={`animate__animated animate__fadeInRight`} >{props.first} <span class="orangetext">{props.second}</span> {props.third} <br>
                       </br>&&nbsp;{props.fourth}&nbsp;
                      <span class="orangetext">{props.fifth}</span></h1>
                      <div className="line animate__animated animate__bounce animate__infinite"></div>
                      <p className='animate__animated animate__fadeInLeft'>
                      {props.text}
                      </p>
                      <div className="double-buttons mt-5">
                        <div className="green">
                          <button>Discover More</button>
                        </div>
                        <div className="orange pl-5">
                          <button>Contact US</button>
                        </div>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SliderComponent ;