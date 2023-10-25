import React from "react";
import { Parallax } from 'react-scroll-parallax';

const Section = ({ children, props }) => {

    const {
        main,
        secondary,
        text,
    } = props.frontmatter.palette;

    const {
        startx,
        endx,
        starty,
        endy,
    } = props.frontmatter.translate;

    const wave = props.frontmatter.wave;

    const translateX = [startx+'px', endx+'px'];
    const translateY = [starty+'px', endy+'px'];

    const defaultTranslateY = ['-100px', '300px'];

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

    return (
        <section className="relative min-h-screen flex justify-center">
            <div className="w-full md:w-[1080px] p-8 mb-[50%] md:mb-[25%]" style={textStyle}>
                {children}
            </div>

            <Parallax translateX={multiplyValues(translateX, 2)} translateY={defaultTranslateY} className="absolute top-[-50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={secondary} fillOpacity="1" d={wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={secondaryStyle}></div>
            </Parallax>

            <Parallax translateX={translateX} translateY={translateY} className="absolute top-[50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={main} fillOpacity="1" d={wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={mainStyle}></div>
            </Parallax>

            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]" style={gradientStyle}></div>
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

export default Section;