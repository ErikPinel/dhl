import React from 'react'
import '../App.css';

let classContainer;
export const EventContainer = ({side,event,last}) => {
    last? classContainer="lastContainer":classContainer="container";
  return (
    <div class={`${classContainer} ${side}`}>
    <div class="content">
      <h2>{event.timestamp}</h2>
      <h3>{event.location?.address?.addressLocality&&event.location.address?.addressLocality}</h3>
      <p>{event.description}</p>
      32
    </div>
  </div>
  )
}
