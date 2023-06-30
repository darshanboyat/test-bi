import React from 'react'

const Index = () => {
    return (
        <div className="pt-12 relative flex flex-col justify-center">
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12"/>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6426.png" alt="" className='w-36 lg:w-60'/>
                <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'> Website</h1>
            </div>
            <div className="px-12 lg:px-96 min-w-full">
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6414.png" className='pt-4 lg:py-12' width="100%"/>
            </div>
        </div>
    )
}

export default Index 