import React from "react";
import HomeButton from "../buttons/HomeButton";

function OurWork(props) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 bg-light-blue">
      <div className="container padding-left-all-section">
        <div className="lg:flex">
          <div className="lg:w-[25%] w-full ">
            <h2 className="text-work">
              Our <br /> Work
            </h2>
            <div className="lg:block flex justify-between	">
              <div>
                <h3 className="text-4xl text-white Gilroy-Bold">500+</h3>
                <p className="mb-8">projects delivered</p>
              </div>
              <div>
                <h3 className="text-4xl text-white Gilroy-Bold">300+</h3>
                <p>happy clients</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[75%] w-full mt-4">
            <div className="relative">
              <h2 className="">
                <video
                  muted
                  loop
                  autoPlay={true}
                  controls={false}
                  poster="https://braininventory.s3.us-east-2.amazonaws.com/images/work-v-thumbnail.png"
                >
                  <source src="https://braininventory.s3.us-east-2.amazonaws.com/images/Video-Station-1.mp4" type="video/mp4" />
                </video>
              </h2>

              <div className="absolute bottom-4 left-4">
                <h3 className="Gilroy-Bold lg:text-3xl text-lg text-white">
                  think. make. solve.
                </h3>
                <p className="py-4 lg:text-xl text-sm">
                  We’re a tight-knit, skilled team with a working culture built
                  on trust, respect and passion
                </p>
                <HomeButton>
                  <span className="lg:text-lg text-sm">watch full video</span>
                </HomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
