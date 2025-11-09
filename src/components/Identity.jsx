import React from 'react'
import assets from '../assets/assetsIndex.js'

const Identity = ({name="-default-"}) => {
    return (
        <div className='flex-basis flex flex-row font-bold justify-between items-center bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF]'>
            <div className='ml-12 mt-16'>
                <div className='text-[#7755FF]'>
                    Hello, I'm {name}
                </div>

                <div className='flex'>

                    <div>
                        <h1 className='text-[48px] pt-14'>Creative Designer &<br></br>
                            Frontend Developer
                        </h1>
                    
                        <p className='font-light text-[#5A5F73] text-base/5 pr-[100px] pt-5'>
                            Passionate in creating beautiful and functional<br></br>
                            digital experiences. I love blending creativity with<br></br>
                            technology to make impactful solutions for<br></br>
                            users and brands.
                        </p>
                    </div>
                    <div>
                        <img src={assets.profile} alt="Profile" className='rounded-full w-[256px] h-[256px] border-2 border-[#FFFFFF] inline-block align-middle'/>
                    </div>

                </div>

                <div className='text-[16px] font-bold pt-14 flex'>
                    <button className='text-[#FFFFFF] bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-4 py-2 rounded rounded-xl'>
                        See My Work
                    </button>
                    <div className='pl-4'>
                        <button className='text-[#7755FF] px-4 py-2 rounded rounded-xl border-2 border-[#7755FF]'>
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className='pt-10 flex pb-28'>
                    <img src={assets.instagram} className='pr-3'/>
                    <img src={assets.github} className='pr-3'/>
                    <img src={assets.basket} className='pr-3'/>
                    <img src={assets.linkedin}/>
                </div>










            </div>
        </div>
    )
}

export default Identity
