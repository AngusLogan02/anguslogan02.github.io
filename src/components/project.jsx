import React from 'react'

const Project = (props) => {
    const name = props.name
    const link = props.link
    const desc = props.desc
    const tech = props.tech

    const parseTech = (tech) => {
        return (
            <ul className='ml-2'>
                {
                    tech.map(name => {
                        return <li>- { name }</li>
                    })
                }
            </ul>
        )
    }

    return (
        <div className='border-neutral-50 border-[1px] w-5/6 rounded-xl p-4'>
            <h1 className='text-3xl text-fuchsia-400'><a href={ link } className='link-underline' target="_blank">{ name }</a></h1>
            <h2 className='text-neutral-400'>{ desc }</h2>

            <hr className='my-2 bg-neutral-500 h-px' />

            <p>Used: { parseTech(tech) }</p>
        </div>
    )
}

export default Project