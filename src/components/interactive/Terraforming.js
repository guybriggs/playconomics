import React, { useState, useRef } from 'react';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import HoverSpeechBubble from "../interactive/HoverSpeechBubble";

import forest_speechBubble from '/src/assets/forest_speechBubble.png';

const ClickComponent = ({ data }) => {

  const [isHeld, setIsHeld] = useState(false);
  const [imageIndex, setImageIndex] = useState(1);
  const timeoutRef = useRef(null);

  //const basePath = 'sections/new-worlds/terraform/';
  //const targetPath = `${basePath}terraform${imageIndex+1}.png`;

  let terraformSrc = data.nodes.find(e => e.relativePath === `sections/new-worlds/terraform/terraform${imageIndex+1}.png`);
  terraformSrc = terraformSrc.childImageSharp.gatsbyImageData.images.fallback.src;
  
  let bubbleSrc = data.nodes.find(e => e.relativePath === `sections/new-worlds/speech/terraform_speech${imageIndex+1}.png`);
  bubbleSrc = bubbleSrc.childImageSharp.gatsbyImageData.images.fallback.src;
  console.log(bubbleSrc);

  const totalStates = 10;

  const handleMouseDown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHeld(true);
      setImageIndex((prevIndex) => Math.max(0, prevIndex - 1));
    }, 1000);
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      if (!isHeld) {
        // If the mouse was held for 1 second or more, don't trigger the regular click function
        setImageIndex((prevIndex) => Math.min(totalStates-1, prevIndex + 1));
      }
    }
    setIsHeld(false);
  };

  return (
    <>
      <svg width="100%" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 right-0 border-2 z-30 pointer-events-none">
        <HoverSpeechBubble src={bubbleSrc} width={150} x={0} y={0} />
      </svg>

      <div className="absolute bottom-0 left-0 w-screen">
        <img 
          src={terraformSrc}
          alt={`Island ${imageIndex}`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      </div>
    </>
  );
};

export default ClickComponent;