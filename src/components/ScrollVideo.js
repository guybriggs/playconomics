import React, { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const ScrollVideo = ({ videoSource }) => {
    const videoRef = useRef(null);
    const animationRef = useRef(null);
    const [targetTime, setTargetTime] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);

    const handleScroll = () => {
        const videoElement = videoRef.current;
        const videoRect = videoElement.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const videoTop = videoRect.top + scrollPosition;
        const scrollPercentage = (scrollPosition - videoTop) / (window.innerHeight - videoRect.height);
        const videoDuration = videoElement.duration || 0;
    
        const currentTime = Math.max(0, Math.min(scrollPercentage * videoDuration, videoDuration));
    
        setTargetTime(currentTime);
    };
    

    const smoothSeek = () => {
        const videoElement = videoRef.current;
        const currentTime = videoElement.currentTime;
        const difference = targetTime - currentTime;
        const speed = 0.05; // Adjust this value for desired animation speed

        if (Math.abs(difference) > 0.01) {
            videoElement.currentTime += difference * speed;
            animationRef.current = requestAnimationFrame(smoothSeek);
        } else {
            cancelAnimationFrame(animationRef.current);
            setIsSeeking(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isSeeking) {
            setIsSeeking(true);
            animationRef.current = requestAnimationFrame(smoothSeek);
        }
    }, [targetTime]);

    return (
        <Element name="videoElement">
            <video ref={videoRef} className='w-full'>
                <source src={videoSource} type="video/mp4" />
            </video>
        </Element>
    );
};

export default ScrollVideo;
