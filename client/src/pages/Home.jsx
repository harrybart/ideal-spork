import React from 'react'
import { Link } from 'react-router-dom'
import { BsTelegram, BsDiscord, BsGithub, BsTwitter } from "react-icons/bs"
import image from "../assets/images/blockchain-connect.png"

const Home = () => {
    React.useEffect(() => {
        window.scroll({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
    },[]);

    return (
        <div className='text-sky-600'>
            <div className='my-20 px-4 lg:px-44'>
                <div className='text-2xl lg:text-4xl font-medium text-center'>Welcome to Wallet Hub</div>
                <div className=' text-stone-500 text-center my-3'>Wallet Hub is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. You can interact securely with any Dapp from their mobile phone, making Wallet Hub wallets a safer choice compared to desktop or browser extension wallets.</div>
            </div>
            <div className=' text-stone-500 text-xl text-left px-4 lg:px-36'>What will you like to do?</div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-36 pb-10 pt-4'>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Rectification
                    </div>
                </Link>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Validation
                    </div>
                </Link>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Recovery
                    </div>
                </Link>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Claim Rewards
                    </div>
                </Link>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Staking
                    </div>
                </Link>
                <Link to="/wallets">
                    <div className='bg-sky-300 rounded-lg cursor-pointer p-4 text-white font-medium flex items-center justify-center h-48 hover:bg-sky-600 transition-all duration-300 ease-in-out'>
                        Buying
                    </div>
                </Link>
            </div>
            <div className='my-10 px-4 lg:px-44'>
                <img src={image} alt="walletconnect" className='object-contain px-3' />
                <div className='text-2xl lg:text-4xl font-medium my-4'>What is Wallet Hub ?</div>
                <div className=' text-stone-500'>Wallet Hub is an open source protocol for
                connecting decentralised applications to mobile
                wallets with QR code scanning or deep linking. You can interact securely with any Dapp from their
                mobile phone, making Wallet Hub wallets a
                safer choice compared to desktop or browser
                extension wallets.
                </div>
                <div className='text-2xl lg:text-4xl font-medium my-4'>How does it work?</div>
                <div className=' text-stone-500'>
                Wallet Hub connects web applications to
                supported mobile wallets. Wallet Hub session
                is started by a scanning a QR code (desktop) or by
                clicking an application deep link (mobile).</div>
            </div>
            <div className='text-stone-900 flex justify-center items-center space-x-4 m-10'>
                <a href="http://telegram.com" target="_blank" rel="noopener noreferrer">
                    <BsTelegram size={30} className='cursor-pointer'/>
                </a>
                <a href="http://discord.com" target="_blank" rel="noopener noreferrer">
                    <BsDiscord size={30} className='cursor-pointer'/>
                </a>
                <a href="http://github.com" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={30} className='cursor-pointer'/>
                </a>
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                    <BsTwitter size={30} className='cursor-pointer'/>
                </a>
            </div>
        </div>
    )
}

export default Home
