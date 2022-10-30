import React from 'react'
import ContactMethod from '../components/contact'

const Contact = () => {
    return (
        <div className='h-screen py-20' id='contact'>
            <h1 className='text-3xl mb-4'>Contact Me</h1>
            <p className='mb-8'>It's probably easiest to reach me by email, however I'm usually online on Discord.</p>

            <ContactMethod method="email" username="me@anguslogan.dev" />
            <ContactMethod method="discord" username="AngusL#3815" />
        </div>
    )
}

export default Contact