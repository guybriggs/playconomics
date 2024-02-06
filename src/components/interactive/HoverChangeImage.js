import React, { useState } from 'react';

const HoverChangeImage = ({ src, width, x, y, altsrc }) => {

  const [isHovered, setIsHovered] = useState(false);
  let timeout;
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

  if (isHovered) {
    return <image x={x} y={y} width={width} height={width} href={altsrc} onMouseOver={handleMouseOver}></image>;
  } else {
    return <image x={x} y={y} width={width} height={width} href={src} onMouseOver={handleMouseOver}></image>;
  }

}

export default HoverChangeImage;