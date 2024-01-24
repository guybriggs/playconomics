import React, { useState } from 'react';

const HoverSquashStretch = ({ src, width, hitboxWidth, x, y }) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
        setIsHovered(true);
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            setIsHovered(false);
        }, 1500);
  };
  //const handleMouseOut = () => { setIsHovered(false); };

  let timeout = null;

  const hoverStyle = isHovered ? {
    opacity: 1,
    transform: `translateY(-${hitboxWidth}px)`,
  } : {
    opacity: 0.25,
    transform: `translateY(${hitboxWidth}px)`,
  };

  return (
    <>
      <rect
        fill="rgba(0,0,0,0.25)"
        x={x}
        y={y}
        width={width}
        height={width}
        style={hoverStyle}
        className="transition-all ease-out duration-300 pointer-events-none"
      >
      </rect>
      <image
        x={x}
        y={y}
        width={width}
        height={width}
        href={src}
        style={hoverStyle}
        className="transition-all ease-out duration-300 pointer-events-none"
      ></image>
      <rect
        fill="rgba(0,0,0,0.25)"
        x={x+width/2-hitboxWidth/2}
        y={y+width/2-hitboxWidth}
        width={hitboxWidth}
        height={hitboxWidth*2}
        onMouseOver={handleMouseOver}
      >
      </rect>
    </>
  );

}

export default HoverSquashStretch;