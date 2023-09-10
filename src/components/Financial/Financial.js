import React from "react";
import "./Financial.css";
import image5 from "../../images/calculator-image.png";
export default function Financial(){
  return (
    <>
      <div className="Financial">
        <div className="container">
          <div className="content">
            <div className="woman-image">
              <img src={image5} alt="woman" />
            </div>
            <div className="plan-details">
              <h6>Your freedom</h6>
              <h4>Get a Financial Plan</h4>
              <form action="" method="post">
                <div className="row">
                <div className="col-lg-6">
                <label for="name">Your Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="col-lg-6">
                <label for="email">Your Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="col-lg-12">
                <label for="subject">subject</label>
                <input type="text" id="subject" />
                </div>
            <div className="col-lg-12">
            <label for="reason">Your Reason</label>
                <select>
                <option>Choose an option</option>
                  <option>online Banking</option>
                  <option>Financial Control</option>
                  <option>Yearly Profit</option>
                  <option>Crypto Investment</option>
                </select>
            </div>
            </div>
                <input type="submit" value={"Submit Now"}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
