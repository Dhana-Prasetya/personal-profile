import React from 'react'
import assets from '../assets/assetsIndex.js'

const Portofolio = () => {
    return (
        <div className='justify-items-center bg-[#FAFBFC] pt-[100px] pb-[80px]'>
            <h1 className='text-[30px] font-extrabold'>
                Portofolio
            </h1>

            <div className='flex flex-row mt-[70px] gap-[40px] items-center'>
                
                <div className='flex flex-col'>
                    <div className='w-[341.33px] h-[328px] bg-[#FFFFFF] rounded-lg shadow-2xl'>

                        <img src={assets.dashboard} alt='Dashboard icon' className='rounded-t-lg w-full'/>

                        <div className='flex flex-col justify-between items-start'>
                            <div className='ml-[18px]'>
                                <h1 className='font-extrabold text-[18px] pt-[17px] pb-[17px]'> Dashboard Web App </h1>
                                <p className='font-regular text-[14px] text-[#5A5F73] pb-[17px]'> UI/UX, Frontend </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='w-[341.33px] h-[328px] bg-[#FFFFFF] rounded-lg shadow-2xl'>
                        <img src={assets.mobile_app} alt='Mobile App icon' className='rounded-t-lg w-full'/>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='ml-[18px]'>
                                <h1 className='font-extrabold text-[18px] pt-[17px] pb-[17px]'> Mobile App Landing </h1>
                                <p className='font-regular text-[14px] text-[#5A5F73] pb-[17px]'> Design, Branding </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-[341.33px] h-[328px] bg-[#FFFFFF] rounded-lg shadow-2xl'>
                        <img src={assets.motion_graphic} alt='Motion Graphic icon' className='rounded-t-lg w-full'/>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='ml-[18px]'>
                                <h1 className='font-extrabold text-[18px] pt-[17px] pb-[17px]'> Motion Graphic </h1>
                                <p className='font-regular text-[14px] text-[#5A5F73] pb-[17px]'> Animation, Branding </p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <div className='text-[16px] font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] px-8 py-2 rounded-full flex mt-[80px]'>
                <img src={assets.dribble} alt="Connect" className='h-[16px] w-[16px]'/>
                <button className='pl-3 text-[#FFFFFF]'>More on Dribble</button>
            </div>
        </div>
    )
}

export default Portofolio
