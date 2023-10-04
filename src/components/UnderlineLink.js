import React from 'react'

const UnderlineLink = ({ children }) => {
    const buttonStyle = `
    border-2
    border-transparent
    uppercase
    `

    return (
    <button className={buttonStyle}>{children}</button>
    )
}

export default UnderlineLink