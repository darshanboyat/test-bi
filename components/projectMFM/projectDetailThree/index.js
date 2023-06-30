import React from "react";
import PrajectBranding from "./ProjectBranding.js";

const Index = ({text, image}) => {
  return (
    <div>
      <PrajectBranding text={text}/>
      <div className="relative flex flex-col items-center py-8">
        <img
          src={image}
          alt="Image"
          className="w-5/6 object-cover shadow-[3px 6px 50px white]"
        />
      </div>
    </div>
  );
};

export default Index;
