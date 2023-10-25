import React from 'react'

const Blockquote = ({ children }) => {
    return (
    <blockquote className='flex justify-center my-32'>
        <div className='blockquoteInner max-w-[75%] relative text-2xl text-center'>
            {children}
        </div>
    </blockquote>
    )
}

export default Blockquote