import React from 'react'
import { SiApacheecharts, SiArduino, SiC, SiFlask, SiGit, SiGoland, SiHaskell, SiJava, SiJavascript, SiKeras, SiLinux, SiPhp, SiPostgresql, SiProxmox, SiPython, SiReact, SiRedis, SiServerfault, SiSocketdotio, SiTailwindcss, SiTensorflow, SiThreedotjs, SiTypescript } from 'react-icons/si'

import Technology from '../components/technology'

const Technologies = () => {
    return (
            <div className='py-20 max-w-xl h-screen' id='technologies'>
                <h1 className='text-3xl mb-4'>Technologies I've Used</h1>
                <h2 className='text-2xl text-fuchsia-400 mb-4 font-semibold'>Languages</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <Technology name="Golang" icon=<SiGoland size={25} /> />
                    <Technology name="Python" icon=<SiPython size={25} /> />
                    <Technology name="Java" icon=<SiJava size={25} /> />
                    <Technology name="C" icon=<SiC size={25} /> />
                    <Technology name="Haskell" icon=<SiHaskell size={25}/> />
                    <Technology name="PHP" icon=<SiPhp size={25}/> />
                    <Technology name="React" icon=<SiReact size={25} /> />
                    <Technology name="JavaScript" icon=<SiJavascript size={25} /> />
                    <Technology name="TypeScript" icon=<SiTypescript size={25}/> />
                </div>
                <h2 className='text-2xl text-fuchsia-400 my-4 font-semibold'>Other</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <Technology name="Git" icon=<SiGit size={25} /> />
                    <Technology name="Linux" icon=<SiLinux size={25} /> />
                    <Technology name="Socket.IO" icon=<SiSocketdotio size={25}/> />
                    <Technology name="Redis" icon=<SiRedis size={25}/> />
                    <Technology name="TailwindCSS" icon=<SiTailwindcss size={25}/> />
                    <Technology name="Flask" icon=<SiFlask size={25}/> />
                    <Technology name="gRPC" icon=<SiServerfault size={25}/> />
                    <Technology name="Keras" icon=<SiKeras size={25}/> />
                    <Technology name="TensorFlow" icon=<SiTensorflow size={25}/> />
                    <Technology name="Apache ECharts" icon=<SiApacheecharts size={25}/> />
                    <Technology name="Three.js" icon=<SiThreedotjs size={25}/> />
                    <Technology name="PostgreSQL" icon=<SiPostgresql size={25}/> />
                    <Technology name="Arduino" icon=<SiArduino size={25}/> />
                    <Technology name="Proxmox" icon=<SiProxmox size={25}/> />
                </div>
                
                <h2 className='text-2xl text-fuchsia-400 my-4 font-semibold'>Notes</h2>
                <p>
                    I'd consider myself a fairly competent Linux system administrator.
                    I daily drive Ubuntu on my laptop and dual boot on my desktop. I've
                    also recently repurposed an old laptop into a Proxmox virtualisation
                    server which I use to run various services. 
                </p>

                <p className='mt-4'>
                    Whenever working in a group project, I tend to become the de-facto git master.
                    I feel like I've got a pretty good grasp of the tool and I often find myself
                    un-cocking-up our repositories - especially during a hackathon when code can
                    get a bit sloppy!
                </p>
            </div>
    )
}

export default Technologies