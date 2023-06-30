import React from "react";

export default function KeySkill({ type, subhead, benefitsList }) {
  return (
    <div>
      <div className="container padding-left-all-section-1 lg:pb-12 max-w-full">
        <div className="p-8 advantage-para lg:m-0 my-6">
          <h2 className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold mb-8 leading-10">
            Benefits of{" "}
            <span className="text-[#7600EB]">{type} Development</span>
          </h2>
          <p className="Gilroy-Light text-xs text-white w-full lg:w-[70%] tracking-wide leading-8">
            {subhead}
          </p>
          <div className="">
            <div>
              <div className="flex flex-col lg:flex-row justify-between w-full py-8">
                {" "}
                {benefitsList?.map((ele) => (
                  <div className="bg-customer p-8 lg:w-[30%] my-8 mx-4 hover:scale-[1.05] duration-150 ease-in-out">
                      <p className="opacity-50">{ele}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
