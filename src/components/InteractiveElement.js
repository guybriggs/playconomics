import React, { useState } from 'react';

const InteractiveElement = ({ src, width, x, y }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };
  
    const handleMouseOut = () => {
        setIsHovered(false);
    };
    
    const elementStyles = isHovered ? { border: '1px solid black' } : { border: '1px solid red' };

    return (
        <svg width="100%" viewBox="0 0 1920 1080" svg="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 min-w-full min-h-full">
            <image x={x} y={y} width={width} href={src}>
                {/* TODO: Add squash, stretch, rotate, etc */}
            </image>
        </svg>
    );

}

export default InteractiveElement;