import React, { useState } from 'react';

const HoverSquashStretch = ({ src, width, x, y }) => {

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
    transform: 'translateY(-50px)',
  } : {
    opacity: 0,
    transform: 'translateY(0px)',
  };

  return (
    <image
      x={x}
      y={y}
      width={width}
      height={width}
      href={src}
      onMouseOver={handleMouseOver}
      style={hoverStyle}
      className="transition-all ease-out duration-300"
    ></image>
  );

}

export default HoverSquashStretch;