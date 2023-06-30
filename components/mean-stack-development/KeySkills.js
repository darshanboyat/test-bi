import React from "react";

export default function KeySkill({ breif, points }) {
  const point1 = points.slice(0, points.length / 2);
  const point2 = points.slice(points.length / 2, points.length);
  return (
    <div>
      <div className="container padding-left-all-section-1 lg:pb-28">
        <div className="bg-customer lg:p-12 p-8 advantage-para lg:pl-20 lg:pr-20 lg:m-0 m-6">
          <h2 className="2xl:text-6xl xl:text-5xl text-3xl Gilroy-Bold mb-8 leading-10">
            Our Key Skill Set
          </h2>
          <p className="Gilroy-Light !text-xl !leading-8 pb-6">{breif}</p>
          <div className="flex hidden lg:flex justify-between lg:pr-72">
            <div>
              <ul className="team-list">
                {point1.map((ele) => (
                  <>
                    <br />
                    <li>
                      {" "}
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
            <div>
              <ul className="team-list">
                {point2.map(
                  (ele) =>
                    (
                      <>
                        <br />
                        <li>
                          {" "}
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
                    )
                )}
              </ul>
            </div>
          </div>




          <div className="grid grid-cols-1 block lg:hidden">
            <div>
              <ul className="team-list">
                {points.map((ele) => (
                  <>
                    <br />
                    <li>
                      {" "}
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
