import React from 'react'
import UnderlineLink from "./UnderlineLink"

const Awards = () => {
    return (
    <div className='text-center'>
        <h1 className='text-5xl p-8'>Contact Us</h1>
        <p className='pb-8'>From everyone here at Lionsheart, we'd love to hear from you! Please use our email below.</p>
        <UnderlineLink>email@email.com</UnderlineLink>
    </div>
    )
}

export default Awards