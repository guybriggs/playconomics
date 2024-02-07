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
        const handleScroll = () => {
            if (!ref.current) return;

            const { top, bottom } = ref.current.getBoundingClientRect();
            const height = ref.current.clientHeight;
            const windowHeight = window.innerHeight;
            const visible = windowHeight/2-top;
            let percentage = (visible/height);
            if (percentage < 0) percentage = 0;
            if (percentage > 0.99) percentage = 0.99;

            const totalFrames = data.frames.nodes.length;
            setFrame(Math.floor(totalFrames*percentage));
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data]);

    const src = data.frames.nodes[frame]?.childImageSharp?.gatsbyImageData.images.fallback.src;

    return (
        <div ref={ref} className='absolute bottom-0 left-0 right-0 h-full flex flex-row-reverse'>
            <img src={src} alt="" width="720" height="720" />
        </div>
    );
}

export default AppleIsland;
