import React from 'react'
import UnderlineLink from './UnderlineLink.js'
import { Link } from 'react-scroll'

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
            text: "Contact",
            link: "contact",
        },
    ]

    return (
    <nav className='bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center static top-0 left-0 right-0 md:fixed z-10 shadow'>
        <h1 className='basis-1/4 text-4xl p-4'>Playconomics</h1>
        <ul className='basis-1/2 flex flex-wrap gap-8 p-4 justify-center'>
            {navLinks.map((item, i) => (
                <li key={i}>
                    <Link activeClass="active" smooth spy to={item.link}>
                        <UnderlineLink>
                            {item.text}
                        </UnderlineLink>
                    </Link>
                </li>
            ))}
        </ul>
        <ul className='basis-1/4 w-full flex flex-row-reverse gap-8 p-4 whitespace-nowrap order-first md:order-last'>
            <li><UnderlineLink>Sign Up</UnderlineLink></li>
            <li><UnderlineLink>Login</UnderlineLink></li>
        </ul>
    </nav>
    )
}

export default Nav