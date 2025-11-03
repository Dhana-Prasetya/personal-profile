import React from 'react'

const Identity = ({name="-default-"}) => {
    return (
        <div className='flex-basis flex flex-row font-bold justify-between items-center bg-gradient-to-r from-[#FF54B0] to-[#7755FF] to-[#FFE978]'>
            <div className='ml-12 mt-16'>
                <div className='text-[#7755FF]'>
                    Hello, I'm {name}
                </div>
                
                <h1 className='text-[48px]'>Creative Designer &<br></br>
                Frontend Developer</h1>
            </div>
        </div>
    )
}

export default Identity
