import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from "../components/Layout"
import SimpleSection from "../components/SimpleSection"
import Partners from "../components/Partners"
import Awards from "../components/Awards"
import GridGallery from "../components/GridGallery";

//import About from "../components/About"
//import Features from "../components/Features"
//import Contact from "../components/Contact"

import Footer from "../components/Footer"
//import coldVideo from "/src/assets/seasons_cold_temperate.mp4"
import trailerVideo from '/src/assets/play2024_trailer.mp4'
//import Website_Cover from "/src/assets/Website_Cover.png"
import Playconomics_Text from "/src/assets/Playconomics_Text.png"
import playBtn from '/src/assets/play.png'
//import { Parallax } from "react-scroll-parallax";

const CoverImage = ({ coverimage, onPlayClicked, handleKeyDown }) => {
  const [playHover, setPlayHover] = React.useState(false);

  return (
    <div className="relative">
      <GatsbyImage image={getImage(coverimage)} alt="island2" width="1920" height="1080" className="w-full max-h-screen object-cover object-center" />
      <div aria-label="Play video" className="absolute top-0 left-0 w-full h-full object-center object-scale-down w-5/6 flex gap-0 md:gap-8 flex-col justify-center items-center cursor-pointer"
          onMouseEnter={() => setPlayHover(true)} onMouseLeave={() => setPlayHover(false)} onClick={onPlayClicked} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        <img src={Playconomics_Text} alt="Playconomics" width="1409" height="146" className="w-full md:w-1/2" />
        <div className="largePagename hidden md:block text-3xl text-white font-black drop-shadow-lg">"An intimate massive multiplayer online world...<br></br>...where you can build your own aspirations.</div>
        <img src={playBtn} alt="Play video" width="190" height="190" className={`w-1/6 md:w-[100px] object-center transition-opacity duration-500 ${playHover ? 'opacity-80' : 'opacity-30'}`} />
      </div>
    </div>
  );
};

const CoverVideo = ({ onFinished, handleKeyDown }) => {
  return (
    <div aria-label="Close video" className="relative" onClick={onFinished} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
      <video autoPlay className="w-full max-h-screen object-cover mb-[25px] md:mb-[50px] lg:mb-[75px]">
        <source src={trailerVideo} type="video/mp4"></source>
        <track kind="captions" />
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

    const handleKeyDown = (e) => {
      var key_code = e.which || e.keyCode;
      if (key_code === 13) {
        onPlayClicked();
      }
    };

    const onPlayClicked = () => {
      setPlayVideo(true);
    };

    const onFinished = () => {
      setPlayVideo(false);
    };

    return (
    <Layout>

        {!playVideo && <CoverImage coverimage={data.coverImage} onPlayClicked={onPlayClicked} handleKeyDown={handleKeyDown} />}
        {playVideo && <CoverVideo onFinished={onFinished} handleKeyDown={handleKeyDown} />}

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
            <div className="w-full my-8 p-8 rounded-lg bg-[rgba(255,255,255,0.85)]">
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
    coverImage: file(relativePath: { eq: "Website_Cover.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    assetsFolder: allFile(
      filter: { 
        sourceInstanceName: { eq: "assets" }
        extension: { eq: "png" }
      }
    ) {
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