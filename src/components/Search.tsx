import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [categories, setCategories] = useState({
    isSearch: true,
    isExperience: false,
  });
 const handleClick = (e) => {
  
}
  return (
    <div className=" w-full h-full flex items-center justify-center gap-2  flex-col ">
      <div className="flex xl:fixed top-0 mt-0 xl:mt-5 h-full gap-10 text-[22px] font-semibold  ">
        <h1  className="cursor-pointer hover:opacity-90 transition-opacity duration-200" onClick={handleClick}>
          Stays
        </h1>
        <h1 className="opacity-50 cursor-pointer hover:opacity-90 transition-opacity duration-200">
          Experiences
        </h1>
        <h1 className="opacity-50 cursor-pointer hover:opacity-90 transition-opacity duration-200">
          Online Experiences
        </h1>
      </div>
      {categories.isSearch &&
      <div className="w-max  mx-10 z-[20000] items-center border justify-between mb-5 shadow-md rounded-full flex gap-5 lg:gap-10">
        <div className="flex  h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200   ">
          <div className=" px-10 flex flex-col  group-hover:border-r-0 ">
            <h1>Where</h1>
            <p>Search Destiantions</p>
          </div>
        </div>
        <div className="flex  h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200  ">
          <div className=" px-10 flex flex-col border-l-2 group-hover:border-r-0 ">
            <h1>Check In</h1>
            <p>Add Dates</p>
          </div>
        </div>
        <div className="flex   h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200   ">
          <div className=" px-10 flex flex-col border-l-2 group-hover:border-r-0  ">
            <h1 className=" font-semibold ">Check Out</h1>
            <p className="text-slate-500 font-semibold">Add Dates</p>
          </div>
        </div>

        <div className="flex  h-full px-2 py-5 gap-10 w-max group justify-between transition-colors duration-200 rounded-full hover:bg-gray-200  ">
          <div className=" px-10 flex flex-col  group-hover:border-r-0 border-l-2 ">
            <h1>Who</h1>
            <p>Add guests</p>
          </div>
          <div className=" p-4 border rounded-full bg-red-500 hover:bg-red-600 hover:scale-105 duration-100 text-white  ">
            <IoSearch className="text-[21px] " />
          </div>
        </div>
      </div>
      }
    </div>
  );
}
