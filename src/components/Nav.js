import React from 'react'
import UnderlineLink from './UnderlineLink.js'
import { Link } from 'react-scroll'

const Nav = () => {

    const appBaseUrl = process.env.MY_PLAYCONOMICS_BASE_URL || 'http://localhost:8000/';
    const registerUrl = appBaseUrl + "accounts/register/";
    const loginUrl = appBaseUrl + "accounts/login/";

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
    ];

    return (
    <nav className='bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center static top-0 left-0 right-0 z-10 shadow'>
        {/*<h1 className='basis-1/4 text-4xl p-4'>Playconomics</h1>
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
        </ul>*/}
        <div className='hidden md:block p-4'><UnderlineLink><a href="/">Home</a></UnderlineLink></div>
        <h1 className='text-3xl p-4'>Playconomics</h1>
        <ul className='flex flex-row-reverse gap-8 whitespace-nowrap p-4'>
            <li><UnderlineLink><a href={registerUrl}>Sign Up</a></UnderlineLink></li>
            <li><UnderlineLink><a href={loginUrl}>Login</a></UnderlineLink></li>
        </ul>
    </nav>
    )
};

export default Nav