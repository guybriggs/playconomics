import * as React from "react"
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

const IndexPage = () => {
    
    const iconSize = 96;

    const lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere nisi vitae eleifend auctor. Pellentesque efficitur arcu id porttitor ornare. Nam scelerisque lectus ut iaculis laoreet. Nullam quis ex ac purus commodo tempor vitae a dui. Mauris ut metus non erat pharetra luctus. Nunc hendrerit maximus porta. Aliquam feugiat nulla vitae ornare laoreet. Sed aliquam neque urna, at sagittis velit rhoncus ut. Aenean scelerisque consectetur tortor ut pretium. Vestibulum diam ipsum, tempus ut sapien ut, viverra sagittis nunc. Cras ultricies tincidunt mollis. Aliquam sagittis erat in massa maximus, eget mollis elit consequat. Nunc porttitor ut odio eu luctus.
    `

    const aboutPage = [
        {
            icon: <Grid size={iconSize} />,
            name: 'What is Playconomics?',
            text: lorem,
        },
        {
            icon: <MousePointer size={iconSize} />,
            name: 'How does it work?',
            text: lorem,
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