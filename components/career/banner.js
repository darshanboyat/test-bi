import React, { Component } from "react";
import Image from "next/image";
import HomeButton from "../buttons/HomeButton";

class banner extends Component {
  render() {
    return (
      <div>
        <div className="h-screen  flex items-center relative">
          <div className="lg:w-[60%] w-full  h-full  relative">
            <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
              <h1 className="2xl:text-4xl xl:text-4xl mt-20 text-3xl stroke-text-3 Gilroy-Bold">
                The Right place for you | Career at Brain Inventory
              </h1>

              <div className="text-heading-1 Gilroy-Bold">
                lets do some great <br /> things together!
              </div>

              <div className="flex flex-col">
                <div className="Gilroy-Light text-xl tracking-widest text-gray-50">
                  While we are good at sign language, there are various other
                  simpler ways to connect with us. Talk to us in person.
                </div>
              </div>

              <a href="tel:+91-810-956-1401">
                <HomeButton>
                  <span className="text-base">call us now!</span>
                </HomeButton>
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full lg:flex justify-center items-center hidden">
            <div className="w-[600px] h-[450px]  relative">
              <img src={"https://braininventory.s3.us-east-2.amazonaws.com/images/" + "carrer.png"} layout="fill" />
            </div>
          </div>
          <span
            id="circle"
            className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"
          ></span>
        </div>
      </div>
      // <div className="bg-gradient-career">
      //   <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      //     <div>
      //       <h2 className="text-center mt-4 lg:mt-8 text-4xl lg:text-5xl Gilroy-Bold">
      //         the right place <br /> for the right people
      //       </h2>
      //       <p className="text-center lg:w-2/3 mt-8 m-auto block text-base Gilroy-Light text-gray-50">
      //         We are always looking for talented people to join our team and
      //         bring their unique vision into the picture. We thrive because of
      //         our investment in finding the best talents in the industry. We
      //         have created a great place to work, as we acknowledge that a
      //         successful company is built around talented people who deliver
      //         tremendous results.{""}
      //       </p>
      //       <p className="text-center lg:w-2/3 pt-8  m-auto block text-base Gilroy-Light text-gray-50">
      //         Here at Forty Two, the team members have a unique opportunity to
      //         grow both personally and professionally. We facilitate our
      //         employees’ development and introduce them to various educational
      //         courses and programs. Also, we have an amazing vibe in the office,
      //         as we play great music. And last but not least, there is a happy
      //         hour every week, so people can bond with each other and establish
      //         strong relationships
      //       </p>
      //     </div>

      //     <div className="lg:flex hidden items-center justify-between">
      //       <div>
      //         <div className="relative w-[750px] h-[450px]">
      //           <img src={"https://braininventory.s3.us-east-2.amazonaws.com/images/" + "carrer1.png"}  layout="fill" />
      //         </div>
      //       </div>
      //       <div>
      //         <div className="relative w-[450px] h-[450px]">
      //           <img src={"https://braininventory.s3.us-east-2.amazonaws.com/images/" + "carrer2.png"}  layout="fill" />
      //         </div>
      //       </div>
      //       <div>
      //         <div className="relative w-[220px] h-[450px]">
      //           <img src={"https://braininventory.s3.us-east-2.amazonaws.com/images/" + "carrer3.png"}  layout="fill" />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
banner.propTypes = {};
export default banner;
