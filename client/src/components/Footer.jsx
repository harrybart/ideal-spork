import React from 'react'

const Footer = () => {
    return (
        <footer className='flex items-center text-xs justify-center py-6 text-stone-500 lg:text-sm border-t border-gray-500 border-opacity-20 mx-4'>
            {new Date().getFullYear()} &copy; Wallet Hub
        </footer>
    )
}

export default Footer
