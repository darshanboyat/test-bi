import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Krishna Agrawal",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6420.png",
    role: "Sr. UI/UX Designer",
  },
  {
    id: 2,
    name: "Pradyumna Garg",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6429.png",
    role: "Software Architecture",
  },
  {
    id: 3,
    name: "Gautam Patil",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group -1.png",
    role: "Software Engineer",
  },
  {
    id: 4,
    name: "Sohail Khan",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/virifi/Group 6438.png",
    role: "Software Architecture",
  },

];

const TeamSlider = () => {
  return (
    <div className="team-slider py-12 px-8 max-w-full">
      <h2 className="text-white text-[2rem] lg:text-6xl font-bold my-4 lg:my-24 text-center">
        Meet the Team
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center overflow-x-scroll scrollbar-thin project-team ">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-full flex justify-center mb-4 "
          >
            <div className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="w-8/12 h-auto"
              />
              <h3 className="text-white font-bold text-lg mt-2">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
