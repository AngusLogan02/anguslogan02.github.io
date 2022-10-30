import React from 'react'

const Technology = (props) => {
    const name = props.name
    const lang = props.lang
    const desc = props.desc
    const link = props.link
    
    return (
        <div className='w-3/4 border-neutral-50 border rounded-xl grid grid-flow-col mb-4'>
            <div>
                <p className='mx-4 mt-4 italic font-mono text-fuchsia-400'>name:</p>
                <p className='mx-4 mb-4'> { name } </p>
            </div>
            
            <div>
                <p className='mx-4 mt-4 italic font-mono text-fuchsia-400'>language:</p>
                <p className='mx-4 mb-4'> { lang } </p>
            </div>
            
            <div className='col-span-1'>
                <p className='mx-4 mt-4 italic font-mono text-fuchsia-400'>description:</p>
                <p className='mx-4 mb-4'> { desc } </p>
            </div>
            
            <div>
                <p className='mx-4 mt-4 italic font-mono text-fuchsia-400'>link:</p>
                <p className='mx-4 mb-4'> { link } </p>
            </div>
        </div>
    )
}

export default Technology