import React from 'react'
import { ArrowUp } from 'react-feather'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const BackToTop = () => {
    return (
        <div className='fixed bottom-0 right-0 p-4 text-white z-20 cursor-pointer md:hidden'>
            <Link activeClass="active" smooth spy to="home">
                <ArrowUp size={64} />
            </Link>
        </div>
    )
}

export default BackToTop