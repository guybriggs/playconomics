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
// import coldVideo from "/src/assets/seasons_cold_temperate.mp4"
import trailerVideo from '/src/assets/play2024_trailer.mp4'
import Website_Cover from "/src/assets/Website_Cover.png"
import Playconomics_Text from "/src/assets/Playconomics_Text.png"
import playBtn from '/src/assets/play.png'
import { Parallax } from "react-scroll-parallax";

const CoverImage = ({ onPlayClicked }) => {
  const [playHover, setPlayHover] = React.useState(false);

  return <div className="relative h-screen w-screen mb-[125px] flex justify-center items-center">
    {/*<h1 className="largePagename text-[10rem] text-white drop-shadow-sm mb-10">PLAYCONOMICS</h1>*/}
    <Parallax translateY={["-300px", "300px"]} className="absolute top-0 h-full w-full rounded z-[-1]">
      <img src={Website_Cover} alt="island2" className="w-full h-full object-cover object-center" />
    </Parallax>
    <div className="object-center object-scale-down w-5/6 flex flex-col justify-evenly items-center cursor-pointer"
        onMouseEnter={() => setPlayHover(true)} onMouseLeave={() => setPlayHover(false)} onClick={onPlayClicked} >
      <img src={Playconomics_Text} alt="Playconomics" className="" />
      <img src={playBtn} alt="Play video" className={`object-center w-1/6 transition-opacity duration-500 ${playHover ? 'opacity-80' : 'opacity-30'}`} />
    </div>
    {/* <div className="object-scale-down object-bottom w-1/8"></div> */}
  </div>;
};

const CoverVideo = ({ onFinished }) => {
  return <div className="relative h-screen md:h-[110vh] w-screen" onClick={onFinished} >
    <video autoPlay className="absolute top-0 h-full w-full object-cover rounded z-[-1]">
        <source src={trailerVideo} type="video/mp4"></source>
    </video>
  </div>;
}

const IndexPage = ({ data }) => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const { aboutData, featuresData, contactData } = data;

    const siteData = data.siteData;
    const content = siteData.frontmatter.content;

    const onPlayClicked = () => {
      setPlayVideo(true);
    };

    const onFinished = () => {
      setPlayVideo(false);
    };

    return (
    <Layout>
        {!playVideo && <CoverImage onPlayClicked={onPlayClicked} />}
        {playVideo && <CoverVideo onFinished={onFinished} />}
        {content.map((link, index) => (
          <SimpleSection key={index} index={index} props={data.allFile}>
              <div className="w-1/2">
                <h1 className="text-3xl md:text-4xl mb-8 uppercase">{link.title}</h1>
                <p className="text-xl md:text-2xl">{link.body}</p>
              </div>
          </SimpleSection>
        ))}
        <SimpleSection>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl uppercase">Our Collaborators</h1>
            <div className="w-full my-8 p-8 bg-[rgba(255,255,255,0.25)] rounded">
              <Partners />
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
    allFile(filter: { relativePath: { in: [
      "globe.png",
      "houses.png",
      "government.png",
      "turbines.png",
      "trees.png",
      "graph.png",
      "athena.png",
      "mountain.png",
      "forest_FG.png",
      "forest_MG.png",
      "forest_BG.png"
    ] } }) {
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