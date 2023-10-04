import React from 'react'

const GridFromArray = (props) => {

    const array = props.arrayProp;

    return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {array.map(item => (

            <div className={`${item.colSpan} self-center`}>
                {item.img ? (
                    <div>
                        <img src={item.img} className='object-cover w-full h-full rounded'></img>
                        <p className='text-center p-2'>{item.text}</p>
                    </div>
                ) : (
                    <div>
                        <div className='flex justify-center p-2'>{item.icon}</div>
                        <h1 className='text-center text-3xl p-2'>{item.name}</h1>
                        <p className='p-2'>{item.text}</p>
                    </div>
                )}
            </div>

        ))}
    </div>
    )
}

export default GridFromArray