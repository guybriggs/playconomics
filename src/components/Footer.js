import React from 'react'
import UnderlineLink from './UnderlineLink.js'

const Footer = () => {
    return (
    <footer className='fixed bottom-0 left-0 right-0 p-16 w-full text-center opacity-50'>
        <ul className='flex gap-4 justify-center p-2'>
            <li><UnderlineLink>Terms of Use</UnderlineLink></li>
            <li><UnderlineLink>Privacy Policy</UnderlineLink></li>
        </ul>
        <p>© LionsHeart Studios Pty Ltd | 2023</p>
    </footer>
    )
}

export default Footer