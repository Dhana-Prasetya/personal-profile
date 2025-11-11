import React from 'react'
import assets from '../assets/assetsIndex.js'
import SkillsTab from './reusable/SkillsTab.jsx'

const Skills = () => {
    return (
        <div className='mt-[100px] justify-items-center mb-[100px]'>
            <h1 className='text-[30px] font-extrabold'>
                My Skills
            </h1>

            <div className='flex flex-row mt-[70px] justify-between gap-[25px] items-center'>

                <SkillsTab h = "UI/UX Design" p = "Figma, Adobe XD, Sketch" photo = {assets.brush} bgColor = "bg-[#F0E7FF]" />
                <SkillsTab h = "Frontend Dev" p = "React, Vue, Tailwind" photo = {assets.code} bgColor = "bg-[#E0EAFE]" />
                <SkillsTab h = "Branding" p = "Logo, Identity, Print" photo = {assets.write} bgColor = "bg-[#FFE978]" />
                <SkillsTab h = "Motion Graphics" p = "After Effects, Lottie" photo = {assets.mg} bgColor = "bg-[#E0EAFE]" />
            
            </div>
        </div>
    )
}

export default Skills
