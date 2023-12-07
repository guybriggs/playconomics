import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SimpleSection = ({ children, props, index }) => {

    //G: Images, colours, parallax all hard-coded due to time constraints

    let hasImage = false;
    let imageData = {};
    if (props === undefined) {
        props = {};
    } else {
        const imagesArray = props.nodes;
        if (index % 3 == 0) {
            hasImage = true;
            imageData = imagesArray[Math.floor(index/imagesArray.length)].childImageSharp;
        }
    }

    const colourArray = [
        {
            main: '#79E2C4',
            secondary: '#6CD7B7',
            text: '#1d5995',
        },
        {
            main: '#53bdc8',
            secondary: '#65cabd',
            text: '#ecf8f9',
        },
        {
            main: '#ADD337',
            secondary: '#A2C633',
            text: '#465511',
        },
        {
            main: '#f2f2bc',
            secondary: '#e6e699',
            text: '#d47045',
        }
    ];

    let main = '#fff';
    let secondary = '#fff';
    let text = '#000';

    if (index === undefined) index = 1;

    const colourIndex = index % colourArray.length;

    main = colourArray[colourIndex].main;
    secondary = colourArray[colourIndex].secondary;
    text = colourArray[colourIndex].text;

    const translateX = ['100px', '-100px'];
    const translateY = ['-50px', '50px'];

    const mainStyle = {
        backgroundColor: main,
    }

    const secondaryStyle = {
        backgroundColor: secondary,
    }

    const textStyle = {
        color: text,
    }

    const gradientStyle = {
        backgroundColor: main,
        background: 'linear-gradient(0deg, '+secondary+' 0%, rgba(0,0,0,0) 100%)',
    }

    const overlayStyle = {
        backgroundColor: main,
        opacity: 0.5,
    }

    let flipStyle = {
        transform: 'scaleX(-1)',
    }
    if (index % 3 == 0) {
        flipStyle = {
            transform: 'scaleX(1)',
        }
    }

    return (
        <section className="relative pt-32 pb-64 flex justify-center items-center text-center">

            <div className="w-full md:w-[800px] p-8" style={textStyle}>

                {children}

            </div>

            <div className="absolute top-0 left-[-200px] right-[-200px] bottom-0 z-[-1]" style={flipStyle}>

                {/* Image, Absolute */}
                {hasImage ? (
                    <Parallax translateY={translateY} className="absolute top-0 left-0 right-0 bottom-0">
                        <GatsbyImage
                            image={getImage(imageData)}
                            alt="image"
                            className="w-full h-full object-fit"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0" style={overlayStyle}></div>
                    </Parallax>
                ) : (
                    <div className="w-full h-full" style={mainStyle}></div>
                )}

                {/* Parallax, Absolute */}
                <Parallax translateX={multiplyValues(translateX, 1.5)} translateY={multiplyValues(translateY, 1.5)} className="absolute top-0 left-0 right-0 bottom-0">
                    {/* Wave Fill Container, Absolute */}                    
                    {/* Wave Fill */}
                    {!hasImage && (
                        <div className="absolute top-0 left-0 right-0 translate-y-[-75%]">
                        <svg
                            id="visualFill"
                            viewBox="0 0 960 540"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <path
                                d="M0 400L53.3 404.3C106.7 408.7 213.3 417.3 320 412.5C426.7 407.7 533.3 389.3 640 385.5C746.7 381.7 853.3 392.3 906.7 397.7L960 403L960 541L906.7 541C853.3 541 746.7 541 640 541C533.3 541 426.7 541 320 541C213.3 541 106.7 541 53.3 541L0 541Z"
                                fill={secondary}
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                            ></path>
                        </svg>
                        </div>
                    )}
                    {/* Wave Stroke Container, Absolute */}
                    <div className="absolute top-0 left-0 right-0 translate-y-[-75%]">
                        {/* Wave Stroke */}
                        <svg
                            id="visualStroke"
                            viewBox="0 0 960 540"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <path
                                d="M0 400L53.3 404.3C106.7 408.7 213.3 417.3 320 412.5C426.7 407.7 533.3 389.3 640 385.5C746.7 381.7 853.3 392.3 906.7 397.7L960 403"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                stroke={secondary}
                                strokeWidth="40"
                            ></path>
                        </svg>
                    </div>
                </Parallax>

                {/* Parallax, Absolute */}
                <Parallax translateX={translateX} translateY={translateY} className="absolute top-0 left-0 right-0 bottom-0">
                    {/* Wave Fill Container, Absolute */}
                    {!hasImage && (
                        <div className="absolute top-0 left-0 right-0 translate-y-[-75%]">
                            {/* Wave Fill */}
                            <svg
                                id="visualFill"
                                viewBox="0 0 960 540"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                            >
                                <path
                                    d="M0 400L53.3 404.3C106.7 408.7 213.3 417.3 320 412.5C426.7 407.7 533.3 389.3 640 385.5C746.7 381.7 853.3 392.3 906.7 397.7L960 403L960 541L906.7 541C853.3 541 746.7 541 640 541C533.3 541 426.7 541 320 541C213.3 541 106.7 541 53.3 541L0 541Z"
                                    fill={main}
                                    strokeLinecap="round"
                                    strokeLinejoin="miter"
                                ></path>
                            </svg>
                        </div>
                    )}
                    {/* Wave Stroke Container, Absolute */}
                    <div className="absolute top-0 left-0 right-0 translate-y-[-75%]">
                        {/* Wave Stroke */}
                        <svg
                            id="visualStroke"
                            viewBox="0 0 960 540"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <path
                                d="M0 400L53.3 404.3C106.7 408.7 213.3 417.3 320 412.5C426.7 407.7 533.3 389.3 640 385.5C746.7 381.7 853.3 392.3 906.7 397.7L960 403"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                stroke={main}
                                strokeWidth="40"
                            ></path>
                        </svg>
                    </div>
                    {/* Coloured Background To Hide Second Wave, Absolute */}
                    {!hasImage && (
                        <div className="absolute top-0 left-0 right-0 bottom-0" style={mainStyle}></div>
                    )}
                </Parallax>

                {/* Gradient Overlay, Absolute */}
                <div className="absolute top-0 left-0 right-0 bottom-0" style={gradientStyle}></div>

            </div>

        </section>
    );

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