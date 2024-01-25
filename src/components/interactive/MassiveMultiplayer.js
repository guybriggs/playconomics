import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import planets from "/src/assets/sections/massive-multiplayer/planets.png"

const MassiveMultiplayer = ({ x, y, width, height }) => {

    const data = useStaticQuery(graphql`
        query {
            legendFiles: allFile(
                filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/massive-multiplayer/legend" } }
            ) {
                nodes {
                    name
                    relativePath
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH,
                            placeholder: BLURRED,
                            quality: 90
                        )
                    }
                }
            }
        }
    `);

    const [imageVisibility, setImageVisibility] = useState({
        students: false,
        agents: false,
        weather: false,
        trade: true,
        coordinates: false,
    });

    const imageVisibleArray = Object.keys(imageVisibility);

    const handleCheckboxChange = (imageName) => {
        setImageVisibility((prevVisibility) => ({
            ...prevVisibility,
            [imageName]: !prevVisibility[imageName],
        }));
    };

    return (
        <div className="absolute bottom-0 left-0 right-0">
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href={planets}
                    x="0"
                    y="0"
                    width="1920"
                    height="1080"
                ></image>
                {data.legendFiles.nodes.map((file, i) => (
                    <image
                        key={i}
                        href={file.childImageSharp.gatsbyImageData.images.fallback.src}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        style={{ display: imageVisibility[file.name] ? 'block' : 'none' }}
                    ></image>
                ))}
            </svg>
            <div className="absolute bottom-1/4 left-0 text-lg p-8 m-8 flex flex-col text-left uppercase bg-[rgba(0,0,0,0.1)] rounded-md">
                {imageVisibleArray.map(imageStringId => (
                    <label key={imageStringId} className="cursor-pointer">
                        <input
                            type="checkbox"
                            checked={imageVisibility[imageStringId]}
                            onChange={() => handleCheckboxChange(imageStringId)}
                        />
                        {imageStringId}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default MassiveMultiplayer