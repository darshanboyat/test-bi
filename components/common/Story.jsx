import React from 'react'

const Story = () => {
  return (
    <div>
      <div className="p-4 lg:px-52 pt-44 lg:pt-4">
        <h1 className='text-5xl lg:text-6xl font-bold'>Story telling with <span className='text-[#7600EB]'>creative courage</span></h1>
        <p className='text-sm text-thin opacity-60'>First hand insight into how our processes have been implemented in all the projects we’ve worked on.</p>
      </div>
      <div className="lg:px-52 flex flex-col">
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Screenshot 2023-03-22 at 6.07.18 PM.png" alt="" />
        <div className="flex w-full justify-between py-4 lg:py-8 flex-col lg:flex-row px-4">
          <div className="font-semibold">PROJECT NAME</div>
          <div className="lg:w-1/2">
            <h3 className='text-4xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p className='opacity-60 lg:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <div className="lg:px-52 flex flex-col py-4">
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Screenshot 2023-03-22 at 6.22.21 PM.png" alt="" />
        <div className="flex w-full justify-between py-4 lg:py-8 flex-col lg:flex-row px-4">
          <div className="font-semibold">PROJECT NAME</div>
          <div className="lg:w-1/2">
            <h3 className='text-4xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <p className='opacity-60 lg:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story