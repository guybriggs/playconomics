import * as React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Awards from "../components/Awards"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import headerImage from "../images/header.png"

const IndexPage = () => {
    return (
        <Layout>
            <div className="h-screen">
                <img src={headerImage} alt="header" className="absolute top-0 z-[-1]"></img>
            </div>
            <Section index={1}>
                <Awards></Awards>
            </Section>
            <Section index={2}>
                <Features></Features>
            </Section>
            <Section index={3}>
                <Testimonials></Testimonials>
            </Section>
            <Section index={4}>
                <Contact></Contact>
                <Footer></Footer>
            </Section>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Playconomics</title>