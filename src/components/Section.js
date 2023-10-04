import React from "react";
import { Parallax } from 'react-scroll-parallax';

const Section = ({ index, children }) => {
    const waveData = [
        {   //Ocean
            bg: "#3db5c2",
            text: "#d8f1f3",
            translateX: ['100px', '-200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Sand
            bg: "#f5e0a3",
            text: "#f65555",
            translateX: ['-100px', '200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,224L80,186.7C160,149,320,75,480,85.3C640,96,800,192,960,213.3C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Grass
            bg: "#add337",
            text: "#455511",
            translateX: ['100px', '-200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,224L80,234.7C160,245,320,267,480,240C640,213,800,139,960,138.7C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
        {   //Rock
            bg: "#0d2030",
            text: "#c3dbef",
            translateX: ['-100px', '200px'],
            translateY: ['-100px', '200px'],
            wave: "M0,192L80,202.7C160,213,320,235,480,229.3C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        },
    ];

    //Failsafe
    if (index > waveData.length) index = 0;

    const item = waveData[index];

    const sectionBgStyle = {
        backgroundColor: item.bg,
    }

    const sectionTextStyle = {
        color: item.text,
    }

    const waveStyle = {
        left: '-200px',
        right: '-200px',
    }

    return (
        <section className="relative flex justify-center">
            <div className="w-full md:w-1/2 p-8 pb-[66%] md:pb-[33%]" style={sectionTextStyle}>
                {children}
            </div>

            <Parallax translateX={item.translateX} translateY={item.translateY} className="absolute top-0 bottom-0 z-[-1]" style={waveStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 right-0 translate-y-[-99%]">
                    <path fill={item.bg} fill-opacity="1" d={item.wave}></path>
                </svg>
                <div className="absolute top-0 left-0 right-0 bottom-0" style={sectionBgStyle}></div>
            </Parallax>
        </section>
    );
};

export default Section;