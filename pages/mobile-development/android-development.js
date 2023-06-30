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
const ContactCard = dynamic(()=> import("../../components/common/projectContactCard.jsx"));
const WhyMean = dynamic(()=> import("../../components/mean-stack-development/WhyMean.js"));
const Benefits = dynamic(()=> import("../../components/mean-stack-development/benefits.js"));
const ProjectInquiry = dynamic(()=> import("../../components/projectInquiryCard/index.js"));
const Industries = dynamic(()=> import("../../components/mobilePages/industries"));

function HireAangularJsDeveloper(props) {
  const content =
    "Our team of experts uses the latest tools and technologies to build the industry-best Android apps. Our apps are 100% in sync with our client’s business needs, technologies, and needs.";

  const hireCards = [
    {
      head: "Innovative approach",
      content:
        "Android app development is a rapidly growing industry, with new innovations and improvements being introduced almost every day. A great way to develop Android apps is to think outside the box and come up with creative ideas to make them stand out from similar apps and give users a better experience.",
    },
    {
      head: "Focus on your business goals and user experience",
      content:
        "We balance your business goals and user needs to develop customer-centered Android apps that help drive additional revenue. By forging symbiotic relationships with our clients, we deliver the distinct advantage of knowing their business, culture, and industry. This helps us create compelling mobile applications that positively impact your bottom line.",
    },
    {
      head: "Integrity & Transparency",
      content:
        "Android apps are complex creations and it requires a skillful hand to build them. We make sure that every app we develop is crafted with integrity, trust and transparency as the core values in mind. Our code reviews and testing practices help us maintain strict adherence to the latest standards.",
    },
    {
      head: "Competitive Pricing",
      content:
        "As our business has grown, we’ve been able to improve our rates and pricing to make sure we are able to stay competitive in a very challenging industry. Brain Inventory is able to offer a combination of cost-effective rates with amazing quality work no matter what your budget may be.",
    },
    {
      head: "Flexible Engagement Models",
      content:
        "Our commitment to helping our clients achieve their business goals requires us to offer flexibility and customization. While we have a number of specific templates in place to handle certain engagement models, we are always willing to help you select the model that is most suitable for your company’s needs.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title:
        "What are the factors to consider while hiring an Android app development company?",
      description:
        "Having an android app for your business is a must to improve the efficiency and productivity of your staff. There are several aspects that you need to consider while selecting an android app development company. There are certain factors like development methodology, check out their portfolio, talk with their previous clients, employee strength, and many more which play vital role in making your choice easier.",
    },
    {
      id: "2",
      title: "Will I be getting any support after project completion?",
      description:
        "Yes, we offer in-depth post app-launch maintenance support to our clients. Under which, we look into design update requirements, UAT, version updates. The reason behind this is because as small agency, you need strong support system for your work that’s why we provide an excellent solution for every client.",
    },
    {
      id: "3",
      title: "How much can Android app development cost?",
      description:
        "Though the cost of an Android app varies greatly, the cost of development depends on various factors. There are some basic factors that determine the cost of developing an app like your project requirements, type of app development solution, and features included in the mobile application.",
    },
    {
      id: "4",
      title: "How much time Android app development can take?",
      description:
        "The time required for Android app development can vary significantly depending on the complexity of the app, the features required, and the level of expertise of the development team. There are many considerations to make when developing an Android app, including whether you need an iPhone version or not, which SDK platform should be used (SDK 22, 24, or 25), what Android library modules you need to integrate into your app, and so on.",
    },
    {
      id: "4",
      title: "Why Android app development is the right choice for Startups?",
      description:
        "There are many advantages that startups can get through Android app development like higher ROI, higher productivity, feature-rich apps, interoperability, ample opportunities, etc.",
    },
  ];

  const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  const chooseBI = [
    "Brain Inventory helps companies scale operations with best-in-class mobile apps for the Android platform.",
    "We offer various Android app development solutions that can be customized to meet the client’s specific requirements.",
    "As a highly skilled Android app development company in India, we create high-quality and premium apps that fulfill our clients’ needs.",
    "We utilize necessary tools efficiently and cost-effectively during the app development process.",
    "Feel free to contact us at any time for a straightforward quote.",
    "The application development process requires continuous efforts from both the app developer and the client.",
    "Our experienced team excels in every stage of the development process, from conception to design and development.",
    "We prioritize understanding your needs and delivering exactly what you’re looking for.",
  ];

  const benefitsList = [
    "Android is an open-source platform which allows app developers to develop apps very easily.",
    "Android is a powerful and popular platform for Android users to download and use applications, games, and other content. No doubt, it’s been the most successful mobile OS in the market right now.",
    "Android is the most popular mobile platform, and Android developer tools offer a full Java IDE with features to develop, debug, and package Android apps.",
    "Android apps are highly customizable and simple to manage.",
  ];
  const meanReasons = [
    "Android application development involves writing system code in Java and user interface code in Java, C, or C++.",
    "The operating system of an Android device is Linux-based and can be customized through installed Android applications.",
    "Android application development is a thriving industry due to the potential provided by the customized operating system.",
    "Brain Inventory aims to help organizations develop cost-effective, secure, and efficient mobile applications for interacting with customers.",
    "Brain Inventory has a proven track record as software developers, known for delivering high-quality apps.",
    "Their solutions are tailored to fulfill business objectives and meet customer expectations.",
  ];
  return (
    <>
      <Head>
        <title>Android Development | Android App Development Company</title>
        <meta
          name="description"
          content="Hire top-rated Android Developers from Brain Inventory. Our experienced developers build highly customized Android applications for different sizes of businesses."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hire Android Developers | Dedicated Android App Developers"
        />
        <meta
          property="og:description"
          content="Hire top-rated Android Developers from Brain Inventory. Our experienced developers build highly customized Android applications for different sizes of businesses."
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
          content=" Custom Android App 
Development | Android App Development Company"
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
            heading="Android App"
            title="Hire Android"
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6648.png"
            alt="Android Appp Development Services, Android App Development"
          />
          <WhyMean type="Android App" meanReasons={meanReasons} />
          <div className="flex justify-center px-10">
            <h1 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-satoshi">
              Android App Development
            </h1>
          </div>
          <Benefits
            type="Android App"
            subhead="Android app development is a trusted brand in the world of mobile app development. The reason for its prominence lies in the fact that it is one of the most sought-after platforms, providing both an evolutionary and revolutionary approach to enhancing user experience. The Android platform has seen a steady rise in popularity over the past few years, and this presents developers with a unique opportunity to reap the benefits."
            benefitsList={benefitsList}
          />
          <Hire
            title="Why Android App Development from Brain inventory"
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
          <div className="pb-4" />
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
