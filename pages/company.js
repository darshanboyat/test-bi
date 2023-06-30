import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header =  dynamic(()=> import("../components/header/Header"));
const BigHeadingScroll =  dynamic(()=> import("../components/common/BigHeadingScroll"));
const KeepInTouch =  dynamic(()=> import("../components/common/keepInTouch"));
const LocateUs =  dynamic(()=> import("../components/common/locateUs"));
const LetsKick =  dynamic(()=> import("../components/common/LetsKick"));
const Footer =  dynamic(()=> import("../components/common/Footer"));
const Video =  dynamic(()=> import("../components/company/video"));
const Summary =  dynamic(()=> import("../components/company/summary"));
const Mission =  dynamic(()=> import("../components/company/mission"));
const Ethos =  dynamic(()=> import("../components/company/ethos"));
const Experience =  dynamic(()=> import("../components/company/experience"));
const Choose =  dynamic(()=> import("../components/company/choose"));
const MeetCrew =  dynamic(()=> import("../components/company/meetCrew"));
const Process =  dynamic(()=> import("../components/company/process"));
const Loader =  dynamic(()=> import("../components/common/loader"));

function Company() {
   
   
  return (
    <>
      <Head>
        <title>
          Custom Software & App Development | Web Development Company - Brain
          Inventory
        </title>
        <meta
          name="description"
          content="Brain Inventory is a top-notch 
          IT Software & Staff 
          Augmentation company that 
          started with a clear vision to 
          build amazing products for 
          clients worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom Software & 
App Development | Web Development Company - Brain 
Inventory "
        />
        <meta
          property="og:description"
          content=" Brain 
Inventory is a top-notch IT Software & Staff Augmentation 
company that started with a clear vision to build amazing 
products for clients worldwide."
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta property="og:image" content=" " />
        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Sufiyan1.png" />
        <meta
          property="twitter:title"
          content=" Custom Software & App 
Development | Web Development Company - Brain Inventory "
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
a top-notch IT Software & Staff Augmentation company that started
with a clear vision to build amazing products for clients 
worldwide."
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header></Header>
            <Video></Video>
            <Summary></Summary>
            <Mission></Mission>
            <Ethos></Ethos>
            {/* <Process></Process> */}
            <Experience></Experience>
            <MeetCrew></MeetCrew>
          </div>
          <Choose></Choose>
          <BigHeadingScroll
            text={"Perfectly balanced as all things should be."}
          />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
    </>
  );
}

export default Company;
