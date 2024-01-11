import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import fireAnimGif from '/src/assets/fire_anim.gif'
import forest_speechBubble from '/src/assets/forest_speechBubble.png'
import WaveBackground from "./WaveBackground";
import InteractiveElement from "./InteractiveElement";

const SimpleSection = ({ props, index, children }) => {

    console.log(props);

    //G: Images, colours, parallax all hard-coded due to time constraints

    //Cleanup

    if (index === undefined) index = 0;

    //Images

    const imageArray = [
        [
            { url: 'forest_BG.png' },
            { url: 'forest_MG.png' },
            { url: 'forest_FG.png' }
        ]
    ];
    
    const imageIndex = index % imageArray.length;
    const imagesToDraw = imageArray[imageIndex];

    // Interactive Elements

    const interactiveArray = [
        [
            { src: fireAnimGif, width: 150, x: 1460, y: 500, zLevel: 1 }
        ]
    ]

    const interactiveIndex = index % interactiveArray.length;
    const interactiveToDraw = interactiveArray[interactiveIndex];

    //Colours

    const colourArray = [
        {
            main: '#4bb6cd',
            secondary: '#31b0cc',
        },
        {
            main: '#58c1c5',
            secondary: '#5cbbd0',
        },
        {
            main: '#73c7cb',
            secondary: '#6ac5c9',
        },
        {
            main: '#dadc9f',
            secondary: '#e9eba7',
        },
        {
            main: '#A5CA2F',
            secondary: '#cbe873',
        },
        {
            main: '#add337',
            secondary: '#bee543',
        },
        {
            main: '#A5CA2F',
            secondary: '#b5dd3e',
        },
        {
            main: '#a7b975',
            secondary: '#b2c678',
        },
        {
            main: '#adadad',
            secondary: '#c1bebe',
        }
    ];

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

    const textStyle = {
        color: text,
    }

    const orderStyle = {
        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
    }

    function doSpookyStuff() {
        alert('boo!');
    }

    return (
        <section className="relative h-screen flex justify-center items-center text-center pb-32 z-10" style={textStyle}>

            {/* Interactive */}
            {/*
            <img src={fireAnimGif} className="w-[8%] absolute top-[45%] left-[76%] transition-all ease-in hover:w-[10%] hover:left-[75%] hover:top-[42%]"></img>
            <img src={forest_speechBubble} className="absolute w-[12%] top-[30%] left-[69%] opacity-0 pt-[50px] pb-0 transition-all ease-out hover:opacity-100 hover:pt-0 hover:pb-[50px]"></img>
            */}

            <div className="absolute bottom-0 left-0 w-full">
                {interactiveToDraw.map((link, ind) => (
                    <Parallax translateY={multiplyValues(translateY, (1/(link.zLevel+1)))}>
                        <InteractiveElement src={link.src} width={link.width} x={link.x} y={link.y} />
                    </Parallax>
                ))}
            </div>

            {/* Content */}
            <div className="w-full md:w-[1280px] flex" style={orderStyle}>
                {children}
            </div>

            {/* Waves */}
            <WaveBackground index={index} main={main} secondary={secondary} translateX={translateX} translateY={translateY} />

            {/* Images */}
            <div className="absolute bottom-0 left-0 w-full z-[-1]">
                {imagesToDraw.map((link, ind) => (
                    <Parallax translateY={multiplyValues(translateY, (1/(ind+1)))}>
                        <GatsbyImage image={getImage(imageDataFromName(link.url))} class="absolute bottom-0 left-0 min-w-full min-h-full object-cover" />
                    </Parallax>
                ))}
            </div>
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