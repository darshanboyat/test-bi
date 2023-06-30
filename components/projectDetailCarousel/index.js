import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeIndex === images.length * 2) {
      // wrap around to the beginning when we reach the end of the duplicated images array
      setActiveIndex(0);
      containerRef.current.scrollTo({
        left: 0,
        behavior: "auto",
      });
    }
  }, [activeIndex, images.length]);

  const handlePrev = () => {
    if (activeIndex === 0)
      setActiveIndex(activeIndex + duplicatedImages.length);
    setActiveIndex(activeIndex - 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex - 1) * containerRef.current.offsetWidth -
        (activeIndex - 1) * 50, // subtract 10vw for each previous image
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (activeIndex === duplicatedImages.length - 1) setActiveIndex(0);
    setActiveIndex(activeIndex + 1);
    containerRef.current.scrollTo({
      left:
        (activeIndex + 1) * containerRef.current.offsetWidth -
        (activeIndex + 1) * 50, // subtract 10vw for each previous image
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-12">
      <div
        className="overflow-x-scroll  scrollbar-thin whitespace-nowrap flex project-detail-carousel"
        ref={containerRef}
        style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <div
            className="inline-block m-2 lg:m-8 min-w-[70vw] lg:min-w-[50vw]"
            key={image.id}
          >
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="rounded-3xl"
              />
          </div>
        ))}
      </div>
      <span className="absolute hidden left-[97%] animate-ping top-[50%] lg:inline-flex items-center rounded-full text-3xl px-2">
        <MdKeyboardArrowRight />
      </span>
    </div>
  );
};

export default ImageSlider;
