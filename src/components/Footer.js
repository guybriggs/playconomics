import React from 'react'
import { Link } from 'gatsby'
import UnderlineLink from './UnderlineLink.js'

const Footer = () => {
    return (
    <footer className='absolute bottom-0 left-0 right-0 p-16 w-full'>
        <ul className='flex gap-4 justify-center p-2'>
            <li><UnderlineLink><Link to="/termsofuse">Terms of Use</Link></UnderlineLink></li>
            <li><UnderlineLink><Link to="/privacypolicy">Privacy Policy</Link></UnderlineLink></li>
        </ul>
        <p>© LionsHeart Studios Pty Ltd | 2023</p>
    </footer>
    )
}

export default Footer