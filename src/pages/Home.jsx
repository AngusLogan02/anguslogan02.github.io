import React from 'react'
import { Link } from 'react-scroll'

const Home = (props) => {
    return (
        <>
            <div className='max-w-xl lg:h-screen'>
                <h1 className='text-3xl mb-4'>About Me</h1>
                <p>
                    I'm a 20 year old Computer Science student with an interest in web applications, linux and Golang.
                    I've written web and command line applications in Golang, Python, Java and C that make use of
                    various <button className='link-underline font-bold'><Link to="technologies" smooth={true} duration={500}>technologies</Link></button>.
                </p>
                <p className='mt-4'>
                    Everything I have made so far is open source, and can be found on 
                    my <a href = "https://github.com/anguslogan02" className='link-underline font-bold' target="_blank" rel="noreferrer">GitHub</a>.
                    I like the idea of FOSS, and strive to keep all my projects open and free.
                </p>
                <p className='mt-4'>
                    When I'm not doing university work or working on a project of mine, I enjoy playing the guitar,
                    lifting, playing games, and tinkering with hardware and software. Most notably I've made a button box
                    from an Arduino to use with a flight simulator game, and a virtualisation server using Proxmox, which I've
                    used to run game servers, a NAS and a fat server for thin clients.
                </p>
            </div>
        </>
    )
}

export default Home