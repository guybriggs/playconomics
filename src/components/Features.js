import React from 'react'
import Section from './Section.js'
import FullsizeVideo from './FullsizeVideo.js'

import { Award } from 'react-feather'

import desertVideo from '/src/assets/desert_360rotate.mp4';
import award1 from '/src/assets/award1.png';
import award2 from '/src/assets/award2.png';
import award3 from '/src/assets/award3.png';
import award4 from '/src/assets/award4.png';

const Features = ({ data }) => {
    const { 
        title,
        awards,
        details
    } = data.frontmatter;

    //Hardcodes
    const awardsArray = [
        award1,
        award2,
        award3,
        award4,
    ]

    return (
    <Section props={data}>
        <h1 className='text-4xl p-4 text-center'>{title}</h1>
        <div className='flex flex-col md:flex-row gap-8 my-16 items-center'>
            <div className='flex-1 grid grid-cols-2 text-center'>
            {awards.slice(0, 4).map((item, i) => (
                <div key={i}>
                    <div className='flex justify-center p-4'>
                        <img src={awardsArray[i]} alt={item.award}></img>
                    </div>
                    <h1>{item.award}</h1>
                    <p>{item.year}</p>
                </div>
            ))}
            </div>
            <div className='flex-1 flex flex-col gap-4'>
            {awards.slice(4).map((item, i) => (
                <div key={i}>
                    {item.award} {item.year}
                </div>
            ))}
            </div>
        </div>
        <FullsizeVideo videoUrl={desertVideo} />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
        {details.map((item, i) => (
            <div key={i}>
                <h1 className='text-2xl text-center p-4'>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
        </div>
    </Section>
    )
}

export default Features