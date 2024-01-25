import * as React from "react"
import { graphql } from "gatsby"
//import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout"
import SimpleSection from "../components/SimpleSection"
import Partners from "../components/Partners"
import Awards from "../components/Awards"
import GridGallery from "../components/GridGallery";

//import About from "../components/About"
//import Features from "../components/Features"
//import Contact from "../components/Contact"

import Footer from "../components/Footer"
// import coldVideo from "/src/assets/seasons_cold_temperate.mp4"
import trailerVideo from '/src/assets/play2024_trailer.mp4'
import Website_Cover from "/src/assets/Website_Cover.png"
import Playconomics_Text from "/src/assets/Playconomics_Text.png"
import playBtn from '/src/assets/play.png'
//import { Parallax } from "react-scroll-parallax";

const CoverImage = ({ onPlayClicked }) => {
  const [playHover, setPlayHover] = React.useState(false);

  return (
    <div className="relative">
      <img src={Website_Cover} alt="island2" className="w-full max-h-screen mb-8 md:mb-16 lg:mb-32 object-cover object-center" />
      <div className="absolute top-0 left-0 w-full h-full object-center object-scale-down w-5/6 flex gap-0 md:gap-8 flex-col justify-center items-center cursor-pointer"
          onMouseEnter={() => setPlayHover(true)} onMouseLeave={() => setPlayHover(false)} onClick={onPlayClicked} >
        <img src={Playconomics_Text} alt="Playconomics" className="w-full md:w-1/2" />
        <div className="largePagename hidden md:block text-3xl text-white font-black drop-shadow-lg">"An intimate massive multiplayer online world...<br></br>...where you can build your own aspirations.</div>
        <img src={playBtn} alt="Play video" className={`w-1/6 md:w-[100px] object-center transition-opacity duration-500 ${playHover ? 'opacity-80' : 'opacity-30'}`} />
      </div>
    </div>
  );
};

const CoverVideo = ({ onFinished }) => {
  return (
    <div className="relative" onClick={onFinished}>
      <video autoPlay className="w-full max-h-screen mb-8 md:mb-16 lg:mb-32 object-cover">
        <source src={trailerVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

const IndexPage = ({ data }) => {
    const [playVideo, setPlayVideo] = React.useState(false);
    // const { aboutData, featuresData, contactData } = data;
    const { featuresData } = data;

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
          <SimpleSection key={index} index={index} props={data.assetsFolder}>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl md:text-4xl mb-8 uppercase">{link.title}</h1>
                <p className="text-xl md:text-2xl">{link.body}</p>
              </div>
          </SimpleSection>
        ))}

        <SimpleSection index={7}>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl mb-8 uppercase">Gallery</h1>
            <GridGallery />
          </div>
        </SimpleSection>

        <SimpleSection index={8}>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl mb-8 uppercase">Our Collaborators</h1>
            <div className="w-full my-8 p-8] rounded">
              <Partners />
            </div>
          </div>
        </SimpleSection>

        <SimpleSection index={9}>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl mb-8 uppercase">Awards</h1>
            <div className="w-full my-8 p-8">
              <Awards data={featuresData} />
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
    assetsFolder: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 100
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