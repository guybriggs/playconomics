import React from 'react'
import Button from '../components/Button.js'

const TopRight = () => {
    return (
    <div className='fixed top-0 right-0 z-20 p-16 text-white'>
        <ul className='flex gap-4'>
            <li><Button>Login</Button></li>
            <li><Button>Sign Up</Button></li>
        </ul>
    </div>
    )
}

export default TopRight