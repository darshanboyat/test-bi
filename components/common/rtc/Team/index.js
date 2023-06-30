import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sidra Shahid",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group -1.png",
    role: "Software Architecture",
  },
  {
    id: 2,
    name: "Deepak Dangi",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6438.png",
    role: "Sr. Software Engineer",
  },
  {
    id: 3,
    name: "Shivam Yadav",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6300.png",
    role: "Software Engineer",
  },
  {
    id: 4,
    name: "Hussain Ali",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6429.png",
    role: "Sr. Software Engineer",
  },
  {
    id: 5,
    name: "Krishna Agrawal",
    image: "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/Group 6420.png",
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
