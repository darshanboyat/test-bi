// import React from "react";

// export default function Experienced() {
//   return (
//     <div className="2xl:lg:p-10  p-8 2xl:space-y-8 space-y-6">
//       <div className="container padding-left-all-section-1">
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-6">
//           <div>
//             <h1 className="Gilroy-Bold lg:text-6xl text-4xl leading-[4.5rem]">
//               Hire Experienced Angular JS Developer to Upscale Your Development
//             </h1>
//             <p className="Gilroy-Light text-lg opacity-60 pt-6">
//               Angular is the leading JavaScript framework for creating timely
//               solutions. It has quickly become the most preferred programming
//               language amongst the developers and the business community. If
//               using a JavaScript framework is part of your application
//               development, then you can’t do better than Angular. A great bonus
//               is that they’re cost-effective while delivering fantastic results
//               – perfect when you’re on a tight budget or are working with
//               limited manpower. Even better, Angular can be integrated with any
//               existing JSP or PHP application so no need to hire separate teams
//               for each of those technologies!
//             </p>
//             <p className="Gilroy-Light text-lg opacity-60 pt-6">
//               So the need is to hire Angularjs developers who are worthy and
//               well-experienced, who offers better services at an affordable
//               price. However, you are just in the right place as Brain Invetory
//               will help you develop your robust and well-secure dynamic web
//               applications. The company ensures the quality and the time-saving
//               processing without any hiring fee.
//             </p>
//           </div>
// <div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">AngularJS Customization</h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       Angular JS is structural framework of JavaScript from AngularJS
//       we started to use data binding and sharing between different
//       pages effectively, we get flexibility to customize the features
//       which are provided by Angular JS like directives, controllers,
//       views as it follows MVC model this all ultimately helps us in
//       reducing the repetitive code, create dynamic and efficient
//       websites.
//     </p>
//   </div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">
//       AngularJS Portal Development
//     </h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       When talking about developing portals using Angular JS it has
//       many advantages because it helps us to create portals which are
//       scalable and optimised in comparison to the way static websites
//       which we used to build before Angular JS came, we now do the DOM
//       manipulations, form validations, API calls with a minimal code
//       and in reusable manner.
//     </p>
//   </div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">
//       Single Page Application Development
//     </h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       SPA which is state of the art in the field of website
//       development, earlier we used to click on the hyperlinks and wait
//       for the page to redirect and load but now in modern websites
//       which are build as SPAs will not make you feel like website is
//       loading or we are redirecting to other pages.
//     </p>
//   </div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">
//       AngularJS Support & Maintenance
//     </h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       Angular was introduced by Google and every year it releases two
//       version of angular which means we are having quite a good
//       support from the community now to support us to bring new
//       features to develop website in more efficient ways, many of the
//       large-scale websites have been developed in Angular.
//     </p>
//   </div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">UI/UX Development</h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       UI and UX are important part of the website development
//       lifecycle process it helps in getting the visualisation appear
//       on the screens. User Interface is all about the how the website
//       is going to look like with all the themes, colours, images and
//       positioning of the contents and User Experience is about the
//       working of the website with UI.
//     </p>
//   </div>
//   <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4">
//     <h3 className="Gilroy-Bold text-3xl">
//       Web & API service integration
//     </h3>
//     <p className="Gilroy-Light text-lg opacity-60 pt-4">
//       It is the place where front-end and back-end does the
//       communication, where front-end requests something and back-end
//       gives the response, also saves the data in database and allows
//       us to see the data on the websites.
//     </p>
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Scroll.module.css";

function StickyContainer({ left, right, title, subhead1, subhead2, card }) {
  const [isSticky, setIsSticky] = useState(false);
  const stickyContainerRef = useRef(null);
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const stickyContainer = stickyContainerRef.current;
      const scrollableContainer = scrollableContainerRef.current;
      const { bottom: stickyContainerBottom } =
        stickyContainer.getBoundingClientRect();
      const { top: scrollableContainerTop } =
        scrollableContainer.getBoundingClientRect();
      setIsSticky(
        stickyContainerBottom > window.innerHeight &&
          scrollableContainerTop < window.innerHeight
      );
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="2xl:lg:p-10  p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-6"></div>
          <div className={`${styles.container}`}>
            <div
              ref={stickyContainerRef}
              className={`${styles.stickyContainer} ${
                isSticky ? styles.sticky : ""
              }`}
            >
              <div>
                <h1 className="Gilroy-Bold lg:text-6xl text-4xl lg:leading-[4.5rem] w-full">
                  {title}
                </h1>
                <p className="Gilroy-Light text-lg opacity-60 pt-6 w-full">
                  {subhead1}
                </p>
                <p className="Gilroy-Light text-lg opacity-60 pt-6">
                  {subhead2}
                </p>
              </div>
            </div>
            <div
              ref={scrollableContainerRef}
              className={styles.scrollableContainer}
            >
              <div>
                {card.map(({head, content}, index) => (
                  <div className="bg-technology lg:p-10 p-6 lg:ml-8 mb-4" key={index}>
                    <h3 className="Gilroy-Bold text-3xl">{head}</h3>
                    <p className="Gilroy-Light text-lg opacity-60 pt-4">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StickyContainer;