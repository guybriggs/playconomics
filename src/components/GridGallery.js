import React, { useState } from "react";
import { graphql, useStaticQuery } from 'gatsby';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GridGallery = () => {
    const [index, setIndex] = useState(-1);
    
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        quality: 50
                    )
                }
            }
        }
    }
    `);

    const images = data.allFile.nodes;

    const photos = images.map((image) => ({
        src: image.childImageSharp.gatsbyImageData.images.fallback.src,
        width: image.childImageSharp.gatsbyImageData.width, // Adjust width as needed
        height: image.childImageSharp.gatsbyImageData.height, // Adjust height as needed
        name: image.name,
    }));

    const myStyle = {
        borderRadius: '0.375rem',
        overflow: 'hidden',
    }

    return (
        <>
            <PhotoAlbum
            photos={photos}
            layout="rows"
            rowConstraints={{maxPhotos: 5}}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <a href={photo.href} style={{...wrapperStyle, ...myStyle}}>
                    {renderDefaultPhoto({ wrapped: true })}
                </a>
            )}
            />
    
            <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
      );



    /*return (
        <div>
        {images.map((link, index) => (
            <div>
                {link.childImageSharp.gatsbyImageData.width}
            </div>
        ))}
        </div>
    );*/
};

export default GridGallery;

/*const GridGallery = () => {
  const [index, setIndex] = useState(-1);

  const images = data.allFile.nodes;

  console.log(images);

  // Transform queried images into the format expected by PhotoAlbum
  const photos = images.map((image) => ({
    src: image.childImageSharp.gatsbyImageData,
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    name: image.name,
  }));

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default GridGallery;*/
