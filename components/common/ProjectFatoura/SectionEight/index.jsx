import React from 'react';

function Card() {
    return (
        <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-24">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-white text-center mb-8">Tech Stacks Used</h2>
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/6.png" className="tech_img"/>
                        <p>Angular</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/7.png" className="tech_img"/>
                        <p>NodeJs</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/8.png" className="tech_img"/>
                        <p>MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/9.png" className="tech_img"/>
                        <p>ExpressJs</p>
                    </div>
                    <div className="flex flex-col items-center pt-6">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/fatoura/10.png" className="tech_img scale-[0.7]"/>
                        <p>AWS EC2</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
