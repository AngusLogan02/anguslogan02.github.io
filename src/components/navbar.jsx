import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"

const Navbar = () => {
    return (
        <div className='w-1/6 h-screen p-4 pt-20 fixed border-r-[1px] border-neutral-500 text-right'>
            <a href='https://github.com/anguslogan02' target="_blank" className='text-xl font-bold link-underline'>Angus Logan</a>
            <p className='font-light mt-2'>third year <span className='text-fuchsia-400'>Computer Science</span> student @ the University of Strathclyde</p>

            <div className='mt-4'>
                <ul>
                    <li><button className='text-xl mb-4 link-underline'><Link to="/">About Me</Link></button></li>
                    <li><button className='text-xl mb-4 link-underline'><Link to="/technologies">Technologies</Link></button></li>
                    <li><button className='text-xl mb-4 link-underline'><Link to="/contact">Contact Me</Link></button></li>
                </ul>
            </div>

            <div className='absolute bottom-20 -ml-4 w-full flex text-center justify-evenly'>
                <a className='hover:text-fuchsia-400 duration-300' href="https://github.com/anguslogan02" target="_blank"><AiOutlineGithub size={25} /></a>
                <a className='hover:text-fuchsia-400 duration-300' href="https://discordapp.com/users/211862681731203073" target="_blank"><BsDiscord size={25} /></a>
                <a className='hover:text-fuchsia-400 duration-300' href="https://www.linkedin.com/in/angus-logan-b83020226/" target="_blank"><AiFillLinkedin size={25} /></a>
                <a className='hover:text-fuchsia-400 duration-300' href="mailto:me@anguslogan.dev" target="_blank"><MdAlternateEmail size={25} /></a>
            </div>
        </div>
    )
}

export default Navbar