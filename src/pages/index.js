import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout"
import SimpleSection from "../components/SimpleSection"
import Partners from "../components/Partners"

import About from "../components/About"
import Features from "../components/Features"
import Contact from "../components/Contact"

import Footer from "../components/Footer"
import coldVideo from "/src/assets/seasons_cold_temperate.mp4"
import Website_Cover from "/src/assets/Website_Cover.png"
import Playconomics_Text from "/src/assets/Playconomics_Text.png"
import { Parallax } from "react-scroll-parallax";

const IndexPage = ({ data }) => {
    const { aboutData, featuresData, contactData } = data;

    const siteData = data.siteData;
    const content = siteData.frontmatter.content;

    return (
    <Layout>
        <div className="relative h-screen w-screen mb-[125px] flex justify-center items-center">
            {/*<h1 className="largePagename text-[10rem] text-white drop-shadow-sm mb-10">PLAYCONOMICS</h1>*/}
            <Parallax translateY={["-300px", "300px"]} className="absolute top-0 h-full w-full rounded z-[-1]">
              <img src={Website_Cover} alt="island2" className="w-full h-full object-cover object-center mt-[-50px]" />
            </Parallax>
            <Parallax translateY={["-200px", "500px"]} className="absolute top-0 rounded z-[-1]">
             <img src={Playconomics_Text} alt="Playconomics" className="object-scale-down object-center" />
            </Parallax>
        </div>
        {content.map((link, index) => (
          <SimpleSection key={index} index={index} props={data.allFile}>
            <h1 className="text-3xl md:text-4xl mb-8 uppercase">{link.title}</h1>
            <p className="text-xl md:text-2xl">{link.body}</p>
          </SimpleSection>
        ))}
        <SimpleSection>

          <div className="absolute top-0 left-0 right-0">
            <h1 className="text-3xl md:text-4xl uppercase">Our Collaborators</h1>
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[1080px] m-4 p-4 md:p-16 bg-[rgba(255,255,255,0.25)] rounded">
                <Partners />
              </div>
            </div>
          </div>

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
    allFile(filter: { relativePath: { in: ["globe.png", "houses.png", "government.png", "turbines.png", "trees.png", "graph.png", "athena.png", "mountain.png"] } }) {
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