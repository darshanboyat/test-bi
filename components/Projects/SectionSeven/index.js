import React from 'react'

const Index = () => {
  return (
    <div className='max-w-full flex flex-col items-center'>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Challenges</h1>
            <p className='opacity-50 text-lg'>During the development of the aforementioned project, we encountered several challenges that required careful problem-solving and optimization. One of the initial hurdles we faced was devising a dynamic animation screen that could be controlled based on user operations. We needed to animate a series of components in a sequential manner, with each component having variable timing. Ensuring smooth animation while handling repetitions posed a significant challenge that required meticulous planning and implementation. Another obstacle we encountered was accurately tracking and maintaining the user's daily streak. Our objective was to break the streak if the user failed to use the app daily. To achieve this, we had to optimize the solution to avoid unnecessary data accumulation while effectively monitoring and updating the streak status. This involved designing a streamlined data management system that efficiently tracked and recorded the user's daily engagement without unnecessary overhead.</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Solution</h1>
            <p className='opacity-50 text-lg'>To address the animation challenge, we decided to develop our own SVG element instead of relying on third-party libraries. This approach provided us with greater control over key points and allowed us to make changes on each time frame. We were able to stop and resume the animation effectively, tailoring it to meet the specific requirements of the project. This bespoke solution offered us the flexibility to write custom application logic that seamlessly integrated with the rest of the platform. For optimizing the daily streak feature, we implemented a client-side logic that was responsible for maintaining or breaking the streak data. We recognized that if a user never logged into the platform, there was no need to track or break the streak, as the user wouldn't be present to notice the change. By implementing this logic on the front end, we avoided unnecessary storage space and reduced the need for continuous monitoring and database checks. This optimization allowed us to save resources and streamline the streak-tracking process. Through these solutions, we were able to overcome the animation and streak optimization challenges, ensuring a smooth user experience while efficiently managing resources and data.</p>
        </div>
    </div>
  )
}

export default Index