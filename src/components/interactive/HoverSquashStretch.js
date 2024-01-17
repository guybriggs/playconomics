import React, { useState } from 'react';

const HoverSquashStretch = ({ src, width, x, y }) => {

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => { setIsHovered(true); };
  const handleMouseOut = () => { setIsHovered(false); };

  if (isHovered) {
    return (
      <image
          x={x}
          y={y}
          width={width}
          href={src}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
      >
          <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="scale"
              values="1 1; 1.5 1; 1 1;"
              dur="300ms"
              repeatCount="indefinite"
          />
      </image>
    );
  } else {
    return (
      <image
        x={x}
        y={y}
        width={width}
        height={width}
        href={src}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></image>
    );
  }



}

export default HoverSquashStretch;