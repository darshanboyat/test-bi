import React from 'react'
const Index = ({ carouselImages }) => {

    return (
        <div className="py-8 relative flex flex-col justify-center bg-[#059CA4]">
            <h1 className='flex text-end justify-center text-3xl lg:text-4xl border-2 border-[#059CA4] border-b-white lg:mx-44 fatoura__text font-thin'>S I G N U P <span><img src="/images/Group 6450.png" className='w-[50%] flex items-center justify-center pl-4' alt="" /></span> P R O F I L E</h1>
            <div className="px-4 lg:px-48 lg:py-12">
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6506.png" alt="" />
            </div>
        </div> 
    )
}

export default Index 