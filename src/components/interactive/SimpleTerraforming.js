import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HoverSquashStretch from "../interactive/HoverSquashStretch";
import HoverSpeechBubble from "../interactive/HoverSpeechBubble";

import shark from "/src/assets/sections/new-worlds/shark.gif"
import shark2 from "/src/assets/sections/new-worlds/shark2.gif"
import shark3 from "/src/assets/sections/new-worlds/shark3.gif"

import splash from "/src/assets/sections/new-worlds/splash.gif"
//import splash_once from "/src/assets/sections/new-worlds/splash_once.gif"
import mouse_shovel_wobble from "/src/assets/sections/new-worlds/mouse_shovel_wobble.gif"

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
            handleClick();
        }
        setIsHolding(false);
    };

    useEffect(() => {
        let timeout;

        const handleHold = () => {
            timeout = setTimeout(() => {
                decrement();
                handleClick();
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

        const ClickHitbox = ({ index, x, y }) => {
            return (
                <>
                    {isHolding && (
                        <>
                            <mask id="maskCircle" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                                <rect width="1" height="1" fill="white" />
                                <circle cx="0.5" cy="0.5" r="0.4" fill="black" />
                            </mask>

                            <ellipse
                                mask="url(#maskCircle)"
                                cx={x}
                                cy={y}
                                rx="100"
                                ry="60"
                                fill="rgba(255,255,255,0.25)"
                            ></ellipse>
                        </>
                    )}
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

    //////// //////// //////// //////// //////// //////// //////// //////// 
    // Cutscene start
    //////// //////// //////// //////// //////// //////// //////// //////// 

    const [hasCutscenePlayed, setCutscenePlayed] = useState(false);

    function playCutscene() {
        let currentCount = count;

        function incrementEmbedded() {
            // No protections for lower than zero values.
            setCount(Math.min(totalLength, currentCount + 1));
            currentCount++;
            handleClick(); // Play splash animation
        }

        setTimeout(() => { incrementEmbedded(); }, 800);
        setTimeout(() => { incrementEmbedded(); }, 1600);
        setTimeout(() => { incrementEmbedded(); }, 1800);
        setTimeout(() => { setCutscenePlayed(true); }, 2800);
    }

    const targetRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in the viewport
            // Perform the desired effect here
            console.log('Starting SimpleTerraforming cutscene!');
            
            if (!hasCutscenePlayed) {
                playCutscene();
            }
            
            // You can also remove the observer if you only want the effect to occur once
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 }); // Adjust the threshold as needed
  
      // Start observing the target element
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Cleanup the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    //////// //////// //////// //////// //////// //////// //////// //////// 
    // Cutscene end
    //////// //////// //////// //////// //////// //////// //////// //////// 




    // Splash gif
    const [showSplashGif, setShowSplashGif] = useState(false);

    const handleClick = () => {
      setShowSplashGif(true);
  
      setTimeout(() => {
        setShowSplashGif(false);
      }, 500);
    };

    const SplashGif = () => {
        return (
            <image
                key={showSplashGif}
                href={splash}
                x={1000}
                y={300}
                width={512}
            ></image>
        );
    };



    return (
        <div ref={targetRef} onContextMenu={(e) => { e.preventDefault(); }} className="w-[200vh] translate-x-[-10%] md:w-auto md:translate-x-0 md:absolute bottom-0 left-0 right-0">
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
                {!hasCutscenePlayed && (
                    <image
                        href={mouse_shovel_wobble}
                        x={1250}
                        y={550}
                        width={64}
                    ></image>
                )}
                {showSplashGif && <SplashGif />}
                {addOtherElements(count)}
            </svg>
        </div>
    );
};

export default CounterComponent;