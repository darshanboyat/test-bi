// import React from "react";

// export default function Hire() {
//   return (
//     <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
//       <div className="container padding-left-all-section-1 relative">
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
//           <div className="">
//             <h1 className="Gilroy-Bold lg:text-6xl text-4xl lg:leading-[4.5rem]">
//               Why Hire Angular JS Developers from Brain inventory
//             </h1>
//           </div>
//           <div>
//             <div className="bg-technology p-10 lg:ml-8 mb-4">
//               <h3 className="Gilroy-Bold text-3xl">Extensive Experience</h3>
//               <p className="Gilroy-Light text-lg opacity-60 pt-4">
//                 Gaining hands-on experience with top-tier AngularJS libraries,
//                 such as Angular Materials, Angular Google Maps, NG-Bootstrap,
//                 NGX-Bootstrap, Prime NG, and RxJS is highly beneficial. As a
//                 developer working in the field of front-end development, you
//                 have to learn the basics of front-end development in order to
//                 build applications for different platforms.
//               </p>
//             </div>
//             <div className="bg-technology p-10 lg:ml-8 mb-4">
//               <h3 className="Gilroy-Bold text-3xl">
//                 Flexible Engagement Models
//               </h3>
//               <p className="Gilroy-Light text-lg opacity-60 pt-4">
//                 Instead of working on unwanted rigid and strict parameters, we
//                 offer flexibility to our clients to select from different
//                 engagement and hiring models.
//               </p>
//               <p className="Gilroy-Light text-lg opacity-60">
//                 Our team is made up of professionals with a wide range of
//                 expertise and experience, who work together as a team to provide
//                 you with a high-quality service.
//               </p>
//             </div>
//             <div className="bg-technology p-10 lg:ml-8 mb-4">
//               <h3 className="Gilroy-Bold text-3xl">Maintenance and Support</h3>
//               <p className="Gilroy-Light text-lg opacity-60 pt-4">
//                 Our dedicated Angular developers extend professional
//                 maintenance. support to ensure your web solutions are always
//                 up-to-date and running. Our team of professionals know the ins
//                 and outs of Angular, and will provide you with the best service
//                 possible. We can help you build your project from scratch or
//                 modify existing code, depending on what you need.
//               </p>
//             </div>
//             <div className="bg-technology p-10 lg:ml-8 mb-4">
//               <h3 className="Gilroy-Bold text-3xl">Cost-Effective Solutions</h3>
//               <p className="Gilroy-Light text-lg opacity-60 pt-4">
//                 Brain Inventory understands your business needs, and we’re here
//                 to help you meet them. We offer variety of engagement models to
//                 choose from, tailored to your style, budget, timeline, and
//                 deliverables. This guarantees that all objectives are achieved
//                 with consistent process. We offer a variety of packages to fit
//                 your budget.
//               </p>
//             </div>
//             <div className="bg-technology p-10 lg:ml-8 mb-4">
//               <h3 className="Gilroy-Bold text-3xl">On time Delivery</h3>
//               <p className="Gilroy-Light text-lg opacity-60 pt-4">
//                 At Brain Iventory, we believe that every business is unique, and
//                 that’s why we design and develop each project with a
//                 personalized approach. Our team of designers and developers
//                 leverage cutting-edge technologies and agile methodologies to
//                 deliver 95% of the projects on time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import styles from "../../styles/HireScroll.module.css";

function Hire({ title, card, subhead }) {
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
      <div className="2xl:lg:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section-1">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-6"></div>
          <div className={`${styles.container}`}>
            <div
              ref={stickyContainerRef}
              className={`${styles.stickyContainer} ${
                isSticky ? styles.sticky : ""
              }`}
            >
              <div className="">
                <h1 className="Gilroy-Bold lg:text-6xl text-4xl lg:leading-[4.5rem]">
                  {title}
                </h1>
                <p className="text-lg font-thin opacity-60 lg:mt-4">{subhead}</p>
              </div>
            </div>
            <div
              ref={scrollableContainerRef}
              className={styles.scrollableContainer}
            >
              <div>
                {card.map((ele, index) => (
                  <div className="bg-technology p-10 lg:ml-8 mb-4" key={index}>
                    <h3 className="Gilroy-Bold text-3xl">
                      {ele.head}
                    </h3>
                    <p className="Gilroy-Light text-lg opacity-60 pt-4">
                      {ele.content}
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

export default Hire;
