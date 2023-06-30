import React from "react";
import Carousel from "./Carousel";

export default function Clients({tech}) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <h1 className="Gilroy-Bold text-4xl">
          Gaining Client’s Trust Since 2011 & Many More to Go
        </h1>
        <p className="Gilroy-Light text-xl leading-8 opacity-60 pt-4 pb-4">
          We paint the bright future for businesses working on digital
          landscapes and firmly believe in providing productive long-term
          business relationships.
        </p>
        <div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4 ">
            <div className="bg-engagedment p-8 rounded-2xl">
              <h1 className="Gilroy-Bold text-4xl py-2">50+</h1>
              <p>IT Professionals</p>
            </div>
            <div className="bg-opening p-8 rounded-2xl">
              <h1 className="Gilroy-Bold text-4xl py-2">10+</h1>
              <p>{tech} Developers</p>
            </div>
            <div className=" bg-opening p-8 rounded-2xl">
              <h1 className="Gilroy-Bold text-4xl py-2">3+</h1>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
