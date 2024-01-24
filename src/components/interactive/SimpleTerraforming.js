import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
                        quality: 100
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

  const handleTouchStart = () => {
    setIsHolding(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault(); // Prevent default behavior
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

    return (
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
    );
};

export default CounterComponent;