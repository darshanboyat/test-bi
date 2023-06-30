import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Footer = dynamic(()=> import("../components/common/Footer"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const Header = dynamic(()=> import("../components/header/Header"));
const Banner = dynamic(()=> import("../components/career/banner"));
const Opening = dynamic(()=> import("../components/career/opening"));
const Culture = dynamic(()=> import("../components/career/culture"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const MeetCrew = dynamic(()=> import("../components/company/meetCrew"));
const WhyWork = dynamic(()=> import("../components/contacts/whyWork"));
const Loader = dynamic(()=> import("../components/common/loader"));
const Stepper = dynamic(()=> import("../components/career/stepper"));
const InterviewProcess = dynamic(()=> import("../components/career/interviewProcess"));

function Carrer(props) {
   

   
  return (
    <>
      <Head>
        <title>
          Career at Brain Inventory | Best Software Development Company
        </title>
        <meta
          name="description"
          content="Looking for a career at Brain 
          Inventory? Seize the 
          opportunity to join the team of 
          top-notch software 
          professionals and start working
          on interesting projects!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Career at Brain 
Inventory | Best Software Development Company "
        />
        <meta
          property="og:description"
          content=" Looking for a 
career at Brain Inventory? Seize the opportunity to join the 
team of top-notch software professionals and start working 
on interesting projects!"
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta property="og:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/hr-1.jpg" />
        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="twitter:title"
          content=" Career at Brain Inventory 
| Best Software Development Company "
        />
        <meta
          property="twitter:description"
          content=" Looking for a 
career at Brain Inventory? Seize the opportunity to join the team of 
top-notch software professionals and start working on interesting 
projects!"
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Loader />
        <div className="relative second-component">
          <Header></Header>
          <Banner></Banner>
          <WhyWork></WhyWork>
          <Stepper></Stepper>
          <MeetCrew></MeetCrew>
          <Culture></Culture>
          <Newsletter></Newsletter>
          <InterviewProcess></InterviewProcess>
          <Opening></Opening>
          <KeepInTouch />
          <LocateUs />
          <Footer />
        </div>
    </>
  );
}

export default Carrer;
