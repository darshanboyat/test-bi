import React from "react";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
const SectionOne = dynamic(()=> import("../../components/common/rtc/SectionOne"));
const SectionTwo = dynamic(()=> import("../../components/common/rtc/sectionTwo"));
const SectionThree = dynamic(()=> import("../../components/common/rtc/sectionThree"));
const SectionFour = dynamic(()=> import("../../components/common/rtc/sectionFour"));
const SectionFive = dynamic(()=> import("../../components/common/rtc/sectionFive"));
const SectionSix = dynamic(()=> import("../../components/common/rtc/sectionSix"));
// import = dynamic(()=> import(from "../../components/common/rtc/sectionSeven/index.jsx"));
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard"));
const ChallengeSection = dynamic(()=> import("../../components/common/rtc/Challenges"));
const TechStack = dynamic(()=> import("../../components/common/rtc/SectionEight"));
const Team = dynamic(()=> import("../../components/common/rtc/Team"));
const Milestone = dynamic(()=> import("../../components/projectMilestone"));
const VisitProject = dynamic(()=> import("../../components/projectVisit"));
const ProjectSectionTwo = dynamic(()=> import("../../components/Project/projectSectionTwo"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Fatoura = () => {
  const FatouraSectionOne = {
    space: "",
    brief: "CREATE & MANAGE YOUR ",
    styleBrief: "INVOICES",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 5166.png",
    alt: "Fatoura",
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
    "Major IM platform integration.",
    "Real-time email management within the application",
    "Social media post scheduling on the IM platform from within the application",
  ];
  return (
    <>
      <div className="bg-cover h-screen bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Mask+Group+248.png')]">
          <Header />
        <div className="container lg:pt-48">
          <SectionOne section={FatouraSectionOne} />
        </div>
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <SectionSix />
      <SectionFive />
      {/* <SectionSeven /> */}

      <div className="py-8">
        <div className="flex justify-center items-center ">
          <img
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6533.png"
            alt=""
            className="w-[34rem]"
          />
        </div>
        <div className="relative w-full h-screen lg:h-[78vh] overflow-y-scroll no-scrollbar">
          <img
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6535.png"
            alt=""
            className=""
          />
        </div>
      </div>

      <ProjectInquiry />
      <div className="max-w-full flex justify-center">
        <img
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt=""
          className="rounded-3xl w-full px-4 lg:w-[50%] py-[5%]"
        />
      </div>
      <ChallengeSection />
      <div className="py-2">
        <video
          muted
          loop
          autoPlay={true}
          controls={false}
          poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
        >
          <source
            src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Cojmp+2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack />
      <Team />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="Revolution Travel CRM"
        projectLink="https://www.revolutiontravel.ca/"
        mockup=""
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />
      {/* <div className="w-full">
                <ContactCard />
            </div> */}
      <Slogan />
      <Footer />
    </>
  );
};

export default Fatoura;
