import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='w-1/6 h-screen p-4 pt-10 fixed border-r-[1px] border-neutral-500 text-right'>
            <a href='https://github.com/anguslogan02' target="blank" className='text-neutral-50 text-xl font-bold link-underline'>Angus Logan</a>
            <p className='text-neutral-50 font-light'>third year <span className='text-fuchsia-400'>Computer Science</span> student @ the University of Strathclyde</p>

            <div className='mt-20'>
                <ul>
                    <li><button className='text-neutral-50 text-xl mb-4 link-underline'><Link to="/">Home</Link></button></li>
                    <li><button className=' text-neutral-50 text-xl mb-4 link-underline'><Link to="/technologies">Technologies</Link></button></li>
                    <li><button className=' text-neutral-50 text-xl mb-4 link-underline'><Link to="/contact">Contact Me</Link></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar