import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout"
import SimpleSection from "../components/SimpleSection"

import About from "../components/About"
import Features from "../components/Features"
import Contact from "../components/Contact"

import Footer from "../components/Footer"
import coldVideo from "/src/assets/seasons_cold_temperate.mp4"

const IndexPage = ({ data }) => {
    const { aboutData, featuresData, contactData } = data;

    const siteData = data.siteData;
    const content = siteData.frontmatter.content;

    return (
    <Layout>
        <div className="relative h-screen w-screen">
            <video autoPlay muted loop className="absolute top-0 h-full w-full object-cover rounded z-[-1]">
                <source src={coldVideo} type="video/mp4"></source>
            </video>
            {/*<h1 className="relative text-6xl md:text-9xl text-white text-center uppercase top-[40%] translate-y-[-50%]">Playconomics</h1>*/}
        </div>
        {content.map((link, index) => (
          <SimpleSection key={index} index={index} props={data.allFile}>
            <h1 className="text-4xl md:text-6xl">{link.title}</h1>
            <p className="py-16">{link.body}</p>
          </SimpleSection>
        ))}
        <SimpleSection>
          <Footer />
        </SimpleSection>
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
    allFile(filter: { relativePath: { in: ["closeup1.png", "collage1.png", "fishing1.png"] } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
    }
    siteData: markdownRemark(frontmatter: { pagename: { eq: "Playconomics" } }) {
      frontmatter {
        pagename
        content {
          title
          body
        }
      }
    }
    aboutData: markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
        palette {
          main
          secondary
          text
        }
        translate {
          startx
          endx
          starty
          endy
        }
        wave
        intro {
            title
            body
        }
        partners {
            partner
        }
      }
    }
    featuresData: markdownRemark(frontmatter: { title: { eq: "Features" } }) {
      frontmatter {
        title
        palette {
          main
          secondary
          text
        }
        translate {
          startx
          endx
          starty
          endy
        }
        wave
        awards {
            award
            year
        }
        details {
            title
            body
        }
      }
    }
    contactData: markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
      frontmatter {
        title
        palette {
          main
          secondary
          text
        }
        translate {
          startx
          endx
          starty
          endy
        }
        wave
        message
      }
    }
  }
`;