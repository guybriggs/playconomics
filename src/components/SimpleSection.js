import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SimpleSection = ({ props, index, children }) => {

    //G: Images, colours, parallax all hard-coded due to time constraints

    //Cleanup

    if (index === undefined) index = 0;

    //Images

    let hasImage = false; //Leftover from previous changes, currently unused

    const imageArray = [
        'globe.png',
        'houses.png',
        'government.png',
        'turbines.png',
        'trees.png',
        'graph.png',
        'athena.png',
        'mountain.png',
    ];
    
    const imageIndex = index % imageArray.length;

    function imageDataFromName(imageString) {
        if (props === undefined) return null;
        for (let i = 0; i < props.nodes.length; i++) {
            if (props.nodes[i].relativePath === imageString) {
                return props.nodes[i].childImageSharp;
            }
        }
        return null;
    }

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
            main: '#bbd962',
            secondary: '#cbe873',
        },
        {
            main: '#add337',
            secondary: '#bee543',
        },
        {
            main: '#a4c934',
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
        opacity: '0.15',
    }

    const overlayStyle = {
        backgroundColor: main,
        opacity: '0.5',
    }

    let flipStyle = {
        transform: 'scaleX(-1)',
    }
    if (index % 3 == 0) {
        flipStyle = {
            transform: 'scaleX(1)',
        }
    }

    let alignStyle = {
        justifyContent: 'start',
    }
    if (index % 2 == 0) {
        alignStyle = {
            justifyContent: 'end',
        }
    }
    
    let bumpUpStyle = {
        marginBottom: '125px',
    }
    if (index % 2 == 0) {
        bumpUpStyle = {
            marginBottom: '175px',
        }
    }

    let orderStyle = {
        order: '-9999',
    }
    if (index % 2 == 0) {
        orderStyle = {
            order: '9999',
        }
    }

    return (
        <section className="relative min-h-screen pb-64 flex justify-center">

            <div className="w-3/4 md:w-[1280px] flex flex-col md:flex-row items-center">
                <div className="w-full p-4 pb-32 md:pb-0 md:px-32 text-center" style={textStyle}>
                    {children}
                </div>

                <div className="w-full" style={orderStyle}>
                    {/*<Parallax translateY={multiplyValues(translateY, 1)}>
                        <GatsbyImage image={getImage(imageData)} alt="image" />
                    </Parallax>*/}
                </div>
            </div>

            <div className="absolute top-0 left-[-200px] right-[-200px] bottom-0 z-[-1]">
                {/* Image, Absolute */}
                {hasImage && (
                    <Parallax translateY={translateY} className="absolute top-0 left-0 right-0 bottom-0">
                    {/*<GatsbyImage
                        image={getImage(imageData)}
                        alt="image"
                        className="w-full h-full object-fit"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0" style={overlayStyle}></div>*/}
                    </Parallax>
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
                <Parallax translateY={translateY} className="absolute top-0 left-0 right-0 bottom-0">
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
                    <div className="absolute top-0 left-0 right-0 bottom-0" style={mainStyle}>
                        <div className="w-full h-full flex items-end p-0 md:px-[300px]" style={alignStyle}>
                            <div className="w-1/2 md:w-[25vw]" style={bumpUpStyle}>
                            <Parallax translateY={multiplyValues(translateY, 0.5)}>
                                <GatsbyImage image={getImage(imageDataFromName(imageArray[imageIndex]))} alt="image" />
                            </Parallax>
                            </div>
                        </div>
                    </div>
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