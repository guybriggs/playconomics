import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import WaveBackground from "./WaveBackground";

// Interactive

import HoverSquashStretch from "./interactive/HoverSquashStretch";
import HoverChangeImage from "./interactive/HoverChangeImage";
import HoverSpeechBubble from "./interactive/HoverSpeechBubble";
import Terraforming from "./interactive/Terraforming";

// Images

import forest_fireanim from '/src/assets/fire_anim.gif';
import forest_speechBubble from '/src/assets/forest_speechBubble.png';
import society_island1 from '/src/assets/society_island1.png';

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
            main: '#35b3c2',
            secondary: '#65bcc0',
        },
        {
            main: '#34aebe',
            secondary: '#1faabc',
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
            secondary: '#152530',
        },
        {
            main: '#171e27',
            secondary: '#171e27',
        },
        {
            main: '#13161a',
            secondary: '#13161a',
        }
    ];

    //G: Images, colours, parallax all hard-coded due to time constraints

    //Cleanup

    if (index === undefined) index = colourArray.length-1;

    //Images

    const imageArray = [
        {
            static: [
                { url: 'forest_BG.png' },
                { url: 'forest_MG.png' },
                { url: 'forest_FG.png' },
            ],
            interactive: [
                {
                    interactionType: 'SquashStretch',
                    src: forest_fireanim,
                    width: 150,
                    x: 1460,
                    y: 500,
                    zLevel: 1,
                },
                {
                    interactionType: 'SpeechBubble',
                    src: forest_speechBubble,
                    width: 200,
                    x: 1530,
                    y: 320,
                    zLevel: 1,
                }
            ]
        },
        {
            static: [
                { url: 'inside_MG.png' },
                { url: 'inside_FG.png' },
            ],
            interactive: [

            ]
        },
        {
            static: [
                { url: 'society_MG.png' },
                { url: 'society_FG.png' },
            ],
            interactive: [
                {
                    interactionType: 'Terraforming',
                }
            ]
        },
        {
            static: [
                { url: 'mmo_desert.png' },
                { url: 'mmo_temperate.png' },
                { url: 'mmo_temperate2.png' },
                { url: 'mmo_temperate3.png' },
                { url: 'mmo_tundra.png' },
            ],
            interactive: [

            ]
        },
    ];
    
    const imageIndex = index % imageArray.length;
    let imagesToDraw = imageArray[imageIndex].static;
    let interactiveToDraw = imageArray[imageIndex].interactive;

    if (index >= 4) {
        imagesToDraw = [];
        interactiveToDraw = [];
    }

    let main = '#FFF';
    let secondary = '#FFF';
    let text = '#FFF';

    const colourIndex = index % colourArray.length;

    main = colourArray[colourIndex].main;
    secondary = colourArray[colourIndex].secondary;

    //Parallax translations

    const translateX = ['100px', '-100px'];
    const translateY = ['-100px', '100px'];

    //Styles

    const orderStyle = {
        color: text,
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
    }
    
    const fullHeightStyle = {
        height: index >= 4 ? '90vh' : '110vh',
    }

    const createInteractiveElement = (link) => {
        switch (link.interactionType) {
            case 'SquashStretch':
                return <HoverSquashStretch src={link.src} width={link.width} x={link.x} y={link.y} />;
            case 'ChangeImage':
                return <HoverChangeImage src={link.src} width={link.width} x={link.x} y={link.y} altsrc={link.altsrc} />;
            case 'SpeechBubble':
                return <HoverSpeechBubble src={link.src} width={link.width} x={link.x} y={link.y} />;
            case 'Terraforming':
                return <Terraforming />
            default:
                return null;
        }
    }

    return (
        <section className="relative flex justify-center items-center pb-64 text-center z-10" style={fullHeightStyle}>

            {/* Content */}
            <div className="w-full md:w-[1280px] flex" style={orderStyle}>
                {children}
            </div>
            
            {/* Interactive */}
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0"
            >
                {interactiveToDraw.map((link, index) => (
                    createInteractiveElement(link)
                ))}
            </svg>

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
                <Parallax key={ind} translateY={multiplyValues(translateY, ind/2)} className="absolute bottom-0 left-0 right-0 z-[-1]">
                    <GatsbyImage image={getImage(imageDataFromName(link.url))} alt="" />
                </Parallax>
            ))}
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