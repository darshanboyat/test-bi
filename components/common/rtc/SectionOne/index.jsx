import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Index = ({ section }) => {
    return (
        <div className="max-w-full flex flex-col px-4 lg:px-12 ">
            <img src={section.logo} className="lg:w-1/6 py-12" alt="Fatoura" />
            <h1 className="text-4xl Gilroy-Bold flex items-center lg:text-6xl text-[#FFD166]">Online <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group+6405.png' className="h-32" /></h1>
            <h1 className="text-4xl Gilroy-Bold lg:text-6xl pb-12 text-[#FFD166]">Creation Platform </h1>
            <div className="lg:flex items-end">
                <div className="lg:w-[10%] px-4 lg:px-0 flex justify-center bg-gradient-to-r from-[#000076] to-[#7600EB] py-3 rounded-2xl mt-4">
                    <button className="flex flex-col items-center Gilroy" id="rtc-xd">
                        {/* <span className="text-xs font-thin text-white pb-1">
                            Case study 2022
                        </span> */}
                        <a href="https://xd.adobe.com/view/2199324e-80e8-41c0-b113-5460b4ab28b3-74ca/" target="_blank">
                            <span className="flex items-center justify-between text-white font-semibold w-full py-2 px-4">
                                Explore <BsArrowRight />
                            </span>
                        </a>
                    </button>
                </div>

                <ReactTooltip
                    anchorId="rtc-xd"
                    place="right"
                    variant="info"
                    content="Click to visit Adobe XD Design"
                />

            </div>
            <div className="flex flex-col lg:flex-row w-full justify-center lg:justify-between py-4">
                <div>

                    <span className="flex justify-center lg:justify-left items-center px-4 py-4 text-xs">Made With&nbsp;&nbsp;&nbsp;<img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/XD.png" className="w-[10%] lg:w-[20%]" /></span>
                </div>
                {/* <div className="py-12 w-full py-4 lg:w-2/6">
                    <h4 className="text-2xl w-full lg:w-3/6">Make you life easier by online invoices.</h4>
                    <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6409.png" alt="trusted users" className="w-[30%] py-4" />
                </div> */}
                {/* <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/template.png" alt="" className="w-full lg:w-[40%] relative lg:-top-40 "/> */}


            </div>
        </div>
    );
};

export default Index;
