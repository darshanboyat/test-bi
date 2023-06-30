import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { BsEnvelope, BsPhone } from "react-icons/bs";

const FindUs = () => {
    return (
        <div className="max-w-full flex justify-center px-8 lg:px-0">
            <a href="#talk" className="max-w-full flex justify-center lg:px-0">
                <div className="flex flex-col lg:flex-row justify-between lg:mx-24 ">
                    <div className="bg-[#1A1A1A] p-4 xs:rounded-t-3xl lg:rounded-l-3xl mobileContact lg:w-[35%]">
                        <h2 className="text-2xl font-bold pb-48 ">
                            Let’s get to it, together.
                        </h2>
                        <div className="flex justify-between text-sm w-full">
                            <p className="w-[75%]">Explore everything that the Brain Inventory team can do for you.</p>
                            <IoMdArrowForward />
                        </div>
                    </div>
                    <div className="relative rounded-b-3xl lg:rounded-r-3xl lg:w-[65%]">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover z-0 xs:rounded-b-3xl lg:rounded-r-3xl mobileContactVideo"
                            muted
                            loop
                            autoPlay={true}
                            controls={false}
                        >
                            <source
                                src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/inquery.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="relative z-10 pl-8 pr-12 grid grid-rows-2 gap-8 place-content-between justify-start">
                            <h1 className="text-4xl lg:text-6xl font-bold lg:w-full py-12">
                                Contact us
                            </h1>
                            <div className="mt-8 lg:mt-28">
                                <p className="flex items-center text-xs font-bold"><BsEnvelope/>&nbsp;career@braininventory.com</p>
                                <p className="flex items-center text-xs font-bold"><BsPhone/>&nbsp;+91-772-288-5755</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default FindUs;
