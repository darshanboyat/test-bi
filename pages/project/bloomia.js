import React from "react";
// import Header from "../../components/projectHeader";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
const SectionOne = dynamic(()=> import("../../components/projectDetailOne/index.js"));
const SectionTwo = dynamic(()=> import("../../components/Projects/template/sectionTwo"));
const SectionThree = dynamic(()=> import("../../components/Projects/template/sectionThree/index.jsx"));
const PojectCarousel = dynamic(()=> import("../../components/Projects/sectionFour/index.js"));
const SectionFive = dynamic(()=> import("../../components/Projects/sectionFive/index.js"));
const SectionSix = dynamic(()=> import("../../components/Projects/sectionSix/index.jsx"));
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard/index.js"));
const SectionSeven = dynamic(()=> import("../../components/Projects/SectionSeven/index.js"));
const ProjectDetailCard = dynamic(()=> import("../../components/projectDetailCard"));
const TechStack = dynamic(()=> import("../../components/Projects/SectionEight/index.js"));
const Team = dynamic(()=> import("../../components/projectTeam/index.js"));
const Milestone = dynamic(()=> import("../../components/projectMilestone/index.js"));
const VisitProject = dynamic(()=> import("../../components/projectVisit/index.js"));
const ProjectSectionTwo = dynamic(()=> import("../../components/Project/projectSectionTwo/index.js"));
const ContactCard = dynamic(()=> import("../../components/common/projectContactCard.jsx"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan/index.jsx"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Bloomia = () => {
  const BloomiaSectionOne = {
    space:
      "                                                                                                                                                                                                                           ",
    brief: "",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 4230.png",
    image:
      "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6382.png",
    alt: "Bloomia",
  };

  const sectionOneImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6420.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Mask Group 172.png",
  };
  const sectionTwoImg = {
    one: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6419.png",
    two: "https://braininventory.s3.us-east-2.amazonaws.com/images/Group 6418.png",
  };
  const carouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2-1.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component 10.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
      hover:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/Component 11.png",
    },
  ];

  const section2CarouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-1.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/images/carousel-2.png",
    },
  ];

  const tech = [
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/6.png",
      name: "Angular",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/7.png",
      name: "NodeJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/9.png",
      name: "ExpressJs",
    },
    {
      image: "https://braininventory.s3.us-east-2.amazonaws.com/projects/8.png",
      name: "MongoDB",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Krishna Agrawal",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6420.png",
      role: "Sr. UI/UX Designer",
    },
    {
      id: 2,
      name: "Gunjan Jain",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6423.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Pradyumna Garg",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6429.png",
      role: "Software Architecture",
    },
    {
      id: 4,
      name: "Puneet Rajwani",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6432.png",
      role: "Software Architecture",
    },
    {
      id: 5,
      name: "Gautam Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6426.png",
      role: "Software Engineer",
    },
    {
      id: 6,
      name: "Hussain Ali",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6435.png",
      role: "Software Engineer",
    },
    {
      id: 7,
      name: "Subhash Ajmera",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6438.png",
      role: "Software Engineer",
    },
    {
      id: 8,
      name: "Rahul Badwaya",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/Group 6441.png",
      role: "Software Engineer",
    },
  ];

  const milestoneContent = [
    "Platform got published by major media houses",
    "Completing the project in a record time and achieving a smooth Go-Live",
    "Customer hit the break even in 6 Months",
  ];
  return (
    <>
      <Header />
      <div className="container project-bg pt-12">
        <SectionOne section={BloomiaSectionOne} />
      </div>
      <>
        <SectionTwo carouselImages={section2CarouselImages} />
      </>
      <SectionThree
        sectionOneImg={sectionOneImg}
        sectionTwoImg={sectionTwoImg}
      />
      <PojectCarousel carouselImages={carouselImages} />
      <SectionFive />
      <SectionSix />
      <ProjectInquiry />
      <div className="max-w-full flex justify-center">
        <img
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt=""
          className="rounded-3xl w-[50%] py-[5%]"
        />
      </div>
      <SectionSeven />
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
      <TechStack tech={tech} />
      <Team teamMembers={teamMembers} />
      <Milestone content={milestoneContent} />
      <VisitProject projectName="Bloomia.app" />
      <ProjectSectionTwo />
      <BlogArticle />
      <ContactForm />
      <LocateUs />
      {/* <ContactCard /> */}
      <Slogan />
      <Footer />
    </>
  );
};

export default Bloomia;
