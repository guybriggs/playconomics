import React from 'react'

const FullsizeVideo = ( props ) => {
    const { path } = props;

    return (
    <video autoPlay muted loop className="w-full bg-slate-600 my-8 rounded shadow">
        <source src={path} type="video/mp4"></source>
    </video>
    )
}

export default FullsizeVideo