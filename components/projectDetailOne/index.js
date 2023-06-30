import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Index = ({ section }) => {
  return (
    <div className="py-8 px-0 lg:px-12 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <p className="hidden lg:block">{section.space}</p>
        <img src={section.logo} alt={section.alt} className={`w-1/2 lg:w-1/5 ${section.alt === "MyFitMantra" && "lg:scale-[0.7]"}`} />
        <p className="hidden lg:block">{section.space}</p>
        <img src={section.image} alt={section.alt} className="w-2/3 py-4 lg:py-8" />
        <p className="w-[70vw] lg:w-[400px] text-center lg:ml-12 py-4 lg:py-8">
          {section.brief}
        </p>
      </div>
      <div className="flex justify-center  bg-gradient-to-r from-[#000076] to-[#7600EB] px-5 py-3 rounded-2xl mt-4 px-8">
        <button className="flex flex-col items-center Gilroy">
          <span className="text-xs font-thin text-slate-400 pb-1">
            Case study 2022
          </span>
          <span className="flex items-center justify-between w-full">
            Explore <BsArrowRight />
          </span>
        </button>
      </div>
      <div className="flex justify-center py-8 items-center">

          <p>Made With</p> &nbsp;
          <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" width="25%"/>

      </div>
    </div>
  );
};

export default Index;
