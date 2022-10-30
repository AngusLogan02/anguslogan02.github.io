import React from 'react'

import Technology from '../components/technology'

const Technologies = () => {
    return (
            <div className='py-20' id='technologies'>
                <h1 className='text-3xl mb-4'>Technologies I've Used</h1>
                <Technology name={ "go-gin" } lang={ "Golang" } desc={ "a web framework for Golang" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "Socket.IO" } lang={ "many" } desc={ "a tool built upon the WebSocket protocol, which enables bi-directional communication between a client and server" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "gRPC" } lang={ "many" } desc={ "a remote procedure call framework using protocol buffers to allow for easy communication between clients and servers written in different languages" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "bubbletea" } lang={ "Golang" } desc={ "part of charmbracelet. A terminal user interface framework" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "lipgloss" } lang={ "Golang" } desc={ "part of charmbracelet. A CSS-like styling library for bubbletea" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "react" } lang={ "Javascript" } desc={ "a idk lol google it" } link={ "https://gin-gonic.com/" } />
                <Technology name={ "tailwindcss" } lang={ "CSS" } desc={ "a CSS framework" } link={ "https://gin-gonic.com/" } />
            </div>
    )
}

export default Technologies