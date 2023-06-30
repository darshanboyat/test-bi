import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Shivam Singh",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group -1.png",
    role: "Sr. Software Architecture",
  },
  {
    id: 2,
    name: "Shubham Patidar",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group 6300.png",
    role: "Mobile Developer",
  },
  {
    id: 3,
    name: "Pritesh Patil",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group 6301.png",
    role: "Quality Analyst",
  },
  {
    id: 4,
    name: "Darshan Boyat",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group -2.png",
    role: "Jr. Software Engineer",
  },
  {
    id: 5,
    name: "Krishna Agrawal",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group 6302.png",
    role: "Sr. UI/UX Designer",
  },
];

const TeamSlider = () => {
  return (
    <div className="team-slider py-12 px-8 ">
      <h2 className="text-white text-[2rem] lg:text-6xl font-bold my-4 lg:my-24 text-center">
        Meet the Team
      </h2>
      <div className="flex flex-wrap sm:flex-nowrap overflow-x-scroll scrollbar-thin project-team lg:pl-0">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-full sm:w-auto sm:flex-none mb-4  -px-8"
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
