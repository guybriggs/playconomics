import React, { useRef, useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const AppleIsland = () => {
    const data = useStaticQuery(graphql`
        query {
            frames: allFile(
                filter: { sourceInstanceName: { eq: "assets" }, relativeDirectory: { eq: "sections/new-worlds/island_frames" } }
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

    const ref = useRef(null);
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        let animationFrameId;
        let currentFrame = frame;
    
        const handleScroll = () => {
            if (!ref.current) return;
    
            const { top, bottom } = ref.current.getBoundingClientRect();
            const height = ref.current.clientHeight;
            const windowHeight = window.innerHeight;
            const visible = windowHeight*0.8 - top;
            let percentage = visible / height;
            if (percentage < 0) percentage = 0;
            if (percentage > 0.99) percentage = 0.99;
    
            const totalFrames = data.frames.nodes.length;
            const targetFrame = Math.floor(totalFrames * percentage);
    
            // Animate frame transition
            const animate = () => {
                currentFrame += (targetFrame - currentFrame) * 0.2; // Adjust interpolation speed here
                setFrame(Math.round(currentFrame));
    
                if (Math.abs(targetFrame - currentFrame) > 0.1) {
                    animationFrameId = requestAnimationFrame(animate);
                }
            };
    
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animate);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [data]);    

    const src = data.frames.nodes[frame]?.childImageSharp?.gatsbyImageData.images.fallback.src;

    return (
        <div ref={ref} className='absolute bottom-5 md:bottom-0 left-0 right-0'>
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href={src}
                    x={1920/2.5}
                    y={200}
                    width={720}
                    height={720}
                ></image>
            </svg>
        </div>
    );
}

export default AppleIsland;
