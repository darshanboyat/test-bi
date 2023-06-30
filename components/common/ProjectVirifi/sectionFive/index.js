import React from 'react'
const Index = () => {

    return (
        <div className="py-8 relative flex flex-col justify-center bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group%206472.png')]">
 <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
          <span className="text-[#7600EB]">Customer's</span> Outlook
          </h1>  
          <div className='flex flex-col lg:flex-row gap-4'>
             <div>
             <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 259.png" className='lg:scale-[1.3]  mt-24' alt="" />
             </div>
             <div>
                 <div className='mt-20 h-[500px] overflow-auto no-scrollbar px-2 lg:px-0'>
                    <div>
                    <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/A.png" className='lg:px-24 mt-24' alt="" />
                    </div>
                    <div>
                    <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/B.png" className='lg:px-24 mt-24' alt="" />
                    </div>
                    <div>
                    <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/C.png" className='lg:px-24 mt-24' alt="" />
                    </div>
                    <div>
                    <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/D.png" className='lg:px-24 mt-24' alt="" />
                    </div>
                 </div>
             </div>
          </div>         
           {/* <div className="px-4 lg:px-48 lg:py-12 overflow-hidden">
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 259" className='lg:scale-[1.55] mt-24' alt="" />
            </div> */}
        </div> 
    )
}

export default Index 