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
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Change 768 to your desired breakpoint
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;
        let currentFrame = frame;
    
        const handleScroll = () => {
            if (!ref.current) return;

            const top = ref.current.parentNode.getBoundingClientRect().top;
            const height = ref.current.parentNode.clientHeight;
            const windowHeight = window.innerHeight;
            const visible = windowHeight - top - height/2;
            let percentage = visible / height;
            percentage = percentage * 2;
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
    }, [data, frame]);

    const src = data.frames.nodes[frame]?.childImageSharp?.gatsbyImageData.images.fallback.src;

    const imageSize = isSmallScreen ? 1080 : 720; // Double the size for small screens
    const x = isSmallScreen ? 1920/2-imageSize/2 : 1920-imageSize*1.6;
    const y = isSmallScreen ? 0 : 250;

    return (
        <div ref={ref} className='absolute bottom-32 md:bottom-0 left-0 right-0'>
            <svg
                width="100%"
                viewBox="0 0 1920 1080"
                xmlns="http://www.w3.org/2000/svg"
            >
                <image
                    href={src}
                    x={x} // (1920/2.5)
                    y={y}
                    width={imageSize}
                    height={imageSize}
                ></image>
            </svg>
        </div>
    );
}

export default AppleIsland;
