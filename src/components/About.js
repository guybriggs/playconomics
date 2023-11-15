import React from 'react'
import Section from './Section.js'
import Blockquote from './Blockquote.js'
import FullsizeVideo from './FullsizeVideo.js'

import { Users } from 'react-feather'

import mediterraneanVideo from '/src/assets/mediterranean_winter_360rotate.mp4';

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
            url: "/src/assets/UNSW.png"
        },
        {
            string: "The University of Queensland Australia",
            url: "/src/assets/UOQ.png"
        },
        {
            string: "The University of Adelaide",
            url: "/src/assets/UOA.png"
        },
        {
            string: "STEP UP",
            url: "/src/assets/STEP-UP.png"
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
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjcoKbQ30vh8t4aQgTIPlIuO0KDOOdZJkqPnvM-5jZrg9kub_7kssV78QQNWBr5394A&usqp=CAU'></img>
        <img src='/src/assets/UNSW.png'></img>
        <div className='grid grid-cols-2 md:flex justify-between text-center my-16'>
        {partners.map((item, i) => (
            <div key={i}>
                <div className='flex justify-center p-4'>
                    <img src={returnUrlFromString(item.partner)}></img> 
                </div>
                <h1>{item.partner}</h1>
            </div>
        ))}
        </div>
    </Section>
    )
}

export default About