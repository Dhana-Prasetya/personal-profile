import React from 'react'
import assets from '../assets/assetsIndex.js'

const Header = () => {
    return (
        <div className='flex flex-row mx-20 font-bold justify-between items-center pt-4 pb-6'>
            <div>
                <h1 className='text-[20px] font-extrabold'>MyProfile</h1>
            </div>
            <nav className='flex flex-row text-[16px] gap-8 items-center'>
                <ul>About</ul>
                <ul>Skills</ul>
                <ul>Portofolio</ul>
                <ul>Contact</ul>
            </nav>
            <div className='text-[16px] font-bold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-4 py-2 rounded rounded-xl flex'>
                <img src={assets.hire} alt="hire" className='h-[16px]'/>
                <button className='pl-3 text-[#FFFFFF]'>Hire Me</button>
            </div>
        </div>
    )
}

export default Header
