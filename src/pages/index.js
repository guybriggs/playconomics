import * as React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Awards from "../components/Awards"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import GridFromArray from "../components/GridFromArray"
import headerImage from "../images/header.png"
import { Users } from 'react-feather'
import { Briefcase } from 'react-feather'
import { Grid } from 'react-feather'
import { Globe } from 'react-feather'

const IndexPage = () => {
    
    const iconSize = 96;

    const lorem = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere nisi vitae eleifend auctor. Pellentesque efficitur arcu id porttitor ornare. Nam scelerisque lectus ut iaculis laoreet. Nullam quis ex ac purus commodo tempor vitae a dui. Mauris ut metus non erat pharetra luctus. Nunc hendrerit maximus porta. Aliquam feugiat nulla vitae ornare laoreet. Sed aliquam neque urna, at sagittis velit rhoncus ut. Aenean scelerisque consectetur tortor ut pretium. Vestibulum diam ipsum, tempus ut sapien ut, viverra sagittis nunc. Cras ultricies tincidunt mollis. Aliquam sagittis erat in massa maximus, eget mollis elit consequat. Nunc porttitor ut odio eu luctus.

    Vivamus id nulla nunc. Duis vel pellentesque metus. In in consequat massa. In lorem neque, viverra et neque eu, rhoncus aliquam risus. Integer mattis arcu sed tempor facilisis. Sed sit amet est a justo fermentum volutpat. Vestibulum non erat magna. Pellentesque iaculis nulla a ornare ultricies. Suspendisse imperdiet venenatis leo vitae finibus.
    `

    const pageOne = [
        {
            icon: <Grid size={iconSize} />,
            name: 'What is Playconomics?',
            text: lorem,
            colSpan: 'col-span-2',
        },
        {
            img: headerImage,
            text: 'Image from Playconomics, 2023.',
            colSpan: 'col-span-2',
        },
    ]

    const pageTwo = [
        {
            icon: <Users size={iconSize} />,
            name: 'Interdisciplinarity',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Collective learning',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Collective learning',
            text: lorem,
        },
        {
            icon: <Globe size={iconSize} />,
            name: 'Collective learning',
            text: lorem,
        },
    ]

    const pageThree = [
        {
            img: headerImage,
            text: 'Hello!',
            colSpan: 'col-span-2',
        },
        {
            icon: <Briefcase size={iconSize} />,
            name: 'Outcomes',
            text: lorem,
            colSpan: 'col-span-2',
        },
    ]
    
    return (
        <Layout>
            <div className="relative h-screen md:h-[110vh] w-screen">
                <img src={headerImage} alt="header" className="absolute top-0 h-full w-full object-cover z-[-1]"></img>
            </div>
            <div id="awards">
            <Section index={0}>
                <Awards></Awards>
            </Section>
            </div>
            <div id="features">
            <Section index={1}>
                <GridFromArray arrayProp={pageOne}></GridFromArray>
            </Section>
            </div>
            <div id="testimonials">
            <Section index={2}>
                <GridFromArray arrayProp={pageTwo}></GridFromArray>
            </Section>
            </div>
            <div id="outcomes">
            <Section index={1}>
                <GridFromArray arrayProp={pageThree}></GridFromArray>
            </Section>
            </div>
            <div id="contact">
            <Section index={3}>
                <Contact></Contact>
                <Footer></Footer>
            </Section>
            </div>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Playconomics</title>