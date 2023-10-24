import React from "react";
import { Parallax } from 'react-scroll-parallax';

const Section = ({ props }) => {


    const { main, secondary, text } = props;

    const index = 0;

    const waveData = [
        {   //Ocean
            bg: "#53BDC8",
            shadow: "#65CABD",
            grad: "#65CABD",
            text: "#ecf8f9",
            translateX: ['100px', '-200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Sand
            bg: "#F2F2BC",
            shadow: "#e6e699",
            grad: "#e6e699",
            text: "#D47045",
            translateX: ['-100px', '200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,224L80,186.7C160,149,320,75,480,85.3C640,96,800,192,960,213.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Grass
            bg: "#ADD337",
            shadow: "#A2C633",
            grad: "#A2C633",
            text: "#465511",
            translateX: ['100px', '-200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,224L80,234.7C160,245,320,267,480,240C640,213,800,139,960,138.7C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Rock
            bg: "#0d2030",
            shadow: "#163650",
            grad: "#163650",
            text: "#aecfea",
            translateX: ['-100px', '200px'],
            translateY: ['-50px', '200px'],
            wave: "M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
    ];

    const item = waveData[index];

    const sectionBgStyle = {
        backgroundColor: item.bg,
    }

    const sectionBg2Style = {
        backgroundColor: item.shadow,
    }

    const sectionTextStyle = {
        color: item.text,
    }

    const gradientStyle = {
        background: item.bg,
        background: 'linear-gradient(0deg, '+item.grad+' 0%, rgba(0,0,0,0) 100%)',
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

    return (
        <section className="relative flex justify-center">
            <div className="w-full md:w-[1080px] p-8 mb-[50%] md:mb-[25%]" style={sectionTextStyle}>
                children
            </div>
            <p>{secondary}</p>
            <p>{text}</p>
            <p>{main}</p>

            <Parallax translateX={multiplyValues(item.translateX, 2)} translateY={['-100px', '400px']} className="absolute top-[-50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={item.shadow} fill-opacity="1" d={item.wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={sectionBg2Style}></div>
            </Parallax>

            <Parallax translateX={item.translateX} translateY={item.translateY} className="absolute top-[50px] left-[-200px] right-[-200px] bottom-0 z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={item.bg} fill-opacity="1" d={item.wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={sectionBgStyle}></div>
            </Parallax>

            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]" style={gradientStyle}></div>
        </section>
    );
};

export default Section;