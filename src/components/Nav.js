import React from 'react'
import UnderlineLink from './UnderlineLink.js'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Nav = () => {
    const navLinks = [
        {
            text: "Home",
            link: "home",
        },
        {
            text: "Awards",
            link: "awards",
        },
        {
            text: "Features",
            link: "features",
        },
        {
            text: "Testimonials",
            link: "testimonials",
        },
        {
            text: "Outcomes",
            link: "outcomes",
        },
        {
            text: "Contact",
            link: "contact",
        },
    ]

    return (
    <nav className='static text-white text-center overflow-hidden'>
        <ul className='flex flex-row-reverse gap-8 p-4 md:p-8 bg-slate-900 md:bg-transparent md:fixed top-0 right-0 z-20'>
            <li><UnderlineLink>Login</UnderlineLink></li>
            <li><UnderlineLink>Sign Up</UnderlineLink></li>
        </ul>
        <div className='md:fixed top-0 left-0 md:text-left z-20'>
            <h1 className='text-4xl p-8 pb-0'>Playconomics</h1>
            <ul className='flex flex-row md:flex-col flex-wrap justify-center gap-8 md:gap-4 p-8'>
                {navLinks.map(item => (
                    <li>
                        <Link activeClass="active" smooth spy to={item.link}>
                            <UnderlineLink>
                                {item.text}
                            </UnderlineLink>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    )
}

export default Nav