import React from "react";

export default function customer() {
  return (
    <div className="relative lg:pb-48">
      <div>
        <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/developers.png" className="w-full" />
      </div>
      <div className="container padding-left-all-section-1 lg:absolute lg:top-80 lg:left-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 bg-customer">
          <div className="p-8 pl-11 flex items-center">
            <h2 className="Gilroy-Bold text-3xl leading-10">
              100+ Satisfied Customers, including Fortune Organizations, Have
              Placed Their Confidence in Us
            </h2>
          </div>
          <div className="p-8 pl-11">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-1.png" className="w-customer" />
              </div>
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-2.png" className="w-customer" />
              </div>
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-3.png" className="w-customer" />
              </div>
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-4.png" className="w-customer" />
              </div>
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-5.png" className="w-customer" />
              </div>
              <div>
                <img src="https://braininventory.s3.us-east-2.amazonaws.com/images/c-6.png" className="w-customer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
