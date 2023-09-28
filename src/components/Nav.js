import React from 'react'
import Button from '../components/Button.js'

const Nav = () => {
    return (
    <nav className='fixed top-0 left-0 z-20 p-16 text-white'>
        <h1 className='text-4xl mb-8'>Playconomics</h1>
        <ul className='flex flex-col gap-2'>
            <li><Button>Home</Button></li>
            <li><Button>Features</Button></li>
            <li><Button>Awards</Button></li>
            <li><Button>Testimonials</Button></li>
            <li><Button>Contact</Button></li>
        </ul>
    </nav>
    )
}

export default Nav