import React from 'react'

const Index = () => {
  return (
    <div className='max-w-full flex flex-col items-center'>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Challenges</h1>
            <p className='opacity-50 text-lg'>As the project is a blockchain foundation, the team required a solid understanding of blockchain principles. The implementation involved the creation of a private blockchain utilizing the Hyperledger Fabric framework. This introduced a completely new technological landscape for the team to navigate. Another notable challenge was the implementation of PDF document signing using signing certificates. Maintaining multiple signatures while ensuring the authenticity of the document posed significant complexities. Furthermore, the associated information had to be appropriately displayed in the user interface, requiring meticulous integration and synchronization. As blockchain operates on a decentralized platform, scalability and data preservation were critical considerations. It was essential to establish mechanisms for seamless upscaling and downscaling of the platform without compromising data integrity. Additionally, deploying new chaincodes necessitated thorough coordination among connected peers to ensure the updated chaincode was uniformly adopted across the network.</p>
        </div>
        <div className="bg-[#1A1A1A] w-[90%] lg:w-3/4 text-center rounded-3xl p-2 lg:p-12 my-8">
            <h1 className='text-3xl lg:text-5xl py-8 challeges__card__heading'>Solution</h1>
            <p className='opacity-50 text-lg'>Overcoming these challenges required the development team to possess a comprehensive understanding of blockchain architecture, cryptography, and distributed systems, enabling them to devise effective solutions that ensured a robust and scalable outcome. To tackle the challenge of understanding blockchain technology, the team underwent extensive training utilizing available resources. They also dedicated ample time to individual research, conducting in-depth exploration of the technology and its intricacies. Additionally, the team implemented multiple proofs-of-concept (POCs) to gain hands-on experience, allowing them to solidify their understanding and pave the way for the development of the final product. Addressing the complexities associated with PDF document signing involved a meticulous study of the document's architecture and the underlying principles of document signing. This deep dive provided invaluable insights, guiding the team towards informed decision-making. Furthermore, the team explored obtaining Digital Signer Certificates (DSCs) from various vendors, thoroughly comprehending the process of certificate issuance and usage to ensure seamless integration within the solution. To achieve scalability and orchestration, the team leveraged Docker and Docker Swarm. These containerization technologies facilitated the seamless management and control of multiple containers across virtual machines. By utilizing this infrastructure, the team successfully scaled the platform, accommodating an increased number of organizations and peers participating in the transaction record process.</p>
        </div>
    </div>
  )
}

export default Index