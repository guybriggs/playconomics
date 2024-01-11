import React, { useState } from 'react';

const InteractiveElement = ({ src, width, x, y }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };
  
    const handleMouseOut = () => {
        setIsHovered(false);
    };
    
    const elementStyles = isHovered ? { border: '1px solid black' } : { border: '1px solid red' };

    const isRotating = false;

    return (
      <svg width="100%" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 min-w-full min-h-full">
        <image x={x} y={y} width={width} href={src}>

        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="scale"
          values="1 1; 1.15 1.15; 1 1;"
          dur="1s"
          repeatCount="indefinite"
        />

        </image>
      </svg>
    );

}

export default InteractiveElement;