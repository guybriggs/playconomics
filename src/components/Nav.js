import React from 'react'
import UnderlineLink from './UnderlineLink.js'
import { Link } from 'react-scroll'

const Nav = () => {

    let registerUrl = '';
    let loginUrl = '';

    const isSSR = typeof window === "undefined";

    if (!isSSR) {
        // Only render on the client

        const domain = window.location.host;
        let appBaseUrl = `https://app.${domain}/`;

        // Local dev
        if (domain === "localhost:8001") appBaseUrl = 'http://localhost:8000/';

        registerUrl = appBaseUrl + "accounts/register/";
        loginUrl = appBaseUrl + "accounts/login/";
    }

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
            <li><UnderlineLink><a href={registerUrl}>Sign Up</a></UnderlineLink></li>
            <li><UnderlineLink><a href={loginUrl}>Login</a></UnderlineLink></li>
        </ul>
    </nav>
    )
};

export default Nav