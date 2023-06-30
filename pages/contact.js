import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(()=> import("../components/header/Header"));
const LocateUs = dynamic(()=> import("../components/common/locateUs"));
const LetsKick = dynamic(()=> import("../components/common/LetsKick"));
const Footer = dynamic(()=> import("../components/common/Footer"));
const Contact1 = dynamic(()=> import("../components/contacts/contact"));
const ContactBanner = dynamic(()=> import("../components/contacts/contactBanner"));
const Loader = dynamic(()=> import("../components/common/loader"));

function Contact(props) {
   
   
  return (
    <>
      <Head>
        <title>
          Contact Brain Inventory to Kickstart Your Digital Journey Today
        </title>
        
        <meta
          name="description"
          content="Contact Brain Inventory for 
          any service, requirement & 
          query. Get a free no obligation 
          consulting for your website, 
          software & App development 
          projects. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Contact Brain 
Inventory to Kick start Your Digital Journey Today "
        />
        <meta
          property="og:description"
          content=" Contact Brain 
Inventory for any service, requirement & query. Get a free 
no obligation consulting for your website, software & App 
development projects.
Contact us now."
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
        <meta property="twitter:image" content="https://braininventory.s3.us-east-2.amazonaws.com/images/Logobg.png" />
        <meta
          property="twitter:title"
          content=" Contact Brain Inventory 
to Kick start Your Digital Journey Today "
        />
        <meta
          property="twitter:description"
          content=" Contact Brain 
Inventory for any service, requirement & query. Get a free no 
obligation consulting for your website, software & App development
projects.
Contact us now."
        />
        <meta property="twitter:creator" content=" BrainInventory " />
        <meta property="twitter:site" content="BrainInventory" />
        <meta property="twitter:card" content="summary_large_image" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWMG4P2');`}}></script>
      </Head>
      <Loader />
        <div className="relative second-component">
          <div>
            <Header></Header>
            <ContactBanner></ContactBanner>
            <Contact1></Contact1>
            <LocateUs />
            <LetsKick />
            <Footer />
          </div>
        </div>
    </>
  );
}

export default Contact;
