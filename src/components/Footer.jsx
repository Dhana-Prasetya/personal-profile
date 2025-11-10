import React from 'react'
import assets from '../assets/assetsIndex'

const Footer = ({fullName="-default-"}) => {
    return (
        <footer className='h-[84px] text-[14px] font-regular text-[#5A5F73] flex items-center justify-center'>
            © 2024 {fullName}. Crafted with &nbsp;<img src={assets.heart} alt="Heart Icon" className='inline-block' />&nbsp; in Jakarta
        </footer>
    )
}

export default Footer
