import React from "react";
// import Header from "../../components/projectHeader";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../../components/header/Header"));
const SectionOne = dynamic(()=> import("../../components/common/ocureel/SectionOne"));
const SectionTwo = dynamic(()=> import("../../components/common/ocureel/sectionTwo"));
const SectionThree = dynamic(()=> import("../../components/common/ocureel/sectionThree"));
const SectionFour = dynamic(()=> import("../../components/common/ocureel/sectionFour"));
const SectionFive = dynamic(()=> import("../../components/common/ocureel/sectionFive"));
const SectionSix = dynamic(()=> import("../../components/common/ocureel/sectionSix"));
// import SectionSeven from "../../components/common/ocureel/sectionSeven/index.jsx";
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard"));
const ChallengeSection = dynamic(()=> import("../../components/common/ocureel/Challenges"));
const TechStack = dynamic(()=> import("../../components/common/ocureel/SectionEight"));
const Team = dynamic(()=> import("../../components/common/ocureel/Team"));
const Milestone = dynamic(()=> import("../../components/projectMilestone"));
const VisitProject = dynamic(()=> import("../../components/projectVisit"));
const ProjectSectionTwo = dynamic(()=> import("../../components/Project/projectSectionTwo"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Fatoura = () => {

  const milestoneContent = [
    "Awarded as the best Social Ultimate Game",
    "Less than 2 seconds loading time on Reel scrolling",
    "1K download at the launch party itself",
  ];
  return (
    <>
      <div className="bg-cover relative z-20 w-full h-[105vh] lg:h-[140vh] bg-center lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Mask+Group+192.png')] bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
          <Header />
        <div className="container">
          <SectionOne />
        </div>
      </div>
      <>
        <SectionTwo />
      </>
      <div className="bg-[#FDDEFE] relative lg:-top-52 lg:-mb-64">
      <div className="lg:h-[80vh] bg-no-repeat bg-contain bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/ocureel+section+2.png')] relative lg:-top-28">
        <h1 className="transparent-text text-8xl bg-transparent w-72 px-8 h-[80vh] flex flex-col justify-end">
          Mobile Version
        </h1>
      </div>
      </div>
      <SectionFour />
      <SectionSix />

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
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Comjp+2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <TechStack />
      <Team />
      <Milestone content={milestoneContent} />
      <VisitProject
        projectName="Ocureel"
        projectLink="https://ocureel.com"
        mockup="https://xd.adobe.com/view/867444d6-aa8e-4d74-a0c6-e93e9e26bfe4-d327/"
      />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />

      <Slogan />
      <Footer />
    </>
  );
};

export default Fatoura;
