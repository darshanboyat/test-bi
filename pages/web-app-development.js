import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Footer = dynamic(()=> import("../components/common/Footer"));
const Loader = dynamic(()=> import("../components/common/loader"));
const Header = dynamic(()=> import("../components/header/Header"));
const WebBanner = dynamic(()=> import("../components/webPages/webBanner"));
const Engagementmodal = dynamic(()=> import("../components/mobilePages/engagementModal"));
const TechnologyStackWeb = dynamic(()=> import("../components/webPages/technologyStackWeb"));
const WebAboutUs = dynamic(()=> import("../components/webPages/WebAboutUs"));
const ChooseWeb = dynamic(()=> import("../components/webPages/chooseWeb"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const Faqs = dynamic(()=> import("../components/mobilePages/faqs"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const WebServices = dynamic(()=> import("../components/webPages/webServices"));

function WebAppDevelopment(props) {
   
   

  return (
    <>
      <Head>
        <title>Web Application Development Services with Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory is a leading web application development company in India offering professional website and web application development services worldwide."
        />
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header></Header>
            <WebBanner />
            <WebAboutUs />
            <TechnologyStackWeb />
            <ChooseWeb />
            <Newsletter />
            <WebServices />
            <Engagementmodal />
            <Newsletter />
            <Faqs />
            <KeepInTouch />
            <LocateUs />
            <Footer />
          </div>
        </div>
    </>
  );
}

export default WebAppDevelopment;
