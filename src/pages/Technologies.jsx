import React from 'react'

import Project from '../components/project'
import Technology from '../components/technology'

const Technologies = () => {
    return (
        <>
            <div className='grid grid-cols-3'>
                <Project name={ "Tic-Tac-Go" } link={ "https://github.com/AngusLogan02/tic-tac-go" } desc={ "a browser based game of Noughts and Crosses (Tic-Tac-Toe for my American friends)" } tech={ ["Golang", "go-gin", "Socket.IO"] } />
                <Project name={ "typing.systems" } link={ "https://github.com/typing-systems/" } desc={ "typeracer in the command line, utilising a client/server architecture" } tech={ ["Golang", "gRPC", "bubbletea", "lipgloss"] } />
                <Project name={ "this website" } link={ "https://github.com/AngusLogan02/anguslogan.dev" } desc={ "my own portfolio website" } tech={ ["react", "tailwind"] } />
            </div>

            <div className='mt-12'>
                <Technology name={ "go-gin" } lang={ "Golang" } desc={ "a web framework for Golang" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "Socket.IO" } lang={ "many" } desc={ "a tool built upon the WebSocket protocol, which enables bi-directional communication between a client and server" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "gRPC" } lang={ "many" } desc={ "a remote procedure call framework using protocol buffers to allow for easy communication between clients and servers written in different languages" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "bubbletea" } lang={ "Golang" } desc={ "part of charmbracelet. A terminal user interface framework" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "lipgloss" } lang={ "Golang" } desc={ "part of charmbracelet. A CSS-like styling library for bubbletea" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "react" } lang={ "Javascript" } desc={ "a idk lol google it" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "tailwindcss" } lang={ "CSS" } desc={ "a CSS framework" } link={ "https://gin-gonic.com/" } />
            </div>
        </>
    )
}

export default Technologies