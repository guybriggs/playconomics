import React from 'react'
import UnderlineLink from './UnderlineLink.js'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link as PageLink  } from "gatsby"

const Nav = () => {
    const navLinks = [
        {
            text: "About",
            link: "about",
        },
        {
            text: "Features",
            link: "features",
        },
        {
            text: "Universe",
            link: "universe",
        },
        {
            text: "Contact",
            link: "contact",
        },
    ]

    return (
    <nav className='static bg-slate-900 text-white flex flex-col-reverse md:flex-row justify-between items-center align-bottom overflow-hidden'>
        <ul className='flex-0 flex flex-row flex-wrap justify-center gap-8 p-4'>
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
        <h1 className='flex-1 text-4xl p-4 md:order-first'>Playconomics</h1>
        <ul className='flex-1 flex flex-row-reverse w-full gap-8 p-4'>
            <li><UnderlineLink><PageLink to="/register">Sign Up</PageLink></UnderlineLink></li>
            <li><UnderlineLink><PageLink to="/login">Login</PageLink></UnderlineLink></li>
        </ul>
    </nav>
    )
}

export default Nav