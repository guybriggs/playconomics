import React from 'react'
import Nav from "../components/Nav"
import { ParallaxProvider } from 'react-scroll-parallax';
import TopRight from './TopRight';

const Layout = ({children}) => {
    return (
    <ParallaxProvider>
        <div className='overflow-hidden'>
            <Nav></Nav>
            
            <TopRight></TopRight>

            <main>
                {children}
            </main>
        </div>
    </ParallaxProvider>
    )
}

export default Layout