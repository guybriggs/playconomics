import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HoverSquashStretch from "../interactive/HoverSquashStretch";
import HoverChangeImage from "../interactive/HoverChangeImage";
import HoverSpeechBubble from "../interactive/HoverSpeechBubble";

const CounterComponent = ({ x, y, width, height }) => {

  const data = useStaticQuery(graphql`
    query {
        terraformFiles: allFile(
            filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/new-worlds/terraform" } }
        ) {
            nodes {
                name
                relativePath
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH,
                        placeholder: BLURRED,
                        quality: 10
                    )
                }
            }
        }
        speechFiles: allFile(
            filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/new-worlds/speech" } }
        ) {
            nodes {
                name
                relativePath
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH,
                        placeholder: BLURRED,
                        quality: 10
                    )
                }
            }
        }
    }
    `);

    const totalLength = data.terraformFiles.nodes.length-1;
    const [count, setCount] = useState(totalLength);
    const [isHolding, setIsHolding] = useState(false);

  const increment = () => {
    setCount(Math.max(0, count - 1));
  };

  const decrement = () => {
    setCount(Math.min(totalLength, count + 1));
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsHolding(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (isHolding) {
      increment();
    }
    setIsHolding(false);
  };

  useEffect(() => {
    let timeout;

    const handleHold = () => {
      timeout = setTimeout(() => {
        decrement();
        setIsHolding(false); // Reset holding state after decrementing
      }, 1000); // Decrease after 1 second

      return () => clearTimeout(timeout);
    };

    if (isHolding) {
      handleHold();
    }

    return () => clearTimeout(timeout);
  }, [isHolding]);

    const src = data.terraformFiles.nodes[count].childImageSharp.gatsbyImageData.images.fallback.src;

    function addOtherElements(index) {

        const getSrcForSpeechBubble = (num) => {
            return data.speechFiles.nodes[num].childImageSharp.gatsbyImageData.images.fallback.src;
        }

        const bubbleWidth = 512;
        const hitboxWidth = bubbleWidth/8;

        switch (index) {
            case 0:
                return <HoverSpeechBubble src={getSrcForSpeechBubble(index)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={1000} y={250} />;
            case 9:
                return (
                    <>
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(10)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                    </>
                );
            case 10:
                return (
                    <>
                        <HoverSpeechBubble src={getSrcForSpeechBubble(11)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(12)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(13)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(14)} width={bubbleWidth} hitboxWidth={hitboxWidth} x={0} y={0} />
                    </>
                );
            default:
                return <rect x={0} y={0} width={100} height={100} />;
        }
        
    }

    return (
        <div className="absolute bottom-0 left-0 right-0">
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href={src}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleTouchStart} // Fallback for desktop
                    onMouseUp={handleTouchEnd} // Fallback for desktop
                ></image>
                {/*
                {addOtherElements(count)}
                */}
            </svg>
        </div>
    );
};

export default CounterComponent;