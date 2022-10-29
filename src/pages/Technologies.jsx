import React from 'react'
import Project from '../components/project'

const Technologies = () => {
    return (
        <div className='grid grid-cols-3'>
            <Project name={ "Tic-Tac-Go" } link={ "https://github.com/AngusLogan02/tic-tac-go" } desc={ "a browser based game of Noughts and Crosses (Tic Tac Toe for my American friends)" } tech={ ["GoLang", "go-gin", "Socket.IO"] } />
            <Project name={ "typing.systems" } link={ "https://github.com/typing-systems/" } desc={ "typeracer in the command line, utilising a client/server architecture" } tech={ ["GoLang", "gRPC", "lipgloss"] } />
            <Project name={ "testProj" } desc={ "test description bla bla bla" } tech={ ["tailwind", "react", "go", "gRPC"] } />
        </div>
    )
}

export default Technologies