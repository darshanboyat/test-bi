import React from 'react'

const SectionSix = () => {
  return (
    <div>
        <div className="flex justify-center items-center text-3xl lg:text-7xl">
            <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6515.png" alt="" className='w-48'/>
            <h1 className='text-[#FFD166]'>Visuals</h1>
        </div>
        <div className="relative h-[60vh] lg:h-[118vh] overflow-scroll no-scrollbar">
            <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6410.png" alt="" className='sticky z-50 w-[40rem] top-20 lg:top-[10rem] lg:left-[20rem]'/>
            <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6519.png" alt="" className='scale-[2.7] lg:scale-[1.5] mt-24 ml-[20rem] lg:ml-[24rem]' />
        </div>
    </div>
  )
}

export default SectionSix