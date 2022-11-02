import React from 'react'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

const Project = (props) => {
    const name = props.name
    const link = props.link
    const desc = props.desc
    const tech = props.tech
    const website = props.website

    const parseTech = (tech) => {
        return (
            <ul className='ml-4'>
                {
                    tech.map(name => {
                        return <li>- { name }</li>
                    })
                }
            </ul>
        )
    }

    return (
        <div className='w-full lg:h-1/4 lg:my-0 my-8'>
            <div className='flex'>
                <p className='text-2xl text-fuchsia-400 font-semibold mr-8'>{ name }</p>
                <a className='hover:text-fuchsia-400 duration-300 relative top-1' href={ link } target="_blank" rel="noreferrer"><AiOutlineGithub size={25} /></a>
                { website && <a className='hover:text-fuchsia-400 duration-300 relative top-1 ml-4' href={ website } target="_blank" rel="noreferrer"><AiOutlineLink size={25} /></a> }
            </div>

            <span className='italic'> { desc } </span>
            <p>Written using: <span className='font-mono'> { parseTech(tech) } </span></p>
        </div>
    )
}

export default Project