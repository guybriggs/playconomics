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
        <h1 className='text-4xl p-4 text-center'>{title}</h1>
        <div className='flex gap-8 my-8'>
            <div className='flex-1 grid grid-cols-2 text-center'>
            {awards.slice(0, 4).map(item => (
                <div>
                    <h1>{item.award}</h1>
                    <p>{item.year}</p>
                </div>
            ))}
            </div>
            <div className='flex-1 flex flex-col gap-4'>
            {awards.slice(4).map(item => (
                <div>
                    {item.award} {item.year}
                </div>
            ))}
            </div>
        </div>
        <FullsizeVideo path={fullsizevideo} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
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