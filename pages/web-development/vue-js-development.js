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
    "As a strong proponent of state-of-the-art web development technologies and a top-notch VueJS developer, we deliver unmatched products at an affordable cost. Our team of experienced, dedicated Vue JS developers utilizes reusable UI components.";

  const hireCards = [
    {
      head: "Dedicated Vue.js Development Team",
      content:
        "Brain Inventory is an emerging Vuejs web development company with an experienced and flexible team of web application developers, sysops, project managers, and full-stack engineers. We are committed to making your business thrive and leveraging the advantages of responsive web design to help you expand, grow and flourish.",
    },
    {
      head: "Fixed Price Model",
      content:
        "Fixed-price engagement is a cost-effective method considering the business application. It can be applicable to any type of business and ecosystem, irrespective of its size or nature. We will help turn your ideas into reality by designing an effective workflow that adheres to the latest coding standards and techniques.",
    },
    {
      head: "Cost Effective",
      content:
        "We offer Vue.js development services on an affordable budget. Our team’s experience and dedication to our client’s satisfaction are what sets us apart from other companies. You can be sure that your project will meet or exceed its goals because we ensure that quality comes first before anything else.",
    },
    {
      head: "Support and Maintenance",
      content:
        "Vue.js development services are of a high-quality approach and provide complete support to our clients for their websites at a time. We offer 24*7 complete support, maintenance, and upgradation services with our dedicated engineers who can build an application using this framework using the best possible technologies.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title:
        "Why and when should I use Vue.js?",
      description:
        "Vuejs is a fast and lightweight JavaScript framework for building high-performing, reactive user interfaces. Vue.js is based on the modern, progressive template engine. The class-based component model provides a clean separation of concerns at the core of your application and makes it easy to reuse pieces of code. Vue provides a simple API for data binding and view rendering for components so you can focus on what matters the most: the user interface.",
    },
    {
      id: "2",
      title: "Do you use any project management tools?",
      description:
        "Yes, we believe that good project management tools can be the key to the success of your project. Vue.js developers know and use top Jira, Slack, Asana, Trello, and other tools like these perfectly. If you have any other tool preference then you can always give us a chance to use our Vue.js Developers in your management tool as well and we will be comfortable using it as well.",
    },
    {
      id: "3",
      title: "How much does it cost to develop the Vue app?",
      description:
        "The total cost of the Vue js app depends on various factors like the functionalities you are implementing, the kind of resource you are hiring, and the engagement model you choose to develop your digital product. To be more precise, the more complex features and functionalities you plan to implement, the more time Vue js developers will be required to develop them.",
    },
    {
      id: "4",
      title: "Do you provide NDA and IP protection for my project?",
      description:
        "You will have 100% ownership of your project. It includes NDA, copyright, source code, intellectual property rights, confidential letters, other MoUs, etc. If a client ends up dropping out of the project or decides to buy the software outright, you’ll be able to stop working on it immediately and move forward with your next idea without being held accountable for the incomplete project by your next client.",
    },
  ];

  const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  const chooseBI = [
    "Skilled team of Vue.js developers who can bring your ideas to life.",
    "Experienced in delivering Vue.js projects for various industries.",
    "Team draws inspiration from diverse fields like design, media, and research.",
    "Team draws inspiration from diverse fields like design, media, and research.",
    "Vue.js is fast, efficient, and flexible, suitable for back-end and front-end applications.",
    "Vue.js allows building single-page web applications with additional tools like Vuex and Vuetify.",
    "Customized user interfaces can be created without extensive coding skills using Vue.js.",
    "Hire Vue.js developers from BrainInventory for interactive application development.",
    "Emphasis on high coding standards, latest tools and technology, proper planning, research, and proven methodologies.",
    "Strong focus on UI/UX designs and flexible delivery models.",
  ];

  const benefitsList = [
    "Vue.js is known for its simplicity and ease of use, which makes it easy for developers to learn and use. This means that businesses can save time and money on the development process.",
    "It can be used to build a wide range of applications, from small and simple to large and complex. It is also compatible with a variety of platforms, including desktop, mobile, and web. Designed to be lightweight and fast, which means that applications built using Vue.js can load quickly and provide a smooth user experience.",
    "A component-based framework, which means that developers can reuse code across different parts of an application. This can make development faster, and more efficient, as well as reduce the likelihood of errors.",
    "Integrated with other libraries and frameworks, such as React and Angular, which makes it a flexible choice for developers who want to use it alongside other tools.",
  ];
  const meanReasons = [
    "Vue is considered one of the smallest frameworks in terms of file size.",
    "Smaller file size enables utility apps that are significantly smaller and quicker to download.",
    "Vue-built apps are more efficient to use compared to apps built with other frameworks.",
    "Vue is a flexible app development solution suitable for businesses of any size.",
    "Vue framework offers high versatility, supporting various build systems and multiple environments.",
    "Vue is a progressive framework that can be introduced into existing codebases without requiring major changes.",
    "Vue can enhance the performance and functionality of utility business applications without altering existing structures.",
  ];
  return (
    <>
      <Head>
        <title>Vue Development | Vue App Development Company</title>
        <meta
          name="description"
          content="Hire top-rated Vue Developers from Brain Inventory. Our experienced developers build highly customized Vue applications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Vue Developers | Dedicated Vue App Developers"
        />
        <meta
          property="og:description"
          content="Hire top-rated Vue Developers from Brain Inventory. Our experienced developers build highly customized Vue applications for different sizes of businesses."
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
          content=" Custom Vue App 
Development | Vue App Development Company"
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
            heading="Vue.Js"
            title="Vue.Js"
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
            alt="Vue.Js App Development Services, Vue.Js App Development"
          />
          <WhyMean type="Vue.Js" meanReasons={meanReasons} />
          <div className="flex justify-center px-10">
            <h1 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-satoshi">
            Vue.Js Development
            </h1>
          </div>
          <Benefits
            type="Vue.Js"
            subhead="Android app development is a trusted brand in the world of mobile app development. The reason for its prominence lies in the fact that it is one of the most sought-after platforms, providing both an evolutionary and revolutionary approach to enhancing user experience. The Android platform has seen a steady rise in popularity over the past few years, and this presents developers with a unique opportunity to reap the benefits."
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Vue.Js Development from Brain inventory"
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
