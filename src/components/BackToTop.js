import React from 'react'
import { ArrowUp } from 'react-feather'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
  
    // Function to update scrollY whenever the user scrolls
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    // Add an event listener to track scroll position
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Update the visibility state based on scroll position
    useEffect(() => {
      setIsVisible(scrollY !== 0);
    }, [scrollY]);

    let arrowStyle = {
        opacity: '0',
        pointerEvents: 'none',
    };
    if (isVisible) {
        arrowStyle = {
            opacity: '1',
        }
    }

    return (
        <div className='fixed bottom-0 right-0 z-20'>
            <Link activeClass="active" smooth spy to="home">
                <div className='bg-slate-900 text-white p-4 m-4 rounded transition cursor-pointer' style={arrowStyle}>
                    <ArrowUp size={32} />
                </div>
            </Link>
        </div>
    )
}

export default BackToTop