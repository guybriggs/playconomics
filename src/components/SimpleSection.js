import React from "react"
import { Parallax } from 'react-scroll-parallax'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import WaveBackground from "./WaveBackground"

//import ScrollVideo from "../components/ScrollVideo"

// Video

/*import play2024_trailer from "/src/assets/play2024_trailer.mp4"
import Presence from '/src/assets/Presence.mp4'
import OneGameManySubjectsAnimLQ from '/src/assets/OneGameManySubjectsAnimLQ.mp4'
import ManySubjectsLonger from '/src/assets/ManySubjectsLonger.mp4'
import SmallTallCropped from '/src/assets/sections/new-worlds/SmallTallCropped.mp4'
import FullSizeTerraforming from '/src/assets/sections/new-worlds/FullSizeTerraforming3.mp4'
import Terraforming_Background from '/src/assets/sections/new-worlds/FullSizeTerraforming_Lower.mp4'*/

// Interactive

import StaticImage from "./interactive/StaticImage"
import HoverSquashStretch from "./interactive/HoverSquashStretch"
import HoverChangeImage from "./interactive/HoverChangeImage"
import HoverSpeechBubble from "./interactive/HoverSpeechBubble"
//import SimpleTerraforming from "./interactive/SimpleTerraforming"
import MassiveMultiplayer from "./interactive/MassiveMultiplayer"
import AppleIsland from "./interactive/AppleIsland"

// Images

//import forest_MG_static_2 from '/src/assets/sections/presence/forest_MG_static_2.png'
import fire_anim from '/src/assets/fire_anim.gif'
import forest_speechBubble from '/src/assets/forest_speechBubble.png'
/*import trees_BG from '/src/assets/sections/presence/trees_BG.gif'
import trees_MG from '/src/assets/sections/presence/trees_MG.gif'
import trees_FG from '/src/assets/sections/presence/trees_FG.gif'*/

import worker_whistling from '/src/assets/sections/many-subjects/worker_whistling.gif'
import doctor_idle from '/src/assets/sections/many-subjects/doctor_idle.gif'
import doctor_needle from '/src/assets/sections/many-subjects/doctor_needle.gif'
import worker_sick_idle from '/src/assets/sections/many-subjects/worker_sick_idle.gif'
import worker_sick_cough from '/src/assets/sections/many-subjects/worker_sick_cough.gif'
/*import furnace from '/src/assets/sections/many-subjects/furnace.gif'
import barrel1 from '/src/assets/sections/many-subjects/barrel1.gif'
import barrel2 from '/src/assets/sections/many-subjects/barrel2.gif'
import barrel_FG from '/src/assets/sections/many-subjects/barrel_FG.gif'
import Smog from '/src/assets/sections/many-subjects/Smog.gif'*/

const SimpleSection = ({ props, index, children }) => {

    //Colours

    const colourArray = [
        {
            main: '#a5ca2f',
            secondary: '#60d0dd',
        },
        {
            main: '#2e2e2e',
            secondary: '#d3f077',
        },
        {
            main: '#35b3c2', // #2BA8C4
            secondary: '#65bcc0',
        },
        {
            main: '#3d5356',
            secondary: '#4b686c',
        },
        {
            main: '#1c6e7a',
            secondary: '#287580',
        },
        {
            main: '#1f5262',
            secondary: '#235f72',
        },
        {
            main: '#19414d',
            secondary: '#1c4652',
        },
        {
            main: '#152530',
            secondary: '#1f3747',
        },
        {
            main: '#171e27',
            secondary: '#1c2530',
        },
        {
            main: '#13161a',
            secondary: '#1f262d',
        }
    ];

    //G: Images, colours, parallax all hard-coded due to time constraints

    //Cleanup

    if (index === undefined) index = colourArray.length-1;

    //if (props !== undefined) console.log(props.nodes);

    //Images

    const imageArray = [
        {
            static: [
                { url: 'sections/presence/forest_BG_static.png' },
                { url: 'sections/presence/forest_MG_combined_static.png' },
                { url: 'sections/presence/forest_FG_static_wider.png', isWider: true },
            ],
            interactive: [
                {
                    interactionType: 'SquashStretch',
                    src: fire_anim,
                    width: 150,
                    x: 1460,
                    y: 540,
                    zLevel: 2,
                },
                {
                    interactionType: 'SpeechBubble',
                    src: forest_speechBubble,
                    bubble: {
                        width: 276,
                        height: 174,
                    },
                    hitbox: {
                        width: 100,
                        height: 200,
                    },
                    x: 1570,
                    y: 450,
                    zLevel: 1,
                },
            ]
        },
        {
            static: [
                { url: 'sections/many-subjects/Window_static.png', zLevel: -0.5 },
                { url: 'sections/many-subjects/inside_MG_static.png' },
                { url: 'sections/many-subjects/Smog_static_wider.png', isWider: true },
            ],
            interactive: [
                {
                    interactionType: "StaticImage",
                    src: worker_whistling,
                    width: 421,
                    height: 421,
                    x: 300,
                    y: 50,
                    zLevel: 1,
                },
                {
                    interactionType: "ChangeImage",
                    src: doctor_idle,
                    altsrc: doctor_needle,
                    width: 348,
                    height: 348,
                    x: 200,
                    y: 350,
                },
                {
                    interactionType: "ChangeImage",
                    src: worker_sick_idle,
                    altsrc: worker_sick_cough,
                    width: 356,
                    height: 356,
                    x: 500,
                    y: 400,
                }
            ]
        },
        {
            static: [
                { url: 'sections/new-worlds/worlds_BG2.png', zLevel: -1 },
                { url: 'sections/new-worlds/worlds_BG.png', zLevel: -0.5 },
                { url: 'sections/new-worlds/FullSizeTerraforming_Lower_static.png', zLevel: 1, isWider: true },
            ],
            interactive: [

            ]
        },
        {
            static: [
                { url: 'sections/massive-multiplayer/stars.png' },
            ],
            interactive: [

            ]
        }
    ];
    
    const imageIndex = index % imageArray.length;
    let imagesToDraw = imageArray[imageIndex].static;
    let interactiveToDraw = imageArray[imageIndex].interactive;
    //let videoToDraw = imageArray[imageIndex].video ? imageArray[imageIndex].video : null;

    if (index >= 4) {
        imagesToDraw = [];
        interactiveToDraw = [];
        //videoToDraw = null;
    }

    let main = '#FFF';
    let secondary = '#FFF';
    let text = '#FFF';

    const colourIndex = index % colourArray.length;

    main = colourArray[colourIndex].main;
    secondary = colourArray[colourIndex].secondary;

    //Parallax translations

    let translateX = ['-50px', '50px'];
    let translateY = ['-100px', '100px'];

    if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768) {
            translateX = multiplyValues(translateX, 0.25);
            translateY = multiplyValues(translateY, 0.1);
        }
    }

    //Styles

    let orderStyle = {
        color: text,
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
    }

    if (index >= 4) {
        orderStyle.justifyContent = 'center';
    }

    const createInteractiveElement = (link, index) => {
        switch (link.interactionType) {
            case 'StaticImage':
                return <StaticImage key={index} src={link.src} width={link.width} height={link.height} x={link.x} y={link.y} />;
            case 'SquashStretch':
                return <HoverSquashStretch key={index} src={link.src} width={link.width} x={link.x} y={link.y} />;
            case 'ChangeImage':
                return <HoverChangeImage key={index} src={link.src} width={link.width} x={link.x} y={link.y} altsrc={link.altsrc} />;
            case 'SpeechBubble':
                return <HoverSpeechBubble key={index} src={link.src} bubble={link.bubble} hitbox={link.hitbox} x={link.x} y={link.y} />;
            default:
                return null;
        }
    }
    
    /*<div className="absolute bottom-5 md:bottom-0 left-0 right-0 z-0">
        <video autoPlay loop muted className="w-full" width="1920" height="1080">
            <source src={Terraforming_Background} type="video/mp4" />
        </video>
    </div>*/
    
    let sectionClass = `
        relative
        flex
        flex-col
        justify-center
        items-center
        text-center
        z-10

        pt-[5vw]
        md:pt-[10vw]
        md:pt-[8vw]
        pb-[60vw]
        md:pb-[30vw]
        lg:pb-[25vw]
    `;
    if (index >= 4) {
        sectionClass = `
        relative
        flex
        flex-col
        justify-center
        items-center
        text-center
        z-10

        pt-[3vw]
        pb-[15vw]
        `;
    }
    
    return (
        <section className={sectionClass}>

            {/* Content */}
            <div className="w-full flex justify-center md:justify-between lg:justify-around p-8 z-20" style={orderStyle}>
                {children}
                {index < 4 && (
                    <div className="hidden md:block w-full md:max-w-1/2 lg:max-w-[500px]"></div>
                )}
            </div>

            {(index === 3 || index === 2) && (
                <div className="m-16 md:m-0"></div>
            )}

            {/* Interactive */}
            {interactiveToDraw.length > 0 ? (
                <Parallax translateY={multiplyValues(translateY, interactiveToDraw[0].zLevel / 2)} className="absolute bottom-0 left-0 right-0 z-30">
                    <svg
                        width="100%"
                        viewBox="0 0 1920 1080"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {interactiveToDraw.map((link, ind) => (
                            <React.Fragment key={ind}>
                                {createInteractiveElement(link, ind)}
                            </React.Fragment>
                        ))}
                    </svg>
                </Parallax>
            ) : null}

            {/*
            <img src={fireAnimGif} className="w-[8%] absolute top-[45%] left-[76%] transition-all ease-in hover:w-[10%] hover:left-[75%] hover:top-[42%]"></img>
            <img src={forest_speechBubble} className="absolute w-[12%] top-[30%] left-[69%] opacity-0 pt-[50px] pb-0 transition-all ease-out hover:opacity-100 hover:pt-0 hover:pb-[50px]"></img>
            

            {interactiveToDraw.map((link, ind) => (
                <InteractiveElement
                    key={ind}
                    src={link.src}
                    width={link.width}
                    x={link.x}
                    y={link.y}
                    interactionType={link.interactionType}
                    alternateSrc={link.alternateSrc}
                    className="absolute bottom-0 left-0 right-0"
                />
            ))}
            {index == 2 && (
                <div className="absolute bottom-0 left-0 right-0">
                    <Terraforming />
                </div>
            )}
            */}

            {/* Waves */}
            <WaveBackground index={index} main={main} secondary={secondary} translateX={translateX} translateY={translateY} />

            {/* Images */}
            {imagesToDraw.map((link, ind) => (
                <React.Fragment key={ind}>
                    {link.isWider ? (
                        <Parallax
                            translateX={multiplyValues(translateX, link.zLevel ? link.zLevel : ind-Math.floor(imagesToDraw.length/2))}
                            translateY={multiplyValues(translateY, ind / 2)}
                            className="absolute bottom-0 left-[-100px] right-[-100px]"
                        >
                            <GatsbyImage image={getImage(imageDataFromName(link.url))} alt={link.url} width="2020" height="1080" />
                        </Parallax>
                    ) : (
                        <Parallax
                            translateX={multiplyValues(translateX, link.zLevel ? link.zLevel : ind-Math.floor(imagesToDraw.length/2))}
                            translateY={multiplyValues(translateY, ind / 2)}
                            className="absolute bottom-0 left-0 right-0"
                        >
                            <GatsbyImage image={getImage(imageDataFromName(link.url))} alt={link.url} width="1920" height="1080" />
                        </Parallax>
                    )}
                </React.Fragment>
            ))}
            
            {index === 2 && (
                <AppleIsland />
            )}

            {index === 3 && (
                <MassiveMultiplayer translateX={translateX} translateY={translateY} />
            )}

            {/* Video 
            {videoToDraw && (
                <div className="absolute bottom-0 left-0 right-0 z-[-1]">
                    <ScrollVideo videoSource={videoToDraw} />
                </div>
            )}*/}
        </section>
    );

    // Functions

    function imageDataFromName(imageString) {
        if (props === undefined) return null;
        for (let i = 0; i < props.nodes.length; i++) {
            if (props.nodes[i].relativePath === imageString) {
                return props.nodes[i].childImageSharp;
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
};

export default SimpleSection;