import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import HoverSpeechBubble from "../interactive/HoverSpeechBubble"

import planets from "/src/assets/sections/massive-multiplayer/planets.png"
import click_gif from "/src/assets/sections/massive-multiplayer/click_gif.gif"
//import mmo_mouse from "/src/assets/mmo_mouse.png"
import { Parallax } from 'react-scroll-parallax'

const MassiveMultiplayer = ({ translateX, translateY }) => {

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
            cloudFiles: allFile(
                filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/massive-multiplayer/clouds" } }
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
        agents: false,
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

            if (!imageVisibility[selectedImageName]) {
                // Already true
                // Set the selected value to true
                updatedVisibility[selectedImageName] = true;
            }
            return updatedVisibility;
        });
        setShowClickGif(false);
    };

    // Hide click_gif

    const [showClickGif, setShowClickGif] = useState(true);

    // Cutscene!

    const targetRef = useRef(null);

    /*useEffect(() => {
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
        setTimeout(() => { setCutscenePlayed(true); }, 6000);
    }*/

    const getSrcForSpeechBubble = (num) => {
        return data.hoverFiles.nodes[num].childImageSharp.gatsbyImageData.images.fallback.src;
    }

    return (
        <div ref={targetRef} className="absolute bottom-0 left-0 right-0">
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 right-0 z-0"
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
                        x={0}
                        y={0}
                        width={1920}
                        height={1080}
                        style={{ display: imageVisibility[file.name] ? 'block' : 'none' }}
                    ></image>
                ))}
                {/*{!hasCutscenePlayed && (
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
                )}*/}
            </svg>
            <Parallax
                translateX={multiplyValues(translateX, 3)}
                translateY={multiplyValues(translateY, 0.5)}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    width="100%"
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                >
                        <image
                            href={returnImageData(data.cloudFiles.nodes, "0_cloud_BG.png").gatsbyImageData.images.fallback.src}
                            x={550}
                            y={100}
                            width={512}
                            height={512}
                        ></image>
                </svg>
            </Parallax>
            <Parallax
                translateX={multiplyValues(translateX, 1)}
                translateY={multiplyValues(translateY, 0.5)}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    width="100%"
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <image
                        href={returnImageData(data.cloudFiles.nodes, "1_cloud_MG.png").gatsbyImageData.images.fallback.src}
                        x={650}
                        y={300}
                        width={512}
                        height={512}
                    ></image>
                </svg>
            </Parallax>
            <Parallax
                translateX={multiplyValues(translateX, -3)}
                translateY={multiplyValues(translateY, 0.5)}
                className="absolute bottom-0 left-0 right-0"
            >
                <svg
                    width="100%"
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <image
                        href={returnImageData(data.cloudFiles.nodes, "2_cloud_FG.png").gatsbyImageData.images.fallback.src}
                        x={450}
                        y={400}
                        width={1024}
                        height={1024}
                    ></image>
                </svg>
            </Parallax>
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 right-0"
            >
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

            <div className="absolute bottom-32 md:bottom-0 left-0 right-0 flex justify-center md:justify-start md:pl-8 z-50">
                <div className="relative min-w-[300px] translate-y-[-50%] md:translate-y-[-100%] lg:translate-y-[-150%] h-auto grid grid-cols-2 p-8 text-left uppercase bg-[rgba(0,0,0,0.15)] rounded-md">
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
                    {showClickGif && (
                        <img src={click_gif} alt="click_gif" width="50" className="absolute top-[1px] left-[15px] pointer-events-none"></img>
                    )}
                </div>
            </div>
        </div>
    );

    // Functions

    function returnImageData(array, string) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].relativePath.includes(string)) {
                return array[i].childImageSharp;
            }
        }
        return null;
    }
    
    function multiplyValues(arr, num) {
        const doubledArr = [];
        for (const value of arr) {
            // Extract the numeric part and convert it to an integer
            const numericValue = parseInt(value);
        
            // Check if the numericValue is a valid number
            if (!isNaN(numericValue)) {
            // Double the numeric value and append 'px'
            doubledArr.push((numericValue * num) + 'px');
            } else {
            // If the value couldn't be parsed as a number, add it as is
            doubledArr.push(value);
            }
        }
        return doubledArr;
    }
}

export default MassiveMultiplayer