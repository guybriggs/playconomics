import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
    <nav className='bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center static top-0 left-0 right-0 md:fixed z-10 shadow'>
        <h1 className='basis-1/4 text-4xl p-4'><Link to="/">Playconomics</Link></h1>
    </nav>
    )
}

export default Header