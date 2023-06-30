import React from 'react';

function Card() {
    return (
        <div className="bg-[#1A1A1A] rounded-3xl shadow-lg py-8 md:flex md:justify-between mx-12 lg:mx-24">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-white text-center mb-8">Tech Stacks Used</h2>
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/hvh.png" className="tech_img"/>
                        <p>PHP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/2.png" className="tech_img"/>
                        <p>MySQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/3.png" className="tech_img"/>
                        <p>Javascript</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/jhj.png" className="tech_img"/>
                        <p>Curl</p>
                    </div>
                </div>
                  
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/fddf.png" className="tech_img"/>
                        <p>AWS SDK</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/kk.png" className="tech_img"/>
                        <p>Google Places API</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/MNBNM.png" className="tech_img"/>
                        <p>IMAP</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/bnv.png" className="tech_img"/>
                        <p>Widgety API</p>
                    </div>
                </div>
            
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/nbb.png" className="tech_img"/>
                        <p>Flight Stats API</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/BVVVD.png" className="tech_img"/>
                        <p>Stripe</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/IJMTGBIK.png" className="tech_img"/>
                        <p>AWS</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/KJHNGBFVCX.png" className="tech_img"/>
                        <p>Microservices</p>
                    </div>
                    
                </div>
            
                <div className="flex flex-wrap md:flex-no-wrap lg:justify-between justify-center lg:px-48 py-12">
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/rgdgfg.png" className="tech_img"/>
                        <p>Docker</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/MNBVC.png" className="tech_img"/>
                        <p>Kubernetes</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/okska.png" className="tech_img"/>
                        <p>Project Expedition API</p>
                    </div>
                    <div className="flex flex-col items-center lg:pt-2">
                        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/ikhjh.png" className="tech_img"/>
                        <p>Facebook SDK</p>
                    </div>
                    
                </div>
            
            </div>
        </div>
    );
}

export default Card;
