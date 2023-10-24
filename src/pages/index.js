import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Awards from "../components/Awards"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Partners from "../components/Partners"
import GridFromArray from "../components/GridFromArray"
import squareImage from "../assets/placeholder.png"
import desertVideo from "../assets/desert_360rotate.mp4"
import mediterraneanVideo from "../assets/mediterranean_winter_360rotate.mp4"
import coldVideo from "../assets/seasons_cold_temperate.mp4"
import { Users } from 'react-feather'
import { Grid } from 'react-feather'
import { Globe } from 'react-feather'
import { MousePointer } from 'react-feather'

const IndexPage = ({ data }) => {

    const iconSize = 96;

    const lorem = data.aboutData.frontmatter.mainColour;

    const aboutPage = [
        {
            icon: <Grid size={iconSize} />,
            name: 'What is Playconomics?',
            text: `
            Playconomics is an award-winning Ed-tech platform developed at UNSW that weaves the videogame metaverse with standard university material to create online courses that motivate, influence, and inspire learning as a fun, engaging and rewarding journey. Its virtual world is shared by thousands of students, and it can persist and outlive the duration of a course.
            
            The goal of Playconomics is to create the most open-ended, multidisciplinary and fun teaching tool that ever existed.
            
            So far, 65,000+ students have successfully taken Playconomics courses at universities and high schools across Australia and abroad – and the results speak for themselves.
            
            Playconomics is designed to natively run Randomised-Controlled-Trials (RCTs), the gold standard for establishing causal evaluation research, and our experimental data is very positive. It shows remarkably higher academic performance across many different student demographics, as well as an exceptional decrease in course failing rates. Finally, student surveys place Playconomics courses among the highest ranked in terms of student satisfaction at every university that runs them.            
            `,
        },
        {
            icon: <MousePointer size={iconSize} />,
            name: 'How does it work?',
            text: `
            When a student joins Playconomics, they’re faced with a vast, persistent world that’s full of potential. They have the opportunity to construct a society from the ground up, and in doing so make decisions that are informed by the principles of economics, business, engineering, medicine, and more.

            Whether this virtual society stumbles on the same social and environmental issues we see in the real world is up to you. What follows is a troubleshooting exercise in social and technical engineering, where all fields come together in a truly interdisciplinary effort, driven by a common transparent language – Playconomics.
            
            Playconomics has been developed alongside Academia, a custom Learning Management System where students can test their knowledge and view their marks, with an emphasis on seamless integration and authoring collaboration.                      
            `,
        },
    ]

    const featuresPage = [
        {
            icon: <Users size={iconSize} />,
            name: 'Collective learning',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Interdisciplinarity',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Many-versity',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Immersive presence',
            text: lorem,
        },
    ]

    const universePage = [
        {
            name: 'PlayMed',
            text: lorem,
        },
        {
            img: squareImage,
        },
        {
            img: squareImage,
        },
        {
            name: 'PlayEnergy',
            text: lorem,
        },
    ]
    
    return (
        <Layout>
            <div className="relative h-screen md:h-[110vh] w-screen">
                <video autoPlay muted loop className="absolute top-0 h-full w-full object-cover rounded z-[-1]">
                    <source src={coldVideo} type="video/mp4"></source>
                </video>
            </div>
            <div id="about">
            <Section index={0}>
                <GridFromArray arrayProp={aboutPage} />
                <video autoPlay muted loop className="my-8 rounded">
                    <source src={mediterraneanVideo} type="video/mp4"></source>
                </video>
                <Partners />
            </Section>
            </div>
            <div id="features">
            <Section index={1}>
                <Awards />
                <video autoPlay muted loop className="my-8 rounded">
                    <source src={desertVideo} type="video/mp4"></source>
                </video>
                <GridFromArray arrayProp={featuresPage} />
            </Section>
            </div>
            <div id="universe">
            <Section index={2}>
                <GridFromArray arrayProp={universePage} />
            </Section>
            </div>
            <div id="contact">
            <Section index={3}>
                <Contact />
                <Footer />
            </Section>
            </div>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Playconomics</title>

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    aboutData: markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
        mainColour
        secondaryColour
        textColour
        intro {
          title
          body
        }
      }
    }
  }
`;