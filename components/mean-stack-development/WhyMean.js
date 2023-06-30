import React from "react";
import { BsArrowRight } from "react-icons/bs";

const WhyMean = ({type, meanReasons}) => {
  
  return (
    <div className="flex max-w-full lg:px-32">
      <div>
        <h1 className="text-3xl text-center lg:text-start lg:text-5xl ">
          Why you may need a <br />
          <span className="text-[#7600EB]">{type} Development</span>{" "}
          solution?
        </h1>
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8">
          <ol className="text-2xl lg:text-2xl w-full lg:w-[40%] px-6 font-Satoshi">
            {meanReasons?.map((ele) => (
              <li className="my-8">
                <p>{ele}</p>
              </li>
            ))}
          </ol>
          <div>
            <a href="#talk" className="flex justify-center lg:justify-start">
              <div className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-max  px-5 py-3 rounded-2xl mt-12">
                <button
                  className="flex flex-col justify-center Gilroy"
                >
                  <span className="text-xs font-thin text-slate-400 pb-1">
                    Got a project in mind?
                  </span>
                  <span className="flex items-center justify-between w-full">
                    Contact Us! <BsArrowRight />
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMean;
