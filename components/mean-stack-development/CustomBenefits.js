import React from "react";

export default function KeySkill({type, subhead, benefitsList}) {

  return (
    <div>
      <div className="container padding-left-all-section-1 pb-28">
        <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Benefits of Custom{" "}
            <span className="text-[#7600EB]">{type} Development</span>
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">
            {subhead}
          </p>
          <div className="">
            <div>
              <ul className="team-list">
                {" "}
                {benefitsList.map((ele) => (
                  <>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.018"
                        height="17.535"
                        viewBox="0 0 18.018 17.535"
                        className="ml-2 h-3"
                      >
                        <path
                          id="Path_16513"
                          data-name="Path 16513"
                          d="M13.25,21V6m0,0,7,7.2m-7-7.2-7,7.2"
                          transform="translate(22.25 -4.482) rotate(90)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                        />
                      </svg>{" "}
                      {ele}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
