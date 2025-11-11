import React from 'react'

const PortofolioExperience = ({photo, h, p}) => {
    return (
        <div className='flex flex-col'>
            <div className='w-[341.33px] h-[328px] bg-[#FFFFFF] rounded-lg shadow-2xl'>

                <img src={photo} alt='Dashboard icon' className='rounded-t-lg w-full'/>

                <div className='flex flex-col justify-between items-start'>
                    <div className='ml-[18px]'>
                        <h1 className='font-extrabold text-[18px] pt-[17px] pb-[17px]'>{h}</h1>
                        <p className='font-regular text-[14px] text-[#5A5F73] pb-[17px]'>{p}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortofolioExperience
