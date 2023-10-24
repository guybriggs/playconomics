import React from 'react'
import Section from './Section.js'
import FullsizeVideo from './FullsizeVideo.js'

const Features = ({ data }) => {
    const { 
        title,
        main,
        secondary,
        text,
        awards,
        fullsizevideo,
        details
    } = data.frontmatter;

    return (
    <Section main={main} secondary={secondary} text={text}>
        <h1 className='text-4xl text-center'>{title}</h1>
        <div className='flex justify-between text-center'>
        {awards.map(item => (
            <div>
                <h1>{item.award}</h1>
                <p>{item.year}</p>
            </div>
        ))}
        </div>
        <FullsizeVideo path={fullsizevideo} />
        <div className='grid grid-cols-2'>
        {details.map(item => (
            <div>
                <h1 className='text-2xl text-center'>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
        </div>
    </Section>
    )
}

export default Features