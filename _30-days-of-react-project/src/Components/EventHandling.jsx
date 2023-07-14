import React from "react";
import { useEffect, useState } from "react";

const EventHandling = () => {

  const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0})
  const [boxCoordinates, setBoxCoordinates] = useState({ left: 0, top: 0 })

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
        x:event.clientX,
        y:event.clientY
    });
  }

  const mouseOverHandler = () => {
    setBoxCoordinates({
      
      left: Math.random() * (window.innerWidth - 100),
      top: Math.random() * (window.innerHeight - 100)
    });
  };

  useEffect(()=>{
    window.addEventListener('mousemove', mouseMoveHandler);
    return(()=>{
        window.removeEventListener('mousemove', mouseMoveHandler);
    })
  }, [])

  useEffect(()=>{
    window.addEventListener('mouseenter', mouseOverHandler);
    return(()=>{
        window.removeEventListener('mouseenter', mouseOverHandler);
    })
  }, [])
  
    return (
      <div className='wrapper'>
        <h2>Event Handling</h2>
        <p className="event-text">Mouse Coordinates: x = {mouseCoordinates.x}, y={mouseCoordinates.y}</p>
        <div onMouseEnter={mouseOverHandler}>
        <p className="moving-box" style={{ left: boxCoordinates.left, top: boxCoordinates.top }} >Can't catch me!</p>
        </div>
      </div>
    );
  };

export default EventHandling