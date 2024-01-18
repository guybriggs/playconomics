import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const WaveBackground = ({ index, main, secondary, translateX, translateY }) => {
    const mainStyle = {
        backgroundColor: main,
    }

    const secondaryStyle = {
        backgroundColor: secondary,
    }

    const fill = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }

    const flipped = {
        transform: index % 2 === 0 ? 'scaleX(-1)' : 'scaleX(1)',
    }

    return (
        <div className="absolute bottom-0 left-0 w-full h-full z-[-1]" style={flipped}>
            <Parallax translateY={translateY} style={fill}>
                <div className='translate-y-[-99%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 100"><path fill={secondary} fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,250.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <div className='absolute top-0 left-0 w-full h-full' style={secondaryStyle}></div>
            </Parallax>

            <Parallax translateY={multiplyValues(translateY, 0.5)} style={fill}>
                <div className='translate-y-[-99%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 200 1440 100"><path fill={main} fillOpacity="1" d="M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,250.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
                <div className='absolute top-0 left-0 w-full h-full' style={mainStyle}></div>
            </Parallax>
        </div>
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
}

export default WaveBackground