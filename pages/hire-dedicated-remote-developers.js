import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../components/header/Header"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const StaffBanner = dynamic(()=> import("../components/staffAugmentation/staffBanner"));
const Staform = dynamic(()=> import("../components/staffAugmentation/staform"));
const OurProcess = dynamic(()=> import("../components/staffAugmentation/ourProcess"));
const HireRemote = dynamic(()=> import("../components/staffAugmentation/hireRemote"));
const OnboardingProcess = dynamic(()=> import("../components/staffAugmentation/onboardingProcess"));
const Hiringbenifit = dynamic(()=> import("../components/staffAugmentation/hiringbenifit"));
const StaffPratice = dynamic(()=> import("../components/staffAugmentation/staffPratice"));
const Logo = dynamic(()=> import("../components/staffAugmentation/logo"));
const StafFaq = dynamic(()=> import("../components/staffAugmentation/stafffaq"));
const Loader = dynamic(()=> import("../components/common/loader"));

export default function Hirededicatedremotedevelopers(props) {
   
   
  return (
    <>
      <Head>
        <title>
          Hire Dedicated Remote Developers | Remote Programmers - Brain
          Inventory
        </title>
        <meta
          name="description"
          content="Looking to hire dedicated remote developers for web and mobile app development? Use our IT augmentation services to get professional specialists on your project"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Hire Dedicated Remote Developers | Remote Programmers - Brain Inventory"
        />
        <meta
          property="og:description"
          content=" Looking to hire dedicated remote developers for web and mobile app development? Use our IT augmentation services to get professional specialists on your project."
        />
        <meta property="og:url" content=" https://braininventory.in/" />
        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="twitter:title"
          content=" Hire Dedicated Remote Developers | Remote Programmers - Brain Inventory"
        />
        <meta
          property="twitter:description"
          content=" Looking to hire dedicated remote developers for web and mobile app development? Use our IT augmentation services to get professional specialists on your project."
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="og:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/hire.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Loader />
        <div className="relative second-component">
          <Header />
          <StaffBanner />
          <Staform />
          <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container">
              <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/something.png" className="w-full" />
            </div>
          </div>
          <OurProcess />
          <HireRemote />
          <OnboardingProcess />
          <div className="">
            <div className="">
              <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/Comp1.gif" className="w-full" />
            </div>
          </div>
          <Hiringbenifit />
          <HireRemote />
          <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container">
              <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/staff-image.png" className="w-full" />
            </div>
          </div>
          <StaffPratice />
          <Logo />
          <StafFaq />
          <KeepInTouch />
          <LocateUs />
          <Footer />
        </div>
    </>
  );
}
