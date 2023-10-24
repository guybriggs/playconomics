import React from "react";
import { Parallax } from 'react-scroll-parallax';

const Section = ({ props }) => {

    const { main, secondary, text } = props;
    const wave = "M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
    const translateX = ['100px', '-200px'];
    const translateY = ['100px', '-200px'];
    const defaultTranslateY = ['-100px', '400px'];

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
        background: main,
        background: 'linear-gradient(0deg, '+secondary+' 0%, rgba(0,0,0,0) 100%)',
    }

    return (
        <section className="relative flex justify-center">
            <div className="w-full md:w-[1080px] p-8 mb-[50%] md:mb-[25%]" style={textStyle}>
                <p>Body content goes here.</p>
                <p>{secondary}</p>
                <p>{text}</p>
                <p>{main}</p>
            </div>

            <Parallax translateX={multiplyValues(translateX, 2)} translateY={defaultTranslateY} className="absolute top-[-50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={secondary} fill-opacity="1" d={wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={secondaryStyle}></div>
            </Parallax>

            <Parallax translateX={translateX} translateY={translateY} className="absolute top-[50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={main} fill-opacity="1" d={wave}></path>
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