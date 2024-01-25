import React from 'react';

const StaticImage = ({ src, width, height, x, y }) => {
    return (
        <image
            href={src}
            x={x}
            y={y}
            width={width}
            height={height}
        ></image>
    );
}

export default StaticImage;