import React from "react";
import { BsArrowRight } from "react-icons/bs";


export default function ChooseBraininventory({ reasons, subhead }) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <div className="">
          <div>
            <h1 className="Gilroy-Bold text-4xl leading-[3rem]">
              Why Choose Brain inventory for Your{" "}
              <span className="text-[#7600EB]">Next Assignment</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
              {reasons &&
                reasons.map((ele, index) => (
                  <div className="m-2 hover:scale-[1.05] duration-150 ease-in-out " key={index}>
                    <p className="Gilroy-Light bg-customer h-[15rem] text-sm leading-6 opacity-60 p-8 ">
                      {ele}
                    </p>
                  </div>
                ))}
            </div>
            <a href="#talk">
              <div className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-12 ml-12 lg:ml-0">
                <button
                  className="flex flex-col justify-center Gilroy"
                  // onClick={() => setToggle(true)}
                >
                  <span className="text-xs font-thin text-slate-400 pb-1">
                    Got a project in mind?
                  </span>
                  <span className="flex items-center justify-between w-full">
                    Get a Quote! <BsArrowRight />
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
