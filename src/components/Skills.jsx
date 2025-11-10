import React from 'react'
import assets from '../assets/assetsIndex.js'

const Skills = () => {
    return (
        <div className='mt-[100px] justify-items-center mb-[100px]'>
            <h1 className='text-[30px] font-extrabold'>
                My Skills
            </h1>

            <div className='flex flex-row mt-[70px] justify-between gap-[25px] items-center'>
                
                <div className='flex flex-col p-[25px] bg-[#F0E7FF] rounded-xl items-center w-[220px] h-[192px]'>
                    <img src={assets.brush} alt="UI/UX Design Icon" className='w-[40.5px] h-[36px]'/>
                    <h2 className='font-bold text-[18px] pt-[15px]'>UI/UX Design</h2>
                    <p className='font-regular text-[14px] pt-[7px] text-[#5A5F73]'>
                        Figma, Adobe XD,<br></br>
                        Sketch
                    </p>
                </div>

                <div className='flex flex-col p-[25px] bg-[#E0EAFE] rounded-xl items-center w-[220px] h-[192px]'>
                    <img src={assets.code} alt="Frontend Dev Icon" className='w-[40.5px] h-[36px]'/>
                    <h2 className='font-bold text-[18px] pt-[15px]'>Frontend Dev</h2>
                    <p className='font-regular text-[14px] pt-[7px] text-[#5A5F73]'>
                        React, Vue, Tailwind
                    </p>
                </div>

                <div className='flex flex-col p-[25px] bg-[#FFE978] rounded-xl items-center w-[220px] h-[192px]'>
                    <img src={assets.write} alt="Branding Icon" className='w-[40.5px] h-[36px]'/>
                    <h2 className='font-bold text-[18px] pt-[15px]'>Branding</h2>
                    <p className='font-regular text-[14px] pt-[7px] text-[#5A5F73]'>
                        Logo, Identity, Print
                    </p>
                </div>

                <div className='flex flex-col p-[25px] bg-[#E0EAFE] rounded-xl items-center w-[220px] h-[192px]'>
                    <img src={assets.mg} alt="Motion Graphics Icon" className='w-[40.5px] h-[36px]'/>
                    <h2 className='font-bold text-[18px] pt-[15px]'>Motion Graphics</h2>
                    <p className='font-regular text-[14px] pt-[7px] text-[#5A5F73]'>
                        After Effects, Lottie
                    </p>
                </div>
            
            </div>
        </div>
    )
}

export default Skills
