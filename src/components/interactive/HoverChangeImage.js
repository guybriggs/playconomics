import React, { useState } from 'react';

const HoverChangeImage = ({ src, width, x, y, altsrc }) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => { setIsHovered(true); };
  const handleMouseOut = () => { setIsHovered(false); };

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
        <image x={x} y={y} width={width} href={altsrc} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>
      )}
    </svg>
  );

}

export default HoverChangeImage;