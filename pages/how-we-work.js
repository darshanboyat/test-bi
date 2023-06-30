import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../components/header/Header"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const LetsKick = dynamic(()=> import("../components/common/LetsKick"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const Faqs = dynamic(()=> import("../components/mobilePages/faqs"));
const HomeSectionSix = dynamic(()=> import("../components/home/HomeSection-6"));
const LanguageTool = dynamic(()=> import("../components/work/languageTool"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const Engagementmodal = dynamic(()=> import("../components/mobilePages/engagementModal"));
const ChooseApp = dynamic(()=> import("../components/mobilePages/chooseApp"));
const WorkBanner = dynamic(()=> import("../components/work/workBanner"));
const Work = dynamic(()=> import("../components/work/work"));
const Loader = dynamic(()=> import("../components/common/loader"));

export default function HowWeWork() {
   
   
  return (
    <>
      <Head>
        <title>Custom Web App & Software Development – How We Work</title>
        <meta
          name="description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom tailored solutions to your needs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom Web App & Software Development – How We Work"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a Culture rich custom Software Development Company that helps business turn their idea into reality. We create custom tailored solutions to your needs. "
        />
        <meta property="og:image" content=" " />
        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="twitter:title"
          content=" Custom Web App & 
Software Development – How We Work"
        />
        <meta
          property="twitter:description"
          content=" 
Brain Inventory is a Culture rich custom Software Development 
Company that helps business turn their idea into reality. We create 
custom tailored solutions to your needs. 
"
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Loader />
        <div className="relative second-component">
          <Header />
          <WorkBanner />
          <Work />
          <HomeSectionSix />
          <ChooseApp />
          <LanguageTool />
          <Newsletter />
          <Engagementmodal />
          <Faqs />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
    </>
  );
}
