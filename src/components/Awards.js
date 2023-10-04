import React from 'react'
import { Award } from 'react-feather'
import { Bookmark } from 'react-feather'

const Awards = () => {
    let awardsData = [
        {
            name: "UNSW Business School 2022 Bill Birkett Award for Sustained Teaching Excellence",
        },
        {
            name: "UNSW President 2019 Award for Building Collaborations",
        },
        {
            name: "Wharton School 2017 Reimagine Education Social Sciences Gold Award",
        },
        {
            name: "Australian Government 2016 Citation for Outstanding Contributions to Student Learning",
        },
    ]

    let otherAwards = [
        {
            name: "UNSW Business School 2016 John Prescott Outstanding Innovation Award",
        },
        {
            name: "UNSW Business School 2013-2015 Student Choice Award",
        },
        {
            name: "University of New South Wales Heinz Harant Award for Teaching Innovation",
        },
        {
            name: "UNSW Vice-Chancellor 2013 Award for Excellence in the Use of Learning & Teaching Technologies",
        },
        {
            name: "Australian School of Business 2013 Outstanding Technology-Enabled Teaching Innovation Award",
        },
        {
            name: "University of New South Wales 2013 Innovation Award (finalist)",
        },
    ]

    return (
    <div className='text-center'>
        <h1 className='text-5xl pb-16'>Awards</h1>
        <ul className='grid grid-cols-2 md:flex flex-row pb-8'>
            {awardsData.map(link => (
            <li className='flex-1'>
                <p className='flex justify-center'><Award size={96}></Award></p>
                <p className='p-2'>{link.name}</p>
            </li>
            ))}
        </ul>
        <ul className='grid'>
            {otherAwards.map(link => (
            <li>
                <p className='p-2'><Bookmark className='inline-block'></Bookmark> {link.name}</p>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default Awards