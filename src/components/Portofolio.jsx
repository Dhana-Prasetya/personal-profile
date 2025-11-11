import React from 'react'
import assets from '../assets/assetsIndex.js'
import PortofolioExperience from './reusable/PortofolioExperience.jsx'

const Portofolio = () => {
    return (
        <div className='justify-items-center bg-[#FAFBFC] pt-[100px] pb-[80px]'>
            <h1 className='text-[30px] font-extrabold'>
                Portofolio
            </h1>

            <div className='flex flex-row mt-[70px] gap-[40px] items-center'>

                <PortofolioExperience photo={assets.dashboard} h="Dashboard Web App" p="UI/UX, Frontend" />
                <PortofolioExperience photo={assets.mobile_app} h="Mobile App Landing" p="Design, Branding" />
                <PortofolioExperience photo={assets.motion_graphic} h="Motion Graphic" p="Animation, Branding" />

            </div>

            <div className='text-[16px] font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-8 py-2 rounded-full flex mt-[80px]'>
                <img src={assets.dribble} alt="Connect" className='h-[16px] w-[16px]'/>
                <button className='pl-3 text-[#FFFFFF]'>More on Dribble</button>
            </div>
        </div>
    )
}

export default Portofolio
