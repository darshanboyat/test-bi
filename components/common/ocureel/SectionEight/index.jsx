import React from 'react';

function Card() {
    return (
        <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-24">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-white text-center mb-8">Tech Stacks Used</h2>
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/CCVXV.png" className="tech_img"/>
                        <p>React Native</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/BFVDC.png" className="tech_img"/>
                        <p>Firebase</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/GNBVDS.png" className="tech_img"/>
                        <p>NoSQL</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/jhbgf.png" className="tech_img"/>
                        <p>Docker</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
