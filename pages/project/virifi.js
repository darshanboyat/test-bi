import React from "react";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
const SectionOne = dynamic(()=> import("../../components/common/ProjectVirifi/SectionOne"));
const SectionTwo = dynamic(()=> import("../../components/common/ProjectVirifi/sectionTwo"));
const SectionThree = dynamic(()=> import("../../components/common/ProjectVirifi/sectionThree"));
const SectionFour = dynamic(()=> import("../../components/common/ProjectVirifi/sectionFour"));
const SectionFive = dynamic(()=> import("../../components/common/ProjectVirifi/sectionFive"));
const SectionSix = dynamic(()=> import("../../components/common/ProjectVirifi/sectionSix"));
// import SectionSeven from "../../components/common/ProjectVirifi/sectionSeven";
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard"));
const ChallengeSection = dynamic(()=> import("../../components/common/ProjectVirifi/Challenges"));
const TechStack = dynamic(()=> import("../../components/common/ProjectVirifi/SectionEight"));
const Team = dynamic(()=> import("../../components/common/ProjectVirifi/Team"));
const Milestone = dynamic(()=> import("../../components/common/ProjectVirifi/projectMilestone"));
const VisitProject = dynamic(()=> import("../../components/projectVisit"));
const ProjectSectionTwo = dynamic(()=> import("../../components/Project/projectSectionTwo"));
const ContactCard = dynamic(()=> import("../../components/common/projectContactCard.jsx"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Virifi = () => {
  const FatouraSectionOne = {
    brief:
      "Certifies and verifies your files with protected confidentiality, E2E encryption,and helps you digitize your business with the next generation of verification.",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6385.png",
    alt: "Virifi",
  };

  const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };

  const milestoneContent = [
    "Within the first month only, the development team achieved a significant milestone by successfully creating the private blockchain infrastructure using the Hyperledger Fabric framework.",
    "Just in 20 days successfully implemented PDF document signing functionality. This achievement involved in-depth research on PDF document architecture, understanding the intricacies of document signing, and implementing a robust solution that allowed for multiple signatures while ensuring document authenticity.",
    "Meet the breakeven in lesser taImplemented the necessary network nodes, consensus mechanisms, and smart contracts to establish a secure and decentralized foundation for the platform in 40 days.han its development time",
  ];
  return (
    <>
        <Header />
      <div className="w-full px-4 flex flex-col items-center pt-12 justify-center lg:block lg:px-12 bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8.png')]">
        <SectionOne section={FatouraSectionOne} />
      </div>
      <div>
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 287.png" className="lg:-mt-8"/>
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <div>
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Repeat Grid 1.png" />
      </div>
      <>
        <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8.png')] bg-no-repeat lg:py-24 lg:-my-12">
          <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
          <span className="text-[#7600EB]"> Admin's</span>  Outlook
          </h1>
          {/* <div>
          <h1 className="text-left lg:mt-16 text-3xl Gilroy-Bold lg:text-4xl  lg:mx-44">
          User Management
          </h1>
          </div> */}
          <div className="px-4 lg:px-24 lg:py-12 ">
           <div className="">

           <div>
                     <img className="w-full" src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6475.png"/>
                   </div>

                   <div>
                     <img className="w-full" src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6473.png"/>
                   </div>
           </div>
                  
                   {/* <div>
                   <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6477.png"/>

                   </div> */}
          
          </div>
        </div>
      </>
      <div>
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Mask Group 289.png" />
      </div>
    
      <SectionFive />

      <>
        <div className="py-8 mb-8 relative flex flex-col justify-center bg-virifi-m bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Image+8-Gradient.png')]">
          <h1 className="text-center text-3xl Gilroy-Bold lg:text-6xl  lg:mx-44">
            Marketing  <span className="text-[#7600EB]">Website</span> 
          </h1>
          <div className="px-4 lg:px-48 lg:py-12 ">
            <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6425.png" alt="" />
          </div>
        </div>
      </>
      <ProjectInquiry />
      <div className="max-w-full flex justify-center">
        <img
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt=""
          className="rounded-3xl w-full px-4 lg:w-[50%] py-[5%]"
        />
      </div>
      <ChallengeSection />
      <div className="py-10">
        <video
          muted
          loop
          autoPlay={true}
          controls={false}
          poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Comp 2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack />

      <Team />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="virifi.io"
        projectLink="https://virifi.io/"
        mockup=""
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />
      <div className="w-full">
       {/* <ContactCard /> */}
      </div>
      <Slogan />
      <Footer />
    </>
  );
};

export default Virifi;
