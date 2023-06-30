import React from 'react';
import Card from './Card';

const MyComponent = () => {
  const projects = [
    {title: "Numetric.work", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/Numetric.mp4", poster:"https://braininventory.s3.us-east-2.amazonaws.com/images/project/Image 2.png", link: "/project/numetric"},
    {title: "Bloomia", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/Bloomia.mp4", poster: "https://braininventory.s3.us-east-2.amazonaws.com/images/Bloomia-Thumbnail+(1).png", link: "/project/bloomia"},
    {title: "My Fit Mantra", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/MFM.mp4", poster: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -3.png", link: "/project/my-fit-mantra"},
    {title: "Virifi", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/virifi.mp4", poster: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -2.png", link: "/project/virifi"}, 
    {title: "Fatoura", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/fatoura.mp4", poster: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -2.png", link: "/project/fatoura"}, 
    {title: "Revolution Travel CRM", subtitle: "UI/UX Design, Custom Software Development.", src:"https://braininventory.s3.us-east-2.amazonaws.com/videos/RTC2.mp4", poster: "https://braininventory.s3.us-east-2.amazonaws.com/images/project/Screenshot -2.png", link: "/project/revolution-travel-crm"}, 
  ]
  return (
    <div className='flex flex-col lg:flex-row lg:flex-wrap px-0 items-center lg:px-12'>
      {projects.map((project, index) => (<Card
        image={project.src}
        title={project.title}
        subtitle={project.subtitle}
        number={index+1}
        link={project.link}
        poster={project.poster && project.poster}
      />))}
    </div>
  );
};

export default MyComponent;

