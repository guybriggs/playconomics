import React from 'react'
import Section from "../components/Section"
import Button from '../components/Button.js'

const Footer = () => {
    return (
    <footer className='absolute bottom-0 left-0 right-0 p-16 w-full text-center opacity-50'>
        <ul className='flex gap-4 justify-center p-2'>
            <li><Button>Terms of Use</Button></li>
            <li><Button>Privacy Policy</Button></li>
        </ul>
        <p>© LionsHeart Studios Pty Ltd | 2023</p>
    </footer>
    )
}

export default Footer