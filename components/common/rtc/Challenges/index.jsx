import React from 'react'

const Index = () => {
  return (
    <div className='max-w-full flex flex-col items-center'>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Challenges</h1>
            <p className='opacity-50 text-lg'>Building a complete travel planner with a CRM in place, we knew that we have to deal with ample Data types and manage them on DB in such a way that we can retrieve them for various reports generation with ease and fast. Integration of inbuild email management (Gmail) and Instant Messaging platforms (Insta, FB, Twitter) were some serious tasks on this project. Lastly, is to develop Drag & Drop campaign builder (No Code website builder)</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Solution</h1>
            <p className='opacity-50 text-lg'>Solution done for the challenges- Advanced-level report generation was planned in a way that we mapped the key parameters before starting the development, which helped us to efficiently use the DB. Regarding real-time IM and email management, we execute a job every 30 seconds to check new emails and messages. It was designed and planned in a way to not put any load on the server as it was running every 30 seconds. Alongside keeping the code structure optimized, used SKDs and ran the cron every for 1 minute. We made different stages and connected the node of every stage like the start and the endpoints. Added a real-time auto-save to avoid any rework for the travel agents.</p>
        </div>
    </div>
  )
}

export default Index