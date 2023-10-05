import React from 'react'
import { Star } from 'react-feather'

const Partners = () => {
    let partnersData = [
        {
            name: "The University of New South Wales",
        },
        {
            name: "The University of Queensland Australia",
        },
        {
            name: "The University of Adelaide",
        },
        {
            name: "STEP UP",
        },
    ]

    return (
    <div className='text-center mb-16'>
        <h1 className='text-5xl p-8'>Partners</h1>
        <ul className='grid grid-cols-2 md:flex flex-row pb-8'>
            {partnersData.map(link => (
            <li className='flex-1'>
                <p className='flex justify-center'><Star size={96} /></p>
                <p className='p-2'>{link.name}</p>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default Partners