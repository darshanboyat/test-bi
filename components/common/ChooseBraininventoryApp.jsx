import React from "react";

export default function ChooseBraininventory({head, }) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section-1">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <h1 className="Gilroy-Bold text-4xl leading-[3rem]">
              Why Choose Brain inventory for <span className="text-[#7600EB]">Your Next Assignment</span>
            </h1>
            <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
            Our mobile application development services are unparalleled, giving clients chance to advance and boost their business via the best mobile solutions. The bespoke mobile applications we assist in designing and building are strong, esthetically pleasing, and have a great user experience. 
            </p>
            <div className="flex items-start">
              <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6 ">
              Plus, they allow you to extend your reach, raise your brand’s visibility, and generate customer interactions and loyalty. If you seek to create an app from the ground up or add new features to an existing one, we’re here to meet your needs and enable you to outpace your competition. 
              </p>
            </div>
            <div className="flex">
              <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
              Furthermore, our knowledgeable team has expertise in multiple platforms on a range of operating systems and mobile devices - from Android and iOS app development to hybrid apps and cross-platform. 
              </p>
            </div>
            <div className="flex">
              <p className="Gilroy-Light text-lg opacity-60 pt-4 pb-6">
              At Brain Inventory, we use tried-and-tested approaches and dependable processes for software creation - We know that successful custom mobile app development is evolutionary. In view of this fact, we’re ready to offer our support now as well as in the future should your specifications change or you intend on bringing other devices or operating systems into the mix for your products.
              </p>
            </div>
            <button className="bg-engagedment h-12 flex justify-center items-center rounded-lg px-8 Gilroy-Bold mt-4">
              Get a Quote
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
              </svg>
            </button>
          </div>
          <div>
            <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/choose-b1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
