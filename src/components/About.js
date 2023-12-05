import React from 'react'
import Section from './Section.js'
import Blockquote from './Blockquote.js'
import FullsizeVideo from './FullsizeVideo.js'

import mediterraneanVideo from '/src/assets/mediterranean_winter_360rotate.mp4';
import UNSWlogo from '/src/assets/UNSW.png';
import UOQlogo from '/src/assets/UOQ.png';
import UOAlogo from '/src/assets/UOA.png';
import STEPUPlogo from '/src/assets/STEP-UP.png';

const About = ({ data }) => {

    const { 
        title,
        intro,
        partners
    } = data.frontmatter;

    //Hardcoded
    const logosArray = [
        {
            string: "The University of New South Wales",
            url: UNSWlogo,
        },
        {
            string: "The University of Queensland Australia",
            url: UOQlogo,
        },
        {
            string: "The University of Adelaide",
            url: UOAlogo,
        },
        {
            string: "STEP UP",
            url: STEPUPlogo,
        },
    ];

    function returnUrlFromString(string) {
        for (let i = 0; i < logosArray.length; i++) {
            if (logosArray[i].string == string) {
                return logosArray[i].url;
            }
        }
        return null;
    }

    return (
    <Section props={data}>
        <h1 className='text-4xl text-center p-4'>{title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-16'>
        {intro.map((item, i) => (
            <div key={i}>
                <h1 className='text-2xl text-center p-4'>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
        </div>
        <Blockquote><i>Any sufficiently advanced <b>education</b> is indistinguishable from <b>fun</b>.</i></Blockquote>
        <FullsizeVideo videoUrl={mediterraneanVideo} />
        <div className='grid grid-cols-2 md:flex justify-between items-end gap-8 my-16'>
        {partners.map((item, i) => (
            <div key={i} className='flex-1 align-baseline'>
                <img src={returnUrlFromString(item.partner)} alt={item.partner}></img>
            </div>
        ))}
        </div>
    </Section>
    )
}

export default About