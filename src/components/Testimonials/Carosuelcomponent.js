
import React from 'react'
import './Carousel.css'
export default function Carosuelcomponent(props) {
  return (
<>
<div className="item">
            <i class="fa fa-quote-left"/>
            <p>{props.text}</p>
              <h4>{props.name}</h4>
              <p>{props.title}</p>
              <img src={props.image} alt='Andrew'/>
            </div>
</>
  )
}
