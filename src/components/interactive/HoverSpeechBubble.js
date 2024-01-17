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
        paddingTop: '0px',
        paddingBottom: '50px',
    } : {
        opacity: 0,
        paddingTop: '50px',
        paddingBottom: '0px',
    };

  return (
    <svg
      width="100%"
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 transition-all"
      style={hoverStyle}
    >
        <image
            x={x}
            y={y - width*2}
            width={width}
            height={width*3}
            href={src}
            onMouseOver={handleMouseOver}
        >

        </image>
    </svg>
  );

}

export default HoverSquashStretch;