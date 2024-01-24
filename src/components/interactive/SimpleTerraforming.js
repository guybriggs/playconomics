import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HoverSquashStretch from "../interactive/HoverSquashStretch";
import HoverChangeImage from "../interactive/HoverChangeImage";
import HoverSpeechBubble from "../interactive/HoverSpeechBubble";

import shark from "/src/assets/sections/new-worlds/shark.gif"
import shark2 from "/src/assets/sections/new-worlds/shark2.gif"
import shark3 from "/src/assets/sections/new-worlds/shark3.gif"

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
                        quality: 90
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
                        quality: 50
                    )
                }
            }
        }
    }
    `);

    const sortNodesBySuffix = (array) => {
        array.sort((a, b) => {
            const numA = parseInt(a.name.match(/\d+/)[0]);
            const numB = parseInt(b.name.match(/\d+/)[0]);
            return numA - numB;
        });

        return array;
    }

    const totalLength = data.terraformFiles.nodes.length-1;
    const [count, setCount] = useState(0);
    const [isHolding, setIsHolding] = useState(false);

  const increment = () => {
    setCount(Math.min(totalLength, count + 1));
  };

  const decrement = () => {
    setCount(Math.max(0, count - 1));
  };

  const handleTouchStart = (e) => {
    setIsHolding(true);
  };

  const handleTouchEnd = (e) => {
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

    data.terraformFiles.nodes = sortNodesBySuffix(data.terraformFiles.nodes);
    data.speechFiles.nodes = sortNodesBySuffix(data.speechFiles.nodes);

    const src = data.terraformFiles.nodes[count].childImageSharp.gatsbyImageData.images.fallback.src;

    function addOtherElements(index) {

        const getSrcForSpeechBubble = (num) => {
            return data.speechFiles.nodes[num].childImageSharp.gatsbyImageData.images.fallback.src;
        }

        const bubble = {
            width: 512,
            height: 512,
        }

        const hitbox = {
            width: 30,
            height: 60,
        }

        const ClickHitbox = ({ x, y }) => {
            return (
                <>
                    <ellipse
                        fill="rgba(0,255,0,0)"
                        cx={x}
                        cy={y}
                        rx={100}
                        ry={60}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleTouchStart} // Fallback for desktop
                        onMouseUp={handleTouchEnd} // Fallback for desktop
                        className="cursor-pointer"
                    ></ellipse>
                    <HoverSquashStretch src={shark} width={100} x={1050} y={420} />
                    <HoverSquashStretch src={shark2} width={100} x={1350} y={450} />
                    <HoverSquashStretch src={shark3} width={100} x={1300} y={600} />
                </>
            );
        }

        switch (index) {
            case 0:
                return (
                    <>
                        <ClickHitbox x={1255} y={540} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={495} />
                    </>
                );
            case 1:
                return (
                    <>
                        <ClickHitbox x={1255} y={540} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={495} />
                    </>
                );
            case 2:
                return (
                    <>
                        <ClickHitbox x={1255} y={540} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={490} />
                    </>
                );
            case 3:
                return (
                    <>
                        <ClickHitbox x={1255} y={540} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={480} />
                    </>
                );
            case 4:
                return (
                    <>
                        <ClickHitbox x={1255} y={470} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={430} />
                    </>
                );
            case 5:
                return (
                    <>
                        <ClickHitbox x={1255} y={410} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1240} y={370} />
                    </>
                );
            case 6:
                return (
                    <>
                        <ClickHitbox x={1255} y={290} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1245} y={240} />
                    </>
                );
            case 7:
                return (
                    <>
                        <ClickHitbox x={1255} y={260} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1235} y={210} />
                    </>
                );
            case 8:
                return (
                    <>
                        <ClickHitbox x={1255} y={260} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(index)} bubble={bubble} hitbox={hitbox} x={1175} y={215} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(9)} bubble={bubble} hitbox={hitbox} x={1295} y={240} />
                    </>
                );
            case 9:
                return (
                    <>
                        <ClickHitbox x={1255} y={260} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(10)} bubble={bubble} hitbox={hitbox} x={1170} y={210} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(11)} bubble={bubble} hitbox={hitbox} x={1200} y={245} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(12)} bubble={bubble} hitbox={hitbox} x={1300} y={240} />
                        <HoverSpeechBubble src={getSrcForSpeechBubble(13)} bubble={bubble} hitbox={hitbox} x={1240} y={100} />
                    </>
                );
            default:
                return <rect x={0} y={0} width={100} height={100} />;
        }
        
    }

    return (
        <div onContextMenu={(e) => { e.preventDefault(); }} className="md:absolute bottom-0 left-0 right-0 w-[200vh] translate-x-[-10%]">
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
                ></image>
                {addOtherElements(count)}
            </svg>
        </div>
    );
};

export default CounterComponent;