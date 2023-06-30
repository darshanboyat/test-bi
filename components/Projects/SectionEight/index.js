import React from 'react';

function Card() {
  return (
    <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-48">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Tech Stacks Used</h2>
        <div className="flex flex-wrap md:flex-no-wrap justify-between lg:px-48 py-12">
          <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6400.png"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
