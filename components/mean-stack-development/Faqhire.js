import React, { Component } from "react";

function FaqHire({faq}) {
  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 mobile-view">
      <div className="container padding-left-all-section">
        <h2 className="text-4xl pb-8 Gilroy-Bold">faq&rsquo;s</h2>
        <div>
          {faq.map((el) => {
            return (
              <div key={el.id} className="collapse bg-opening mb-6">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  <div className="md:flex block justify-between items-center">
                    <div>
                      <h2 className="text-2xl text-white Gilroy-Bold">
                        {el.title}
                      </h2>
                    </div> 
                    <div className="flex md:block my-4 md:my-0">
                      <button onClick={() => collapsed(el.id)} className="">
                        <img
                          src="https://braininventory.s3.us-east-2.amazonaws.com/images/faq-arrow.svg"
                          className="cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="collapse-content flex">
                  <div>
                    <p>{el.description}</p>
                  </div>
                  <div></div>
                </div>
              </div>

              // <div className='mb-6  border-color-purple border-b-2 pb-6 flex justify-between items-center'>
              //     <h2 className='text-xl text-white Gilroy-Bold '>{el.title}</h2>
              //     <img src='https://braininventory.s3.us-east-2.amazonaws.com/images/faq-arrow.svg' className='cursor-pointer' />
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FaqHire;
