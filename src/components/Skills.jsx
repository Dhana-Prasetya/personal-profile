import React from 'react'
import assets from '../assets/assetsIndex.js'

const Skills = () => {
    return (
        <div className='mt-[200px] justify-items-center'>
            <h1 className='text-[30px] font-bold'>
                My Skills
            </h1>

            <div className='flex flex-row'>
                
                <div className='flex flex-col p-[25px] bg-[#F0E7FF] rounded-lg'>

                    <img src={assets.brush} className='w-[40.5px] h-[36px]'/>
                    <h2 className='font-bold text-[18px]'>UI/UX Design</h2>
                    <p className='font-regular text-[14px]'>
                        Figma, Adobe XD,<br></br>
                        Sketch
                    </p>

                </div>
                
            </div>
        </div>
    )
}

export default Skills
