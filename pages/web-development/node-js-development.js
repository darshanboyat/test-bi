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
    "We are a reliable Node js development company that helps you deliver better products and services faster than your competitors do. Our expert team of software developers is always available 24/7.";

  const hireCards = [
    {
      head: "Transparency",
      content:
        "Brain Inventory is an emerging Vuejs web development company with an experienced and flexible team of web application developers, sysops, project managers, and full-stack engineers. We are committed to making your business thrive and leveraging the advantages of responsive web design to help you expand, grow and flourish.",
    },
    {
      head: "Uplifted User Experience",
      content:
        "Our team of designers creates the website user interface and experience to increase user engagement. We ensure that you have a pleasant experience. Our developers use the latest technology to develop scalable, robust, secure, and future-proof websites for your business in order to deliver results-oriented products.",
    },
    {
      head: "Flexible Engagement Models",
      content:
        "We give you the flexibility to choose the best engagement model that is suitable for your project. We believe in transparency and quality in every project and by having a customized solution for each project we deliver our clients the best results which makes us one of the top web development companies.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title:
        "How much does it cost to develop a NodeJs app?",
      description:
        "It depends. The answer to this simple question is not so simple in reality. The total cost of development of a NodeJs app can vary largely depending on the functionalities required, the kind of resource you are hiring, and the engagement mode you choose to develop your digital product at various stages. In short, the more complex features you plan to implement, the more time developers will be required to develop them.",
    },
    {
      id: "2",
      title: "Do you use any project management tools?",
      description:
        "We stay organized by using industry-standard project management tools like Jira, Trello, Pivotal Tracker, Asana, etc. We can create the task, assign the work and monitor the development progress. You check for updates daily. We’ve got it covered!",
    },
    {
      id: "3",
      title: "Do you provide NDA and IP protection for my project?",
      description:
        "You will have 100% ownership of your project. It includes NDA, copyright, source code, intellectual property rights, confidential letters, other MoUs, etc. Since we can’t disclose the name of a client, I would give you an example of our brand identity work for a private investment bank.",
    },
    {
      id: "4",
      title: "Will I get post-development support?",
      description:
        "For the maintenance of the web app, you do not require to hire a full-time, dedicated developer as we have a flexible bucket model, which allows you to hire Node.js developers to provide dedicated support and maintenance service when required. As per our agreement with our clients, we agree that 50% of any enhancement made in the web app should be paid for by the client. So if you want us to make any changes to some part of your website functionality, just let us know about it and we will get back to you later.",
    },
    {
      id: "5",
      title: "We already have designs ready, can you work with those?",
      description:
        "Yes, we do!",
    },
  ];

  const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  const chooseBI = [
    "Node.js is in high demand for web and mobile app development, thanks to the trend of Single Page Applications.",
    "Leading IT brands are already utilizing Node.js development services.",
    "Node.js enables real-time processing and instant information push to browsers, enhancing interactivity.",
    "Custom development services provided by the team of developers for utilizing Node.js effectively.",
    "Assistance offered to enterprises to improve online performance with flexible and feature-rich solutions.",
    "Services include scalable components, increased security, and creating a stable foundation.",
    "Highly skilled developers and strategists specialized in Node.js.",
    "Expertise in developing robust applications compatible with HTML5, CSS, and JavaScript.",
    "Capacity to handle multiple projects concurrently.",
    "Niche application development in various industries such as IT management, e-commerce, finance, healthcare, and more.",
  ];

  const benefitsList = [
    "Node.js is built on the V8 JavaScript engine, which compiles JavaScript into machine code before executing it. This results in high performance and allows Node.js applications to handle a large number of concurrent connections with low response times.",
    "It is designed to be highly scalable due to its event-driven, non-blocking I/O model. It can handle a large number of concurrent connections efficiently, making it suitable for applications that require high scalability, such as real-time applications, and chat servers.",
    "Node.js offers a streamlined development process with its vast package ecosystem and a large number of open-source libraries. Developers can leverage these libraries to accelerate development and focus more on building application logic rather than reinventing the wheel.",
    "It uses JavaScript on both the client-side and server-side, allowing developers to use the same language and codebase across the entire stack. This reduces the learning curve and enables developers to work on both front-end and back-end development seamlessly.",
  ];
  const meanReasons = [
    "BrainInventory is a highly regarded Node.js development company.",
    "BrainInventory is a highly regarded Node.js development company.",
    "Node.js enables the creation of server-side applications using JavaScript-based technologies like V8.",
    "BrainInventory has a vibrant team of web development professionals.",
    "Developers stay updated with the latest trends and technologies in web development.",
    "Preferred choice for startups and emerging businesses due to continuous research and best-in-class services.",
    "Extensive experience in Node development for a wide range of industries.",
    "Deep understanding of the Node platform.",
    "Individual attention given to each Node project to accommodate special requirements.",
  ];
  return (
    <>
      <Head>
        <title>Node Development | Node App Development Company</title>
        <meta
          name="description"
          content="Hire top-rated Node Developers from Brain Inventory. Our experienced developers build highly customized Node applications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Node Developers | Dedicated Node App Developers"
        />
        <meta
          property="og:description"
          content="Hire top-rated Node Developers from Brain Inventory. Our experienced developers build highly customized Node applications for different sizes of businesses."
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
          content=" Custom Node App 
Development | Node App Development Company"
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
            heading="Node.Js"
            title="Node.Js"
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6498.png"
            alt="Node.Js App Development Services, Node.Js App Development"
          />
          <WhyMean type="Node.Js" meanReasons={meanReasons} />
          <div className="flex justify-center px-10">
            <h1 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-satoshi">
            Node.Js Development
            </h1>
          </div>
          <Benefits
            type="Node.Js"
            subhead=""
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Node.Js Development from Brain inventory"
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
