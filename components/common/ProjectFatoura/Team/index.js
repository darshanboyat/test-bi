import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Shivam Yadav",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -2.png",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Ali Asgar Dhariwala",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -1.png",
    role: "Software Engineer",
  },
  {
    id: 3,
    name: "Asim Sheikh",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -3.png",
    role: "Software Engineer",
  },
  {
    id: 4,
    name: "Pritesh Patil",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -4.png",
    role: "Quality Analyst",
  },
  {
    id: 5,
    name: "Rimjhim Kasera",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/Group -5.png",
    role: "UI/UX Design",
  },
];

const TeamSlider = () => {
  return (
    <div className="team-slider py-12 px-8 ">
      <h2 className="text-white text-[2rem] lg:text-6xl font-bold my-4 lg:my-24 text-center">
        Meet the Team
      </h2>
      <div className="flex flex-wrap sm:flex-nowrap overflow-x-scroll scrollbar-thin project-team pl-[20vw] lg:pl-0">
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
