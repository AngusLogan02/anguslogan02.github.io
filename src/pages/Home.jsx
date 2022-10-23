import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='max-w-xl'>
            <h1 className='text-3xl mb-4'>I am a</h1>
            <p>
                20 year old Computer Science student with an interest in web applications, linux and Golang.
                I've written web and command line applications in Golang, Python, Java and C that make use of
                various <span className='link-underline font-bold'><Link to="/technologies">technologies</Link></span>.
            </p>
            <p className='mt-4'>
                Everything I have made so far is open source, and can be found on 
                my <a href = "https://github.com/anguslogan02" className='link-underline font-bold' target="_blank" rel="noreferrer">GitHub</a>.
                I like the idea of FOSS, and strive to keep all my projects open and free.
            </p>
            <p className='mt-4'>
                When I'm not doing university work or working on a project of mine, I enjoy playing the guitar,
                lifting, playing games, and tinkering with hardware and software. Most notably I've made a button box
                from an <span className='font-bold link-underline'><Link to="/technologies">Arduino</Link></span> to use with a flight simulator game,
                and a virtualisation server using <span className='font-bold link-underline'><Link to="/technologies">Proxmox</Link></span>, which I've
                used to run game servers, a NAS and thin clients.
            </p>
        </div>
    )
}

export default Home