import React from 'react'

const Awards = () => {
    let awardsData = [
        {
            name: "2013 Student Choice Award",
        },
        {
            name: "2013 Outstanding Technology-Enabled Teaching Innovation Award",
        },
        {
            name: "2015 Student Choice Award",
        },
        {
            name: "Award for Excellence in the use of Learning & Teaching Technologies",
        },
        {
            name: "Heinz Harant Award for Teaching Innovation",
        }
    ]

    return (
    <div className='text-center'>
    <h1 className='text-5xl pb-16'>Awards</h1>
        <ul className='flex flex-row justify-between'>
            {awardsData.map(link => (
            <li>
                <p className='icon icon-sml'>⛶</p>
                <p className='p-2'>{link.name}</p>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default Awards