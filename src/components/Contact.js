import React from 'react'
import Section from "./Section"
import Footer from "./Footer"
import UnderlineLink from "./UnderlineLink"

const Contact = ({ data }) => {
    const { 
        title,
        body
    } = data.frontmatter;

    return (
    <Section props={data}>
        <div className='text-center'>
            <h1 className='text-4xl p-4'>{title}</h1>
            <p className='my-8'>{body}</p>
            <UnderlineLink>
                <a href="mailto:playconomics@lionsheartstudios.com">playconomics@lionsheartstudios.com</a>
            </UnderlineLink>
            <Footer />
        </div>
    </Section>
    )
}

export default Contact