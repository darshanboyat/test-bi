import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Footer = dynamic(()=> import("../components/common/Footer"));
const Loader = dynamic(()=> import("../components/common/loader"));
const Header = dynamic(()=> import("../components/header/Header"));
const Banner = dynamic(()=> import("../components/uiuxPages/banner"));
const Industries1 = dynamic(()=> import("../components/mobilePages/industries"));
const Engagementmodal = dynamic(()=> import("../components/mobilePages/engagementModal"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const Faqs = dynamic(()=> import("../components/mobilePages/faqs"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const WebServices = dynamic(()=> import("../components/webPages/webServices"));
const DesignTool = dynamic(()=> import("../components/uiuxPages/designTool"));
const Uiabout = dynamic(()=> import("../components/uiuxPages/uiabout"));
const ChooseApp = dynamic(()=> import("../components/mobilePages/chooseApp"));
const Magic = dynamic(()=> import("../components/uiuxPages/magic"));

function UiUxServices(props) {
   
   
  return (
    <>
      <Head>
        <title>Best UI And UX Services By Brain Inventory</title>
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header></Header>
            <Banner />
            <Uiabout />
            <DesignTool />
            <ChooseApp />
            <Newsletter />
            <WebServices />
            <Magic />
            <Engagementmodal />
            <Newsletter />
            <Industries1 />
            <Faqs />
            <KeepInTouch />
            <LocateUs />
            <Footer />
          </div>
        </div>
    </>
  );
}

export default UiUxServices;
