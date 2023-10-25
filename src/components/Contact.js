import React from 'react'
import Section from "./Section"
import Footer from "./Footer"
import UnderlineLink from "./UnderlineLink"

const Contact = ({ data }) => {
    const { 
        title,
        main,
        secondary,
        text,
        body
    } = data.frontmatter;

    return (
    <Section main={main} secondary={secondary} text={text}>
        <div className='text-center'>
            <h1 className='text-4xl p-4'>{title}</h1>
            <p className='my-8'>{body}</p>
            <UnderlineLink>email@email.com</UnderlineLink>
            <Footer />
        </div>
    </Section>
    )
}

export default Contact