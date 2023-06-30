import Marquee from "react-easy-marquee";

const array = new Array(3).fill(null);

const HireMarquee = ({title}) => {
  return (
    <div className="lg:h-auto flex flex-col justify-center my-0">
      <Marquee
        duration={25000}
        background="#fafafa00"
        reverse={true}
        height="200px"
      >
        {array.map((el, index) => (
          <div
            key={index}
            className="flex space-x-10 mr-10 2xl:text-2xl text-xl items-center"
          >
            <span className="text-6xl Gilroy-Bold">Brain Inventory</span>

            <span className="text-6xl Gilroy-Bold"> Brain Inventory</span>
            <span className="text-6xl Gilroy-Bold">Brain Inventory</span>
          </div>
        ))}
      </Marquee>
      <div className="border-y"></div>
      <Marquee duration={20000} background="#fafafa00" height="250px">
        <div className="flex space-x-10 mr-10 2xl:text-2xl text-xl items-center">
          {array.map((el, index) => (
            <div
              key={index}
              className="flex space-x-10 mr-10 2xl:text-2xl text-xl items-center"
            >
              <span className="text-6xl Gilroy-Bold">{title}</span>

              <span className="text-6xl Gilroy-Bold"> {title}</span>
              <span className="text-6xl Gilroy-Bold">{title}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HireMarquee;
