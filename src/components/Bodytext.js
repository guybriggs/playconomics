import React from 'react'
import BackToTop from '../components/BackToTop'
import * as textStyles from "../styles/bodytext.module.css"

const Contact = ({ children }) => {
    return (
    <div className='w-full bg-[#53bdc8]'>
        <BackToTop />
        <div id="home"></div>
        <div className='w-full md:w-[1080px] m-auto bg-white p-8 md:p-32'>
            <div className={textStyles.bodytext}>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Contact