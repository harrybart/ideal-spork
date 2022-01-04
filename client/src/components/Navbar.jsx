import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelegram, BsDiscord, BsGithub, BsTwitter } from "react-icons/bs"

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between text-sky-600 py-4 px-6 text-sm lg:text-base lg:px-32'>
            <Link to="/"><div className='text-lg font-medium'>Wallet Hub</div></Link>
            <div className='text-stone-900 flex justify-center items-center space-x-2 lg:space-x-4'>
                <a href="http://telegram.com" target="_blank" rel="noopener noreferrer">
                    <BsTelegram size={20} className='cursor-pointer'/>
                </a>
                <a href="http://discord.com" target="_blank" rel="noopener noreferrer">
                    <BsDiscord size={20} className='cursor-pointer'/>
                </a>
                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={20} className='cursor-pointer'/>
                </a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                    <BsTwitter size={20} className='cursor-pointer'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
