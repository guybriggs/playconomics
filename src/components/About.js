import React from 'react'
import Section from './Section.js'
import FullsizeVideo from './FullsizeVideo.js'

import mediterraneanVideo from '/src/assets/mediterranean_winter_360rotate.mp4';

const About = ({ data }) => {

    const { 
        title,
        intro,
        partners
    } = data.frontmatter;

    return (
    <Section props={data}>
        <h1 className='text-4xl text-center p-4'>{title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
        {intro.map((item, i) => (
            <div key={i}>
                <h1 className='text-2xl text-center p-4'>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
        </div>
        <FullsizeVideo videoUrl={mediterraneanVideo} />
        <div className='flex justify-between my-8'>
        {partners.map((item, i) => (
            <div key={i}>
                <h1>{item.partner}</h1>
            </div>
        ))}
        </div>
    </Section>
    )
}

export default About