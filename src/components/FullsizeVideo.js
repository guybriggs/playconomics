import React from 'react'

const FullsizeVideo = ( props ) => {
    const { videoUrl } = props;

    return (
    <video autoPlay muted loop className="w-full bg-slate-600 my-8 rounded">
        <source src={videoUrl} type="video/mp4"></source>
    </video>
    )
}

export default FullsizeVideo