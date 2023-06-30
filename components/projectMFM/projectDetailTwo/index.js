import React from "react";

const Index = () => {
  return (
    <>
      <div className="">
 
        <div className="w-full relative flex justify-center">
          <img
            src="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Mask Group 176.png"
            alt="Image"
            className="w-[80%] h-full object-cover"
          />
          <div className="absolute top-96 inset-0 bg-gradient-to-b from-transparent to-black opacity-70 h-96 w-full"/>
        </div>
        <div className="px-4 lg:px-48">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
          What is MyFit Mantra?
          </h1>
          <p className="text-center font-thin tracking-wide text-2xl leading-10 opacity-50 lg:my-24">
          My Fit Mantra (MFM) is a comprehensive training software designed to cater to the diverse needs of trainers and individuals seeking to achieve their fitness goals. With its wide range of features and tools, MFM stands out as the ultimate fitness app. With an extensive collection of workout plans and nutritious meal suggestions, individuals can find the perfect combination to suit their needs. Moreover, trainers have the option to create customized workout and nutrition libraries for their clients, enabling them to deliver tailored programs that align with specific goals and preferences. The platform's innovative capabilities extend beyond training and nutrition. MFM facilitates seamless communication between trainers and clients through its Instant Chat feature. MFM also fosters a sense of community through its Friendly & Strong Community feature.
          </p>
        </div>
        
        <div className="flex justify-center">
          <img src="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Perspective-App-Screens-Mock-Up-16.png" width="70%" />
        </div>
      </div>
    </>
  );
};

export default Index;
