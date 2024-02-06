// ScrollVideo.js
import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const ScrollVideo = ({ videoSource }) => {
    const videoRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScrollStart = () => {
        setIsScrolling(true);
        videoRef.current.play();
    };
  
    const handleScrollEnd = () => {
        setIsScrolling(false);
        videoRef.current.pause();
    };
  
    useEffect(() => {
      let scrollTimer;
  
      const handleScroll = () => {
        handleScrollStart();
  
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          handleScrollEnd();
        }, 500); // Adjust the delay according to your needs
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <Element name="videoElement">
            <video ref={videoRef} autoPlay playsInline loop muted className='w-full'>
                <source src={videoSource} type="video/mp4" />
            </video>
        </Element>
    );
};

export default ScrollVideo;