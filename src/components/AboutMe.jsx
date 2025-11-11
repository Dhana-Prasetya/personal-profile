import React from 'react'
import assets from '../assets/assetsIndex.js'
import AboutMeSkills from './reusable/AboutMeSkills.jsx'


const AboutMe = ({name="-default-"}) => {
    return (
        <div className='pt-[150px] text-left bg-[#FAFBFC] pb-[100px]'>

            <h1 className='font-extrabold text-[30px] justify-self-center pl-[170px]'>
                About Me
            </h1>


            <div className='mt-[40px] flex flex-row justify-self-center'>

                <img src={assets.profile} alt="Profile" className='w-[288px] h-[288px] rounded-xl shadow-2xl'/>

                <div className='ml-[120px]'>

                    <div className='text-[#5A5F73] text-[18px] mt-[10px]'>
                        Hi! I'm {name}, a passionate designer and frontend<br></br>
                        developer based in Jakarta. With a background in<br></br>
                        visual design and a love for coding, I specialize in<br></br>
                        building websites and apps that are not only<br></br>
                        stunning but also user-friendly.
                    </div>

                    <div className='mt-[80px] flex flex-row justify-between'>
                        <AboutMeSkills skills="✓ UI/UX Design"/>
                        <AboutMeSkills skills="✓ Web Development"/>
                        <AboutMeSkills skills="✓ Branding"/>
                    </div>

                    <div className='mt-[15px] flex flex-row justify-between'>
                        <AboutMeSkills skills="✓ Motion Graphics"/>
                    </div>

                    <div className='text-[16px] font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-4 py-2 rounded rounded-lg flex mt-[45px]'>
                        <img src={assets.hire} alt="Connect" className='h-[16px] inline-block'/>
                        <button className='pl-3 text-[#FFFFFF]'>Let's Connect</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe