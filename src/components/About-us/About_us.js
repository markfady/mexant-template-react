import React from "react";
import "./About_us.css";
import "../Business/Business.css";
export default function About_us() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="middle-content">
            <h5>About us</h5>
            <h2>Know Us Better</h2>
          </div>
          <div className="left-content">
          <ul>
                <li className="active">Web Design</li>
                <li>Graphics</li>
                <li>Web Coding</li>
              </ul>
            <div className="header">
              {/*Start Table side*/}
              <table>
                <thead>
                  <tr>
                    <th>Project title</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Client</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website Redesign</td>
                    <td>$1,500 to $2,200</td>
                    <td>2022 Dec 12</td>
                    <td>Web Biz</td>
                  </tr>
                  <tr>
                    <td>Website Renovation</td>
                    <td>$2,500 to $3,600</td>
                    <td>2022 Dec 10</td>
                    <td>Online Ads</td>
                  </tr>
                  <tr>
                    <td>Marketing Plan</td>
                    <td>$2,500 to $4,200</td>
                    <td>2022 Dec 8</td>
                    <td>Web Biz</td>
                  </tr>
                  <tr>
                    <td>All-new Website</td>
                    <td>$3,000 to $6,600</td>
                    <td>2022 Dec 2</td>
                    <td>Web Presence</td>
                  </tr>
                </tbody>
              </table>
              {/*End Table side*/}
              {/*Start idea side*/}
              <div className="idea">
                <h4>
                  Please tell us about your idea and how you want it to be
                </h4>
                <div className="idea-data">
                  <p>
                    You are allowed to use this template for your websites. <b>You
                    are NOT</b> allowed to redistribute the template ZIP file on any
                    other template websites.
                  </p>
                  <p>
                    Thank you for downloading and using our templates. Please
                    tell your friends about our website.
                  </p>
                  <div className="green">
                    <button>Discover More</button>
                  </div>
                </div>
              </div>
              {/*End idea side*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
