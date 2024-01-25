import React, { useState } from 'react';

const HoverSpeechBubble = ({ src, bubble, hitbox, x, y }) => {

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

  let hoverStyle = isHovered ? {
    opacity: 1,
    transform: `translateY(-100px)`,
  } : {
    opacity: 0,
    transform: `translateY(0px)`,
  };

  if (window.innerWidth <= 768) {
    hoverStyle = {
      opacity: 1,
      transform: `translateY(-100px)`,
    }
  }

  return (
    <>
      <rect
        fill="rgba(0,0,0,0)"
        x={x - bubble.width/2 + hitbox.width/2}
        y={y - bubble.height/2 + hitbox.height/2}
        width={bubble.width}
        height={bubble.height}
        className="pointer-events-none"
      >
      </rect>
      <image
        x={x - bubble.width/2 + hitbox.width/2}
        y={y - bubble.height/2 + hitbox.height/2}
        width={bubble.width}
        height={bubble.height}
        href={src}
        style={hoverStyle}
        className="transition-all ease-out duration-300 pointer-events-none"
      ></image>
      <rect
        fill="rgba(0,0,0,0)"
        x={x}
        y={y}
        width={hitbox.width}
        height={hitbox.height}
        onMouseOver={handleMouseOver}
      >
      </rect>
    </>
  );

}

export default HoverSpeechBubble;