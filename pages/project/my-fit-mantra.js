import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../../components/header/Header"));
const SectionOne = dynamic(()=> import("../../components/projectDetailOne/index.js"));
const SectionTwo = dynamic(()=> import("../../components/projectMFM/projectDetailTwo/index.js"));
const SectionThree = dynamic(()=> import("../../components/projectMFM/projectDetailThree/index.js"));
const PojectCarousel = dynamic(()=> import("../../components/projectDetailCarousel/index.js"));
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard/index.js"));
const ProjectDetailCard = dynamic(()=> import("../../components/projectDetailCard"));
const TechStack = dynamic(()=> import("../../components/projectTechstack"));
const Team = dynamic(()=> import("../../components/projectTeam/index.js"));
const Milestone = dynamic(()=> import("../../components/projectMilestone/index.js"));
const VisitProject = dynamic(()=> import("../../components/projectVisit/index.js"));
const ProjectSectionTwo = dynamic(()=> import("../../components/projectSectionTwo"));
const ContactCard = dynamic(()=> import("../../components/common/projectContactCard.jsx"));
const LocateUs = dynamic(()=> import("../../components/common/projectLocate"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const BlogArticle = dynamic(()=> import("../../components/common/BlogArticle"));
const Slogan = dynamic(()=> import("../../components/common/ProjectSlogan/index.jsx"));
const Footer = dynamic(()=> import("../../components/common/Footer"));

const Numetric = () => {
  const NumetricSectionOne = {
    brief:
      "Provides you with personal trainers, coaches, and gym owners to manage your clients with ease.",
    logo: "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6372.png",
    image:
      "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6450.png",
    alt: "MyFitMantra",
  };
  const carouselImages = [
    {
      id: 1,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6445.png",
    },
    {
      id: 2,
      url: "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6446.png",
    },
  ];

  const tech = [
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/6.png",
      name: "Angular",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/7.png",
      name: "NodeJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/9.png",
      name: "ExpressJs",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/8.png",
      name: "MongoDB",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/dfdf.png",
      name: "AWS EC2",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/fddf.png",
      name: "AWS S3",
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
      name: "Sidra Shahid",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group -1.png",
      role: "Software Architecture",
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
    {
      id: 9,
      name: "Pritesh Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6426.png",
      role: "QA Analyst",
    },
  ];

  const milestoneContent = [
    "MFM is awarded as the most efficient fitness and workout platform",
    "Hit the first 1K user base in just 3 months",
    "Meet the breakeven in lesser than its development time",
  ];
  return (
    <>
      <Header />
      <div className="container project-bg pt-12">
        <SectionOne section={NumetricSectionOne} />
        <SectionTwo />
        <div className="flex justify-center">
          <img
            src="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6448.png"
            className="w-full lg:w-[75%] pt-4 lg:pt-24"
          />
        </div>
        <PojectCarousel images={carouselImages} />
        <SectionThree
          text="Trainer's Perspective"
          image="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/Group 6447.png"
        />
        <SectionThree
          text="Customer's Perspective"
          image="https://braininventory.s3.us-east-2.amazonaws.com/projects/MFM/mfm_collage.png"
        />
        <ProjectInquiry />
        <img
          src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
          alt=""
          className="rounded-3xl w-[100vw] px-[10vw] py-[5vh]"
        />
        <ProjectDetailCard
          challenge="One significant challenge involved creating a schema that could effectively link multiple elements with each other. This required careful consideration of the relationships between different data components within the system to ensure efficient data management and retrieval. Implementing a secure and seamless payment process was another technical hurdle. The team needed to develop a solution that would allow trainers to accept payments directly into their wallets through the platform."
          solution="In order to address the aforementioned challenges, several technical solutions were implemented during the development of the project. Extensive discussions were held between the business owner, product analyst team and developers to identify the specific use cases. These discussions facilitated the thoughtful design of the schema, ensuring that every element of the project catered to the intended audience. MongoDB was chosen as the database solution due to its flexibility and built-in tools, which simplified the storage of dynamic data. For direct payment options, Stripe was selected as the payment aggregator. To provide users with the ability to connect their Stripe accounts, the Stripe Connect strategy was implemented. By utilizing the user's Stripe account, the platform was able to generate products on demand and securely process payments."
        />
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
        <VisitProject
          projectName="My Fit Mantra"
          projectLink="https://myfitmantra.com/"
          mockup=""
        />
        <div className="mx-4 lg:mx-24">
          <ProjectSectionTwo />
        </div>
        <div className="px-4">
          <BlogArticle />
        </div>
        <div className="mx-4">
          <ContactForm />
        </div>
        <LocateUs />
        {/* <ContactCard /> */}
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Numetric;
