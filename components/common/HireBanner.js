import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
export default function HireBanner({
  heading,
  title,
  subtitle,
  content,
  card,
  btn,
  image,
  alt,
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container padding-left-all-section-1 pt-28 lg:pt-32 lg:pb-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="">
          <div className="ml-4 lg:ml-0">
            <h1 className="text-2xl Gilroy-Bold">{heading}</h1>
            <h2 className="text-5xl lg:text-6xl Gilroy-Bold mt-4">{title}</h2>
            <img
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/development-12.png"
              className="lg:ml-[-1.5rem] ml-[-1.6rem] w-96"
              alt={alt}
            />
            <h2 className="lg:text-5xl text-4xl Gilroy-Bold mb-4">
              {subtitle}
            </h2>
          </div>

          <div className="bg-banner-sot rounded-xl p-6 mt-16 mb-10 lg:m-0 m-6">
            <p className="Gilroy-Light text-lg">{content}</p>
          </div>
          {!card && (
            <a href="#talk">
              <div className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 rounded-2xl mt-4 pr-20 ml-12 lg:ml-0">
                <button
                  className="flex flex-col justify-center Gilroy"
                  onClick={() => setToggle(true)}
                >
                  <span className="text-xs font-thin text-slate-400 pb-1">
                    Got a project in mind?
                  </span>
                  <span className="flex items-center justify-between w-full">
                    {btn} <BsArrowRight />
                  </span>
                </button>
              </div>
            </a>
          )}
        </div>
        <div>
          {card ? (
            <div className="lg:ml-20 lg:mr-20 ml-4 mr-4 lg:mb-0 mb-6">
              <div className="started-subcription">
                <p className="Gilroy-Bold text-lg">Get Started Within</p>
                <h2 className="Gilroy-Bold text-5xl">
                  2 Business <span className="text-lg">Days</span>
                </h2>
                <form className="mt-3">
                  <label className="Gilroy-Bold text-lg block">
                    Hire Us Now
                  </label>
                  <input
                    type="text"
                    className="h-14 w-full px-4 bg-black opacity-60 mt-2"
                    placeholder="Enter your Email Address"
                  />
                </form>
              </div>
              <div className="p-8 bg-line">
                <ul className="list-subcription">
                  {card &&
                    card.map((ele) => (
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 35 35"
                          className="relative top-[-8px] h-20 mr-2"
                        >
                          <g
                            id="Group_6114"
                            data-name="Group 6114"
                            transform="translate(-1 -1)"
                          >
                            <path
                              id="Path_16511"
                              data-name="Path 16511"
                              d="M7,15.1l4.95,4.95L23.5,8.5"
                              transform="translate(3.25 4.225)"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                            <path
                              id="Path_16512"
                              data-name="Path 16512"
                              d="M18.5,35A16.5,16.5,0,1,0,2,18.5,16.5,16.5,0,0,0,18.5,35Z"
                              fill="none"
                              stroke="#fff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            />
                          </g>
                        </svg>
                        {ele}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="lg:ml-20 mx-14 lg:mb-0 mb-6 bg-none">
              <img
                src={image}
                className="w-full rounded-2xl"
                // style={{ borderRadius: "2rem", maxHeight: "500px", minWidth: "400px" }}
              />
            </div>
          )}
        </div>
      </div>
      {toggle && <PopUp />}
    </div>
  );
}

function PopUp() {
  const { register, handleSubmit, reset } = useForm();

  const sumbitContact = () => {};
  return (
    <div className="modal">
      <form onSubmit={handleSubmit(sumbitContact)}>
        <div className="modal-box w-full max-w-5xl">
          <div className="flex justify-between w-full items-center mb-4">
            <h2 className="text-2xl text-black Gilroy-Bold">Apply Now</h2>
            <label
              htmlFor="my-modal"
              className="bg-black rounded-full w-10 h-10 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 relative top-2 left-2 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-black mb-2">Firstname</label>
              <input
                {...register("firstName")}
                type="text"
                required
                className="w-full text-black border focus:outline-0 p-3 mb-4"
                placeholder="Firstname"
              />
            </div>
            <div>
              <label className="text-black mb-2">Lastname</label>
              <input
                {...register("lastName")}
                type="text"
                required
                className="w-full text-black border focus:outline-0 p-3 mb-4"
                placeholder="Lastname"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="text-black mb-2">Email</label>
              <input
                {...register("email")}
                type="email"
                required
                className="w-full text-black border focus:outline-0 p-3 mb-4"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-black mb-2">Mobile Number</label>
              <input
                {...register("number")}
                type="number"
                required
                className="w-full text-black border focus:outline-0 p-3 mb-4"
                placeholder="Number"
              />
            </div>
            <div className="">
              <div>
                <label className="text-black mb-2">No year of Experience</label>
                <input
                  {...register("exp")}
                  type="text"
                  required
                  className="w-full text-black border focus:outline-0 p-3 mb-4"
                  placeholder="Experience"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="text-black mb-2">Attachment</label>
            <input
              type="file"
              {...register("file")}
              className="w-full text-black border focus:outline-0 p-2 mb-4"
              required
              placeholder="Experience"
            />
          </div>
          <div>
            <button
              type="submit"
              className="m-auto text-center block bg-purple-theme w-40 p-3 rounded-lg mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
