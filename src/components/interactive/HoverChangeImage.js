import React, { useState, useEffect } from 'react';

const HoverChangeImage = ({ src, width, x, y, altsrc }) => {

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout;
    if (isHovered) {
      timeout = setTimeout(() => {
        setIsHovered(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  return (
    <image
      x={x}
      y={y}
      width={width}
      height={width}
      href={isHovered ? altsrc : src}
      onMouseOver={handleMouseOver}
    />
  );
}

export default HoverChangeImage;
