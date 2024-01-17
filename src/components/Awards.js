import React from 'react'

const Awards = ({ data }) => {
    const { awards } = data.frontmatter;

    return (
    <div className='flex flex-col md:flex-row gap-8 text-lg'>
        <div className='flex-1 grid grid-cols-2 text-center'>
        {awards.slice(0, 4).map((item, i) => (
            <div key={i}>
                <h1>{item.award}</h1>
                <p>{item.year}</p>
            </div>
        ))}
        </div>
        <div className='flex-1 flex flex-col text-left'>
        {awards.slice(4).map((item, i) => (
            <div key={i}>
                {item.award} {item.year}
            </div>
        ))}
        </div>
    </div>
    )
}

export default Awards