import React, { useState, useRef } from 'react';

import society_island1 from '/src/assets/society_island1.png';
import society_island2 from '/src/assets/society_island2.png';
import society_island3 from '/src/assets/society_island3.png';

const ClickComponent = () => {

  const islandArray = [
    society_island1,
    society_island2,
    society_island3
  ];

  const [isHeld, setIsHeld] = useState(false);
  const [imageIndex, setImageIndex] = useState(1);
  const timeoutRef = useRef(null);

  const handleMouseDown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHeld(true);
      setImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }, 1000);
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      if (!isHeld) {
        // If the mouse was held for 1 second or more, don't trigger the regular click function
        setImageIndex((prevIndex) => Math.min(islandArray.length-1, prevIndex + 1));
      }
    }
    setIsHeld(false);
  };




  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="absolute bottom-0 left-0 w-screen cursor-pointer"
    >
      <img
        src={islandArray[imageIndex]} // Update the path to your actual image path
        alt={`Island ${imageIndex}`}
        style={{ maxWidth: '100%', maxHeight: '100%' }} 
      />
    </div>
  );
};

export default ClickComponent;
