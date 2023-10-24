import React from 'react'
import Section from './Section.js'
import UnderlineLink from './UnderlineLink.js'

const Footer = ({ data }) => {
    const { 
        title,
        palette,
        intro,
        fullsizevideo,
        partners
      } = data.frontmatter;

    return (
    <Section main={palette.main} secondary={palette.secondary} text={palette.text}>
        
    </Section>
    )
}

export default Footer