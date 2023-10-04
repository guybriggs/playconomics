import React from 'react'
import Nav from "../components/Nav"
import BackToTop from './BackToTop';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';

const Layout = ({children}) => {
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

    return (
    <ParallaxProvider>
        <div className='overflow-hidden'>
            <div id="home"></div>
            <Nav />

            <main>
                {children}
            </main>

            {isVisible && (
                <BackToTop />
            )}
        </div>
    </ParallaxProvider>
    )
}

export default Layout