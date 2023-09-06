import React from "react";
import "./Business.css";
export default function Business() {
  return (
    <>
      <div className="Business">
        <div className="container">
          <div className="content">
            <h1>
              Business <span>Solutions</span> and
              <br />
              <span>Crypto </span>Investments
            </h1>
            <div id="specialbuttons" className="double-buttons mt-5">
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
    </>
  );
}
