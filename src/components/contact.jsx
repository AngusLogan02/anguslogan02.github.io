import React from 'react'

const ContactMethod = (props) => {
    const method = props.method
    const username = props.username
    
    return (
        <div className='flex'>
           by&nbsp;<span className='text-fuchsia-400'>{method}</span>:&nbsp;<span className='font-mono'>{username}</span>
        </div>
    )
}

export default ContactMethod