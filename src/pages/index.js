import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import About from "../components/About"
import Features from "../components/Features"
import Contact from "../components/Contact"
import squareImage from "../assets/placeholder.png"
import desertVideo from "../assets/desert_360rotate.mp4"
import mediterraneanVideo from "../assets/mediterranean_winter_360rotate.mp4"
import coldVideo from "../assets/seasons_cold_temperate.mp4"
import { Users } from 'react-feather'
import { Grid } from 'react-feather'
import { Globe } from 'react-feather'
import { MousePointer } from 'react-feather'

const IndexPage = ({ data }) => {
    const { aboutData, featuresData, contactData } = data;

    return (
    <Layout>
        <div className="relative h-screen md:h-[110vh] w-screen">
            <video autoPlay muted loop className="absolute top-0 h-full w-full object-cover rounded z-[-1]">
                <source src={coldVideo} type="video/mp4"></source>
            </video>
        </div>
        <div id="about"></div>
        <About data={aboutData} />
        <div id="features"></div>
        <Features data={featuresData} />
        <div id="contact"></div>
        <Contact data={contactData} />
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
        main
        secondary
        text
        intro {
            title
            body
        }
        fullsizevideo
        partners {
            partner
        }
      }
    }
    featuresData: markdownRemark(frontmatter: { title: { eq: "Features" } }) {
      frontmatter {
        title
        main
        secondary
        text
        awards {
            award
            year
        }
        fullsizevideo
        details {
            title
            body
        }
      }
    }
    contactData: markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
      frontmatter {
        title
        main
        secondary
        text
        body
      }
    }
  }
`;