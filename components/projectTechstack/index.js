import React from "react";

function Card({ tech }) {
  return (
    <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-24">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Tech Stacks Used
        </h2>
        <div className="flex flex-wrap md:flex-no-wrap justify-between lg:px-48 py-12">
          {tech?.map((ele) => (
            <div className="flex flex-col flex-wrap items-center">
              <img src={ele.image} className="tech_img" />
              <p>{ele.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
