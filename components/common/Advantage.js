import React from "react";

export default function Advantage({ title, para1, para2, para3, para4 }) {
  return (
    <div>
      <div className="container padding-left-all-section-1">
        <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Advantages to Hiring <br /> {title}
          </h2>
          <p className="Gilroy-Light pb-6">{para1}</p>
          <p className="Gilroy-Light pb-6">{para2}</p>
          <p className="Gilroy-Light pb-6">{para3}</p>
          <p className="Gilroy-Light pb-6">{para4}</p>
          <a href="#talk">
            <button className="rounded-xl bg-contact-c py-6 w-full px-4">
              <p className="p-0 pb-0 text-xs">Got a project in mind?</p>
              <p className="p-0 Gilroy-Bold text-white !opacity-100 text-xl pt-3">
                Contact Us!
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
