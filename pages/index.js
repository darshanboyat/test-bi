import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/header/Header";
const HomeSectionOne = dynamic(() => import("../components/home/HomeSection-1"));
const HomeSectionThree = dynamic(() =>import("../components/home/HomeSection-3"));
const HomeSectionFour = dynamic(() =>import("../components/home/HomeSection-4"));
// const HomeSectionFive = dynamic(() =>import("../components/home/HomeSection-5"));
const HomeSectionSix = dynamic(() =>import("../components/home/HomeSection-6"));
const HomeSectionTen = dynamic(() =>import("../components/home/HomeSection-10"));
const HomeSectionEight = dynamic(() =>import("../components/home/HomeSection-8"));
const HomeSectionNine = dynamic(() =>import("../components/home/HomeSection-9"));
const HomeSectionEleven = dynamic(() =>import("../components/home/HomeSection-11"));
const KeepInTouch = dynamic(() => import("../components/common/keepInTouch"));
const LocateUs = dynamic(() => import("../components/common/locateUs"));
const LetsKick = dynamic(() => import("../components/common/LetsKick"));
const HireDedicatedDeveloper = dynamic(() => import("../components/common/HireDedicatedDeveloper"));
const Footer = dynamic(() => import("../components/common/Footer"));
import Loader from "../components/common/loader";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [position, setPostion] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 3000) {
        setPostion(true);
      }
    });
  });

  return (
    <>
      <Head>
        <title>
          Custom Software Development Company | Staff Augmentation - Brain
          Inventory
        </title>
        <meta
          name="google-site-verification"
          content="/google0f5d76b9c6c1d8b3.html"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software Development Company | Staff Augmentation - Brain Inventory"
        />
        <meta
          property="og:description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="og:url" content="https://braininventory.in/" />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/discovery.png"
        />
        <meta property="twitter:domain" content="https://braininventory.in/ " />
        <meta
          property="twitter:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"
        />
        <meta
          property="twitter:title"
          content="Custom Software Development Company | Staff Augmentation - Brain Inventory"
        />
        <meta
          property="twitter:description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta name="p:domain_verify" content="/pinterest-551ed.html" />
        <meta name="p:domain_verify" content="/googlec59025ad92b5fc4c.html" />
        <meta
          name="description"
          content="Brain Inventory is a leading custom Software Development Company offering Staff Augmentation, IT Consulting, Software, Web, and App Development Services across the globe."
        />
        <meta property="twitter:creator" content=" Brain Inventory " />
        <meta property="twitter:site" content=" BrainInventory" />
        <meta
          property="twitter:card"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://braininventory.in" />
      </Head>
      {/* <Loader /> */}
      <div className="relative">
        <Header></Header>
        <HomeSectionOne></HomeSectionOne>
        <HomeSectionThree></HomeSectionThree>
        <HomeSectionFour></HomeSectionFour>
        <HireDedicatedDeveloper></HireDedicatedDeveloper>
        {/* <HomeSectionFive></HomeSectionFive> */}
        {position && (
          <>
            <HomeSectionSix></HomeSectionSix>
            <HomeSectionEight></HomeSectionEight>
            <HomeSectionNine></HomeSectionNine>
            <HomeSectionTen></HomeSectionTen>
            <HomeSectionEleven></HomeSectionEleven>
            <KeepInTouch />
            <LocateUs />
            <LetsKick />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
