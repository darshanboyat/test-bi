import React from 'react'
// flex flex-col justify-between lg:h-screen
const Index = ({ sectionOneImg, sectionTwoImg }) => {
    return (
        <>
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12" />
                <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'>Admin's </h1>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6423.png" alt="" className='w-28 lg:w-56' />
            </div>
            <div className='flex justify-center items-center flex-col lg:flex-row w-full'>
                <div className="max-w-full mx-4 bg-[#2F45C5] rounded-3xl my-4 pt-4 px-8 project__three__one">
                    <div className=''>
                        <div className="">
                            <h3 className=''>Dashboard</h3>
                            <img src={sectionOneImg.one} alt="" className='scale-[1.15]' width="100%" />
                        </div>
                        <div className="">
                            <h3 className=''>Settings</h3>
                            <img src={sectionOneImg.two} width="100%" alt="" />
                        </div>
                    </div>

                </div>
                <div className="max-w-full">
                    <div className="lg:px-12 bg-[#EBEBFC] mb-12 rounded-2xl mx-4 project__three__two">
                        <h3 className='text-black text-lg lg:text-2xl pt-4 lg:pt-16 project__three__two__head pl-8'>Subscription History</h3>
                        <img src={sectionTwoImg.one} alt="" className='flex justify-center w-full lg:w-[90%] lg:pl-12' />
                    </div>
                    <div className="px-4 lg:px-24 bg-[#EBEBFC] mt-12 rounded-2xl mx-4 project__three__two">
                        <h3 className='text-black text-lg ml-4 lg:ml-0 lg:text-2xl pt-4 project__three__two__head'>User Management</h3>
                        <img src={sectionTwoImg.two} alt="" className='flex justify-center w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index