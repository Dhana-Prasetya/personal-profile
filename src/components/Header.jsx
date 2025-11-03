import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-row mx-20 font-bold justify-between items-center pt-4 pb-6'>
            <div>
                <h1 className='text-[20px]'>MyProfile</h1>
            </div>
            <nav className='flex flex-row text-[16px] gap-8 items-center'>
                <ul>About</ul>
                <ul>Skills</ul>
                <ul>Portofolio</ul>
                <ul>Contact</ul>
            </nav>
            <div className='text-[16px] font-bold'>
                <button className='text-[#FFFFFF] bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-4 py-2 rounded rounded-xl'>Hire Me</button>
            </div>
        </div>
    )
}

export default Header
