import React from 'react'
import './About_us.css'
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
                <div className="header">
                    <ul>
                        <li className='active'>Web Design</li>
                        <li>Graphics</li>
                        <li>Web Coding</li>
                    </ul>
                    <table>
                    <thead>
                        <tr>
                        <th>Project title</th>
                        <th>Budget</th>
                        <th>Deadline</th>
                        <th>Client</th>
                        </tr>
                    </thead>
                    <hr/>
                    <tbody>
                        <tr>
                            <td>Website Redesign</td>
                            <td>$1500 to $2,200</td>
                            <td>2022 Dec 12</td>
                            <td>Web Biz</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
   </>
  )
}
