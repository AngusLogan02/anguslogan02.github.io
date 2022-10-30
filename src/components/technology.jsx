import React from 'react'

const Technology = (props) => {
    const name = props.name
    const icon = props.icon
    
    return (
        <div className='flex'>
            {name} <span className='ml-4'>{icon}</span>
        </div>
    )
}

export default Technology