import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import HoverSpeechBubble from "../interactive/HoverSpeechBubble"

import planets from "/src/assets/sections/massive-multiplayer/planets.png"
import mmo_mouse from "/src/assets/mmo_mouse.png"

const MassiveMultiplayer = ({ x, y, width, height }) => {

    const data = useStaticQuery(graphql`
        query {
            legendFiles: allFile(
                filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/massive-multiplayer/legend" } }
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
            hoverFiles: allFile(
                filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/massive-multiplayer/hover" } }
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
        }
    `);

    const [imageVisibility, setImageVisibility] = useState({
        students: true,
        coordinates: false,
        players: false,
        spacetrade: false,
        trade: false,
        weather: false,
    });

    const imageVisibleArray = Object.keys(imageVisibility);

    // Checkboxes
    /*const handleCheckboxChange = (imageName) => {
        setImageVisibility((prevVisibility) => ({
            ...prevVisibility,
            [imageName]: !prevVisibility[imageName],
        }));
    };*/

    // Radio boxes
    const handleCheckboxChange = (selectedImageName) => {
        setImageVisibility((prevVisibility) => {
            const updatedVisibility = {};
            // Set all values to false
            imageVisibleArray.forEach((imageName) => {
                updatedVisibility[imageName] = false;
            });
            // Set the selected value to true
            updatedVisibility[selectedImageName] = true;
            return updatedVisibility;
        });
    };

    // Cutscene!

    const targetRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in the viewport
            // Perform the desired effect here
            console.log('Starting MassiveMultiplayer cutscene!');
            
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

    const [hasCutscenePlayed, setCutscenePlayed] = useState(false);

    function playCutscene() {
        setTimeout(() => { handleCheckboxChange('coordinates'); }, 1000);
        setTimeout(() => { handleCheckboxChange('players'); }, 2000);
        setTimeout(() => { handleCheckboxChange('spacetrade'); }, 3000);
        setTimeout(() => { handleCheckboxChange('trade'); }, 4000);
        setTimeout(() => { handleCheckboxChange('weather'); }, 5000);
        setTimeout(() => { handleCheckboxChange('students'); }, 6000);
        setTimeout(() => { setCutscenePlayed(true); }, 6000);
    }

    const getSrcForSpeechBubble = (num) => {
        return data.hoverFiles.nodes[num].childImageSharp.gatsbyImageData.images.fallback.src;
    }

    return (
        <div ref={targetRef} className="absolute bottom-0 left-0 right-0">
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href={planets}
                    x="0"
                    y="0"
                    width="1920"
                    height="1080"
                ></image>
                {data.legendFiles.nodes.map((file, i) => (
                    <image
                        key={i}
                        href={file.childImageSharp.gatsbyImageData.images.fallback.src}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        style={{ display: imageVisibility[file.name] ? 'block' : 'none' }}
                    ></image>
                ))}
                {!hasCutscenePlayed && (
                    <image
                        href={mmo_mouse}
                        x={250}
                        y={600}
                        width={64}
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 0; 0 100;"
                            dur="6000ms"
                            repeatCount="once"
                            fill="freeze"
                        />
                    </image>
                )}
                <HoverSpeechBubble
                    src={getSrcForSpeechBubble(0)}
                    bubble={{
                        width: 256,
                        height: 256,
                    }}
                    hitbox={{
                        width: 256,
                        height: 256,
                    }}
                    x={20}
                    y={190}
                />
                <HoverSpeechBubble
                    src={getSrcForSpeechBubble(1)}
                    bubble={{
                        width: 256,
                        height: 256,
                    }}
                    hitbox={{
                        width: 256,
                        height: 256,
                    }}
                    x={380}
                    y={520}
                />
                <HoverSpeechBubble
                    src={getSrcForSpeechBubble(2)}
                    bubble={{
                        width: 256,
                        height: 256,
                    }}
                    hitbox={{
                        width: 256,
                        height: 256,
                    }}
                    x={280}
                    y={800}
                />
                <HoverSpeechBubble
                    src={getSrcForSpeechBubble(3)}
                    bubble={{
                        width: 256,
                        height: 256,
                    }}
                    hitbox={{
                        width: 256,
                        height: 256,
                    }}
                    x={950}
                    y={750}
                />
            </svg>
            <div className="absolute bottom-1/4 left-0 text-lg p-8 m-8 flex flex-col text-left uppercase bg-[rgba(0,0,0,0.1)] rounded-md">
                {imageVisibleArray.map(imageStringId => (
                    <label key={imageStringId} className="cursor-pointer">
                        <input
                            type="checkbox"
                            checked={imageVisibility[imageStringId]}
                            onChange={() => handleCheckboxChange(imageStringId)}
                        />
                        {imageStringId}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default MassiveMultiplayer