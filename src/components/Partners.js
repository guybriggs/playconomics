import React from 'react'

import BUES from '/src/assets/BUES.png';
import QU from '/src/assets/QU.png';
import UAIC from '/src/assets/UAIC.png';
import UNSW from '/src/assets/UNSW.png';
import UOA from '/src/assets/UOA.png';
import UOC from '/src/assets/UOC.png';
import UOCI from '/src/assets/UOCI.png';
import UOF from '/src/assets/UOF.png';
import UOM from '/src/assets/UOM.png';
import UOP from '/src/assets/UOP.png';
import UOQ from '/src/assets/UOQ.png';
import WUT from '/src/assets/WUT.png';

const Partners = () => {
    const logosArray = [
        BUES,
        QU,
        UAIC,
        UNSW,
        UOA,
        UOC,
        UOCI,
        UOF,
        UOM,
        UOP,
        UOQ,
        WUT,
    ];

    return (
    <ul className='grid grid-cols-3 md:grid-cols-6 gap-8 flex items-center'>
    {logosArray.map((img, i) => (
        <li key={i}>
            <img src={img} alt={img}></img>
        </li>
    ))}
    </ul>
    )
}

export default Partners