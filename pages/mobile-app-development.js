import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../components/header/Header"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const LetsKick = dynamic(()=> import("../components/common/LetsKick"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const Loader = dynamic(()=> import("../components/common/loader"));
const Banner = dynamic(()=> import("../components/mobilePages/banner"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const ChooseApp = dynamic(()=> import("../components/mobilePages/chooseApp"));
const TechnologyStack = dynamic(()=> import("../components/mobilePages/technologyStack"));
const Mobileservices = dynamic(()=> import("../components/mobilePages/mobileservices"));
const Industries = dynamic(()=> import("../components/mobilePages/industries"));
const AboutusSection = dynamic(()=> import("../components/mobilePages/aboutusSection"));
const Engagementmodal = dynamic(()=> import("../components/mobilePages/engagementModal"));
const Pratice = dynamic(()=> import("../components/mobilePages/pratice"));
const Faqs = dynamic(()=> import("../components/mobilePages/faqs"));
const Standard = dynamic(()=> import("../components/mobilePages/standard"));

function MobileAppDevelopment(props) {
   
   

  return (
    <>
      <Head>
        <title>Best Moblie App Development Company | Brain Inventory</title>
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header></Header>
            <Banner />
            <AboutusSection />
            <TechnologyStack />
            <ChooseApp />
            <Newsletter />
            <Mobileservices />
            <Standard />
            <Engagementmodal />
            <Pratice />
            <Newsletter />
            <Industries />
            <Faqs />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </div>
        </div>
    </>
  );
}

export default MobileAppDevelopment;
