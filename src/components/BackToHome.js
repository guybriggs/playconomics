import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Link as PageLink  } from "gatsby"

const BackToHome = () => {
    return (
        <div className='flex justify-center'>
            <PageLink to="/">
                <div className='bg-slate-900 text-white p-4 m-4 rounded transition cursor-pointer'>
                    <ArrowLeft size={32} />
                </div>
            </PageLink>
        </div>
    )
}

export default BackToHome