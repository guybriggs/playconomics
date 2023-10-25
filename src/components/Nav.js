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
    <nav className='bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-4xl p-4 md:w-0'>Playconomics</h1>
        <ul className='w-full flex flex-wrap gap-8 p-4 justify-center'>
            {navLinks.map((item, i) => (
                <div key={i}>
                    <Link activeClass="active" smooth spy to={item.link}>
                        <UnderlineLink>
                            {item.text}
                        </UnderlineLink>
                    </Link>
                </div>
            ))}
        </ul>
    </nav>
    )
}

export default Nav