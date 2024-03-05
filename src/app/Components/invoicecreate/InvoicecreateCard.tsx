import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
const InvoicecreateCard = () => {
  return (
    <div className="rounded-lg px-2 lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
      <div className="flex flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mx-4">
          <label htmlFor="left-select" className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2">
            Select person
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
              placeholder="Select the person to whom you will send this"
            />
            <HiOutlineChevronDown className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-4">
          <label htmlFor="right-select" className="text-start text-[.6rem] sm:text-sm text-[#777777] block mb-2">
          Invoice Number
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "
            />
           </div>
        </div>
      </div>

          {/*  traetment */}


          <div className="flex py-2 flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mx-4">
          <label htmlFor="left-select" className="text-start text-[.6rem] sm:text-sm text-[#777777] px-2 block mb-2">
          Add a Treatment
          </label>
          <div className="relative">
            <input
              id="custom-input"
              type="text"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
                sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md "  placeholder="Select a treatment"
            />
              <HiOutlineChevronDown className="absolute top-1/2 right-1 sm:right-4 transform -translate-y-1/2 h-2 w-2 sm:h-4 sm:w-4 text-gray-400 pointer-events-none" />
         </div>
        </div>

        <div className="w-full md:w-1/2 mx-4">
          <label htmlFor="right-select" className="text-start text-[.6rem] sm:text-sm text-[#777777] block mb-2">
           Select Date
            </label>
          <div className="relative">
            <input
              id="custom-input"
              type="date"
              className="w-full  px-2 sm:px-4 py-2 text-[.4rem] text-[#777777] border
              sm:text-[.6rem] md:text-[.8rem] border-gray-300 rounded-md " 
            />
           </div>
        </div>
      </div>

    </div>
  );
};

export default InvoicecreateCard;
