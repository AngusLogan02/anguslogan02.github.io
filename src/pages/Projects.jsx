import React from 'react'

import Project from '../components/project'

const Projects = () => {
    return (
        <div className='h-screen py-20' id='projects'>
            <h1 className='text-3xl mb-4'>My Projects</h1>
            <Project name={ "typing.systems" } link={ "https://github.com/typing-systems/" } desc={ "typeracer in the command line, utilising a client/server architecture" } tech={ ["Golang", "gRPC", "bubbletea", "lipgloss"] } />
            <Project name={ "tic-tac-go" } link={ "https://github.com/AngusLogan02/tic-tac-go" } desc={ "a browser based game of Noughts and Crosses (Tic-Tac-Toe for my American friends)" } tech={ ["Golang", "go-gin", "Socket.IO"] } website={ "https://tictac-go.herokuapp.com/" } />
            <Project name={ "tarkov-item-inspector" } link={ "https://github.com/AngusLogan02/tarkov-item-inspector" } desc={ "a tool that distinguishes inspected and uninspected items in Escape From Tarkov using machine learning" } tech={ ["Python", "PIL", "Keras", "TensorFlow"] } />
            <Project name={ "this website" } link={ "https://github.com/AngusLogan02/anguslogan.dev" } desc={ "my own portfolio website" } tech={ ["React", "tailwindcss"] } />
        </div>
    )
}

export default Projects