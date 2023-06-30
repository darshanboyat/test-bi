import React from 'react'

const Index = () => {
    return (
        <div className="my-8 py-12 relative flex flex-col justify-center bg-[#2F45C5] ">
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12"/>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6425.png" alt="" className='w-28 lg:w-44'/>
                <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'> Perspective</h1>
            </div>
            <div className="px-4 lg:px-48 py-4 lg:min-w-full overflow-hidden">
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6421.png" className='lg:scale-[1.32] py-4 lg:py-12' width="100%"/>
            </div>
            {/* <div className="inset-0 bg-gradient-to-b from-[#2F45C5] to-black w-full" /> */}
        </div>
    )
}

export default Index 