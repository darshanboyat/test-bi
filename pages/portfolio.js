import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
// import Header from "../components/projectHeader";
const Header = dynamic(()=> import("../components/header/Header"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const Loader = dynamic(()=> import("../components/common/loader"));
const ProjectSectionOne = dynamic(()=> import("../components/projectSectionOne"));
const ProjectSectionTwo = dynamic(()=> import("../components/projectSectionTwo"));
const ProjectCards = dynamic(()=> import("../components/projectCard"));
const BlogArticle = dynamic(()=> import("../components/common/BlogArticle"));
const ContactForm = dynamic(()=> import("../components/common/ContactForm"));
const LocateUs = dynamic(()=> import("../components/common/projectLocate"));
const ContactCard = dynamic(()=> import("../components/common/projectContactCard.jsx"));

function HireAangularJsDeveloper(props) {
  return (
    <>
      <Head>
        <title>Brain Inventory | Software Development Services</title>
        <meta
          name="description"
          content="Brain Inventory is a leading iOS app development company that offers custom iOS app development services for entrepreneurs & small businesses. Contact us today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Custom iOS 
Development | Angular App Development Company"
        />
        <meta
          property="og:description"
          content=" Brain 
Inventory is the leading iOS Development Company 
with a top-notch iOS Developers team having 
profound expertise in iOS Development. Contact us 
today.   "
        />
        <meta
          property="og:url"
          content=" 
https://braininventory.in/"
        />
        <meta property="og:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/I-1.png" />

        <meta
          property="twitter:domain"
          content="https://braininventory.in/ "
        />
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="twitter:title"
          content=" Custom iOS 
Development | Angular App Development Company"
        />
        <meta
          property="twitter:description"
          content=" Brain Inventory is 
the leading iOS Development Company with a top-notch 
iOS Developers team having profound expertise in iOS 
Development. Contact us today. "
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
          <Header />
      <div className="container project-bg pt-12">
        <div>
          <ProjectSectionOne />
          <ProjectCards />
          <ProjectSectionTwo />
          {/* <ProjectCards /> */}
          <BlogArticle />
          <ContactForm className="pl-24"/>
          <LocateUs />
          <div>
            {/* <ContactCard /> */}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HireAangularJsDeveloper;
