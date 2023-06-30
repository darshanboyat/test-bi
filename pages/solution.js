import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const ChooseApp = dynamic(()=> import("../components/mobilePages/chooseApp"));
const SolutionLanguage = dynamic(()=> import("../components/solution/solutionLanguage"));
const BigHeadingScroll = dynamic(()=> import("../components/common/BigHeadingScroll"));
const Partner = dynamic(()=> import("../components/solution/partner"));
const SolutionBanner = dynamic(()=> import("../components/solution/solutionBanner"));
const SolutionServices = dynamic(()=> import("../components/solution/solutionServices"));
const Project = dynamic(()=> import("../components/solution/project"));
const KeepInTouch = dynamic(()=> import("../components/common/keepInTouch"));
const Header = dynamic(()=> import("../components/header/Header"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const LetsKick = dynamic(()=> import("../components/common/LetsKick"));
const Newsletter = dynamic(()=> import("../components/career/Newsletter"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const Loader = dynamic(()=> import("../components/common/loader"));

function Solution(props) {
   
   
  return (
    <>
      <Head>
        <title>
          Get Best IT Solutions with Expert Software Development Company
        </title>
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header />
            <SolutionBanner />
            <SolutionServices />
            <Project />
            <ChooseApp />
            <Newsletter />
            <SolutionLanguage />
            <Partner />
            <BigHeadingScroll
              text={"Perfectly balanced as all things should be."}
            />
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </div>
        </div>
    </>
  );
}

export default Solution;
