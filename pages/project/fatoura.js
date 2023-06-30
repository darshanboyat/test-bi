import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../../components/header/Header"));
const SectionOne = dynamic(()=> import("../../components/common/ProjectFatoura/SectionOne"));
const SectionTwo = dynamic(()=> import("../../components/common/ProjectFatoura/sectionTwo"));
const SectionThree = dynamic(()=> import("../../components/common/ProjectFatoura/sectionThree"));
const SectionFour = dynamic(()=> import("../../components/common/ProjectFatoura/sectionFour"));
const SectionFive = dynamic(()=> import("../../components/common/ProjectFatoura/sectionFive"));
const SectionSix = dynamic(()=> import("../../components/common/ProjectFatoura/sectionSix"));
// import SectionSeven from "../../components/common/ProjectFatoura/sectionSeven";
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard"));
const ChallengeSection = dynamic(()=> import("../../components/common/ProjectFatoura/Challenges"));
const TechStack = dynamic(()=> import("../../components/common/ProjectFatoura/SectionEight"));
const Team = dynamic(()=> import("../../components/common/ProjectFatoura/Team"));
const Milestone = dynamic(()=> import("../../components/projectMilestone"));
const VisitProject = dynamic(()=> import("../../components/projectVisit"));
const ProjectSectionTwo = dynamic(()=> import("../../components/Project/projectSectionTwo"));
const ContactCard = dynamic(()=> import("../../components/common/projectContactCard.jsx"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Fatoura = () => {
  const FatouraSectionOne = {
    space:
      "                                                                                                                                                                                                                                                                        ",
    brief: "CREATE & MANAGE YOUR ",
    styleBrief: "INVOICES",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/fatoura-logo.png",
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
    "Custom-tailored PayPal integration",
    "Multiple subscription options to cater for all sizes of businesses",
    "Multi-Language support at just one click",
  ];
  return (
    <>
        <Header />
      <div className="container project-bg pt-12">
        <SectionOne section={FatouraSectionOne} />
      </div>
      <>
        <SectionTwo />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <SectionFour />
      <SectionFive />
      <SectionSix />

      <>
        <div className="py-8 mb-8 relative flex flex-col justify-center bg-[#F39573]">
          <h1 className="text-center text-3xl lg:text-5xl border-2 border-[#F39573] border-b-white lg:mx-44">
            L A N D I N G P A G E
          </h1>
          <div className="px-4 lg:px-48 lg:py-12">
            <img
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group 6461.png"
              alt=""
            />
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
        projectName="fatoura.work"
        projectLink="https://fatoura.work/"
        mockup="#"
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

export default Fatoura;
