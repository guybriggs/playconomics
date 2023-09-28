import React from 'react'

const Testimonials = () => {
    let testimonialsData = [
        {
            name: "Kelly",
            text: "I really liked it!",
        },
        {
            name: "Brant",
            text: "It was great! I especially loved the farming!",
        },
        {
            name: "Hans",
            text: "The secret ingredient is crime.",
        }
    ]

    return (
    <div className='text-center'>
        <h1 className='text-5xl pb-16'>Testimonials</h1>
        <ul className='flex flex-row justify-between'>
            {testimonialsData.map(link => (
            <li>
                <p className='icon'>☄</p>
                <h2 className='text-3xl p-2'>{link.name}</h2>
                <p className='p-2'>"{link.text}"</p>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default Testimonials