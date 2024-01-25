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

  const activeStyle = {
    opacity: 1,
    transform: `translateY(-100px)`,
  }

  const inactiveStyle = {
    opacity: 0,
    transform: `translateY(0px)`,
  }

  let hoverStyle = isHovered ? activeStyle : inactiveStyle;

  if (window.innerWidth <= 768) hoverStyle = activeStyle; // Always-on speech bubble when window is small (mobile)

  // TODO remove this obnoxious hack
  // There's nothing more permanent than a working temporary solution
  if (src.slice(src.length-21, src.length) === 'terraform_speech1.png') hoverStyle = activeStyle;

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