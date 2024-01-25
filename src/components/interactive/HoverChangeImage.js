import React, { useState } from 'react';

const HoverChangeImage = ({ src, width, x, y, altsrc }) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => { setIsHovered(true); };
  const handleMouseOut = () => { setIsHovered(false); };

  if (isHovered) {
    return <image x={x} y={y} width={width} height={width} href={altsrc} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>;
  } else {
    return <image x={x} y={y} width={width} height={width} href={src} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></image>;
  }

}

export default HoverChangeImage;