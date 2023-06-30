import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../../components/header/Header"));
const LocateUs = dynamic(()=> import("../../components/mean-stack-development/locateUs"));
const Footer = dynamic(()=> import("../../components/common/Footer"));
const Loader = dynamic(()=> import("../../components/mean-stack-development/loader"));
const ContactForm = dynamic(()=> import("../../components/common/ContactForm"));
const FaqHire = dynamic(()=> import("../../components/mean-stack-development/Faqhire"));
const Hire = dynamic(()=> import("../../components/common/Hire"));
const HireBanner = dynamic(()=> import("../../components/mean-stack-development/HireBanner"));
const ChooseBraininventory = dynamic(()=> import("../../components/mean-stack-development/ChooseBraininventory"));
const BlogArticle = dynamic(()=> import("../../components/mean-stack-development/BlogArticle"));
const WhyMean = dynamic(()=> import("../../components/mean-stack-development/WhyMean.js"));
const Benefits = dynamic(()=> import("../../components/mean-stack-development/benefits.js"));
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard/index.js"));
const Industries = dynamic(()=> import("../../components/mobilePages/industries"));

function HireAangularJsDeveloper(props) {
  const content =
    "Brain Inventory is a team of experienced professionals who are passionate about the latest innovations and technologies. We are trained in all facets of the MERN stack and have expertise in React.js, NodeJS, and more.";

  const hireCards = [
    {
      head: "On-Time Delivery",
      content:
        "We are well-known for our distributed teams, agile methodologies, and efficient development approach. Our approach is backed by an extensive understanding of JavaScript and Node.js, and we will be happy to support you with implementing your idea or project through a carefully crafted solution using the MERN Stack stack.",
    },
    {
      head: "Seasoned Developers",
      content:
        "Our team of experienced MERN Stack developers is ready to take your app to the next level. They have extensive knowledge and experience in creating world-class solutions for clients. You will benefit from our development process and project management technique, which give an efficient way to deliver high-quality software products.",
    },
    {
      head: "Strict NDA Terms",
      content:
        "One of the most important aspects of a business is the idea. However, it is crucial to maintain confidentiality while sharing your business ideas with others. We ensure that no one can access the idea or data until you have signed an NDA. This protects both parties from any sort of breach.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title:
        "Can you list out some key benefits of MERN?",
      description:
        "MERN is a micro-framework that can be used for both front-end and back-end development. It supports MVC architecture, resulting in a smoother development process. MERN comes with a pre-built suite of extensive testing tools.",
    },
    {
      id: "2",
      title: "MERN is a micro-framework that can be used for both front-end and back-end development. It supports MVC architecture, resulting in a smoother development process. MERN comes with a pre-built suite of extensive testing tools.",
      description:
        "Yes, MERN stack development is a combination of technologies that are used to build highly scalable, robust, and maintainable applications. MERN stack is being used by some of the most popular companies like Google, Facebook, Dropbox, and many others due to its capability to run on multiple platforms.",
    },
    {
      id: "3",
      title: "Are MERN-based websites secure?",
      description:
        "MERN is a platform for developing websites and applications about user privacy and security. The MERN framework allows you to create safe websites with less coding, greater speed, and scalability, built around standards so that your users can seamlessly share their data across the web.",
    },
    {
      id: "4",
      title: "Do you provide support and maintenance services after development?",
      description:
        "We offer support and maintenance services according to your requirement. We can always offer you more options concerning getting your development done. Sometimes it’s better to give us a call before starting the full-blown development project, so we can get started on it right away without any delays or constraints caused by other commitments.",
    },
    {
      id: "5",
      title: "Do you reuse the code?",
      description:
        "We provide open-source licenses and proprietary private or commercial licenses based on your request and needs. If you have any queries, please feel free to contact us!",
    },
    {
      id: "6",
      title: "Can you develop custom MERN stack solutions for specific business needs?",
      description:
        "Yes. The MERN (MV, KV, and RF) methodologies are the best methodologies today. Furthermore, with the power of React and Node.js, our experts at CodeCloud can deliver a solution that is better than what you’re used to.",
    },
  ];

  const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  const chooseBI = [
    "Brain Inventory is a trusted and reliable choice for MERN stack development.",
    "Expert developers with deep understanding of MongoDB, Express, React.js, and Node.js.",
    "Proficiency in creating custom web applications with optimal performance.",
    "Stay up-to-date with the latest advancements in technology, including cloud services, DevOps, and continuous integration and delivery.",
    "Ability to develop innovative microservices and serverless applications.",
    "Offer top-notch MERN stack web development services to enterprises, small businesses, and startups.",
    "Skilled scrum masters and product owners dedicated to building highly customizable MERN stack web applications.",
    "Agile mindset for efficient and collaborative development process.",
    "Commitment to delivering results on time and within budget.",
  ];

  const benefitsList = [
    "Node.js, Express.js, React.js, and MongoDB — what do they all have in common? They are all written in the latest version of JavaScript. The MERN stack combines components from the three technologies in a way that provides a better abstraction than any individual component could achieve on its own.",
    "The MERN stack consists of MongoDB, ExpressJS, React, and Node.js. The MERN stack enables a full-stack solution for web development. It’s excellent for building modern applications that depend on data from multiple sources across networks.",
    "The MERN stack is designed to scale in many different ways. Firstly, all of the technologies in the stack were designed with scalability in mind. This means that they are easy to scale even in large environments, and easier to build when developing in smaller environments.",
  ];
  const meanReasons = [
    "The MERN Stack (Micro-eCommerce + FaaS + NLP) is a collection of software tools for scalable web and mobile app development.",
    "MERN Stack enables rapid application development in days rather than months or years.",
    "JavaScript is the most popular programming language known for its simplicity and ease of use.",
    "JavaScript comes with many libraries that aid in faster completion of day-to-day tasks.",
    "The JavaScript stack includes Angular and React, offering a range of choices for project stacks.",
    "Brain Inventory is a recommended option for creating an amazing website with an attractive design.",
    "The team of experts at Brain Inventory can assist in developing the best website.",
  ];
  return (
    <>
      <Head>
        <title>MERN Stack Development | MERN stack Development Company</title>
        <meta
          name="description"
          content="Hire top-rated MERN Stack Developers from Brain Inventory. Our experienced developers build highly customized MERN stacklications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire MERN Stack Developers | Dedicated MERN stack Developers"
        />
        <meta
          property="og:description"
          content="Hire top-rated MERN Stack Developers from Brain Inventory. Our experienced developers build highly customized MERN stacklications for different sizes of businesses."
        />
        <meta property="og:url" content="https://braininventory.in/" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/I-1.png"
        />

        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content=" Custom MERN stack 
Development | MERN stack Development Company"
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
the leading Android App Development Company with a top-notch 
Android App Developers team having profound expertise in Android App 
Development. Contact us today. "
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Loader />
      <div className="relative project-bg overflow-x-hidden">
          <Header></Header>
        <div className="mt-32">
          <HireBanner
            heading="Top MERN Stack"
            title="Top MERN Stack"
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6420+(1).png"
            alt="MERN Stack App Development Services, MERN Stack.Js App Development"
          />
          <WhyMean type="MERN Stack" meanReasons={meanReasons} />
          <div className="flex justify-center px-10">
            <h1 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-satoshi">
            MERN Stack Development
            </h1>
          </div>
          <Benefits
            type="MERN Stack"
            subhead="MERN is a stack of JavaScript-based technologies used for developing web applications. MERN was developed by Facebook to build fast and scalable applications."
            benefitsList={benefitsList}
          />
          <Hire
            title="Why MERN Stack Development from Brain inventory"
            card={hireCards}
          />{" "}
          <ProjectInquiry />
          <ChooseBraininventory
            reasons={chooseBI}
            subhead={chooseBiSubhead}
          />{" "}
          <Industries />
          <FaqHire faq={faqdetails} /> {/*Done */}
          <BlogArticle />
          <ContactForm />
          <LocateUs />
          {/* <ContactCard /> */}
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
