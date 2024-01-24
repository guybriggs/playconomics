import React from 'react';
import Nav from "../components/Nav";
import BackToTop from './BackToTop';
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children }) => {
    return (
    <ParallaxProvider style={{ cursor: 'url(/src/assets/mmo_mouse.png),auto' }}>
        <div className='overflow-hidden'>
            <div id="home"></div>
            <Nav />

            <main>
                {children}
            </main>

            <BackToTop />
        </div>
    </ParallaxProvider>
    )
}

export default Layout