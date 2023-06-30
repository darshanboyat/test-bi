import React from 'react'
import Carousel from "./Carousel.jsx"
const Index = ({carouselImages}) => {

    return (
        <div className="pt-12 pb-0 my-8 relative flex flex-col justify-center">
            <div className="flex items-center">
                <div className="w-12 lg:w-32 h-2 bg-[#EBEBFC] opacity-50 mr-4 lg:mr-12"/>
                <h1 className='text-3xl lg:text-5xl font-bold project__section__two__heading'>Dark UI/</h1>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6424.png" alt="" className='w-28 lg:w-52'/>
            </div>
            <div className="py-4">
                <Carousel images={carouselImages} />
            </div>
        </div>
    )
}

export default Index