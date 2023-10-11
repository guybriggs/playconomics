import React from 'react'

const GridFromArray = (props) => {

    const array = props.arrayProp;

    return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
        {array.map(item => (
            <div>
                {item.img ? (
                    <div>
                        <img src={item.img} alt={item.img} className='object-cover w-full h-full rounded'></img>
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