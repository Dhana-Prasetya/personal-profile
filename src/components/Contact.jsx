import React from 'react'
import assets from '../assets/assetsIndex'

const Contact = () => {
    return (
        <div className='bg-[#F0E7FF] flex flex-row pt-[100px] pb-[100px] gap-[80px] items-center justify-center'>
            <div>
                <h1 className='font-extrabold text-[30px]'>Contact Me</h1>
                <p className='text-[18px] font-regular mt-[50px]'>
                    Interested working together? Let's talk<br></br>
                    about your project and make something<br></br>
                    amazing!
                </p>
                <div className='mt-[50px] font-semibold text-[16px] text-[#7755FF]'>
                    <div className='flex item-center gap-[12px] mb-[10px]'>
                        <img src={assets.email} alt="Email Icon" className='w-[16px] h-[16px]' />
                        <text>dhana.pns@gmail.com</text>
                    </div>
                    <div className='flex item-center gap-[12px] mb-[10px]'>
                        <img src={assets.phone} alt="Phone Icon" className='w-[16px] h-[16px]' />
                        <text>+62 xxx-xxxx-xxxx</text>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={assets.instagram} alt='Instagram icon'/>
                        <img src={assets.github} alt='Github icon'/>
                        <img src={assets.basket} alt='Dribble icon'/>
                        <img src={assets.linkedin} alt='Linkedin icon'/>
                    </div>
                </div>
            </div>
            <div className='w-[413px] h-[466px] rounded-xl shadow-2xl bg-[#FFFFFF] px-[20px] py-[20px] flex flex-col gap-[15px] items-center'>
                <form className='mt-[15px]'>
                    <label for="name" className='font-semibold'>Name</label><br></br>
                        <input type="text" id="name" name="name" placeholder="Your Name"
                        className='rounded rounded-md border border-[#E0EAFE] w-[349px] h-[50px] pl-[15px]'/><br></br>
                </form>
                <form>
                    <label for="email" className='font-semibold'>Email</label><br></br>
                    <input type="email" id="email" name="email" placeholder="you@email.com"
                    className='rounded rounded-md border border-[#E0EAFE] w-[349px] h-[50px] pl-[15px]'/><br></br>

                </form>
                <form>
                    <label for="message" className='font-semibold'>Message</label><br></br>
                        <textarea type="message" id="message" name="message" placeholder="Type your message..."
                        className='rounded rounded-md border border-[#E0EAFE] w-[349px] h-[120px] pl-[15px] pt-[10px]'/><br></br>
                </form>

                <button className='text-[16px] bg-gradient-to-r from-[#7755FF] to-[#FF54B0] w-[349px] h-[48px] 
                rounded-xl pl-3 mt-[10px] text-[#FFFFFF] align-middle font-semibold'>Send Message</button>

            </div>

        </div>
    )
}

export default Contact
