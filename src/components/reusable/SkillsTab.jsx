import React from 'react'

const SkillsTab = ({h, p, photo, bgColor}) => {
  return (
    <div className={`flex flex-col p-[25px] ${bgColor} rounded-xl items-center w-[220px] h-[192px]`}>
        <img src={photo} alt="UI/UX Design Icon" className='w-[40.5px] h-[36px]'/>
        <h2 className='font-bold text-[18px] pt-[15px]'>{h}</h2>
        <p className='font-regular text-[14px] pt-[7px] text-[#5A5F73]'>
            {p}
        </p>
    </div>
  )
}

export default SkillsTab
