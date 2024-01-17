import React, { useState } from 'react';

const InteractiveElement = ({ src, width, x, y, interactionType, alternateSrc }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
      setIsHovered(true);
  };

  const handleMouseOut = () => {
      setIsHovered(false);
  };

  if (interactionType == 'swap') {
    
    return (
      <svg
        width="100%"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
      >
        {isHovered ? (
          <image x={x} y={y} width={width} href={src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>
        ) : (
          <image x={x} y={y} width={width} href={alternateSrc} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>
        )}
      </svg>
    );

  } else if (interactionType == 'hover') {
  
    return (
      <svg
        width="100%"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
      >
        {isHovered ? (
          <image x={x} y={y} width={width} href={src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1 1; 1.5 1; 1 1;"
              dur="300ms"
              repeatCount="indefinite"
            />
          </image>
        ) : (
          <image x={x} y={y} width={width} href={src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>
        )}
      </svg>
    );
  
  } else {

    return (
      <svg
        width="100%"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
      >
        <image x={x} y={y} width={width} href={src}></image>
      </svg>
    );

  }

}

export default InteractiveElement;