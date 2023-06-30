import React from "react";
import HomeButton from "../buttons/HomeButton";

function Banner(props) {
  return (
    <div className="lg:h-screen lg:min-h-[100vh] min-h-[60vh] items-center relative">
      <h1 className="2xl:px-14 xl:px-12 px-10 pt-32 lg:text-9xl text-5xl stroke-text-mobile Gilroy-Bold">
        <span className="w-full block"> React.Js</span>
        <span className="2xl:text-9xl lg:text-9xl text-4xl Gilroy-Bold text-white">
          Development
        </span>
      </h1>
      <div className="md:flex block items-center relative">
        <div className="lg:w-[40%] w-full  md:h-full">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <div className="flex flex-col">
              <div className="mt-8">
                <HomeButton>
                  <span>our concepts</span>
                </HomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
