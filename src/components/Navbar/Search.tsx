import  { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { format } from "date-fns";
import NavbarDatePicker from "./NavbarDatePicker";
import NavbarRegionModal from "./NavbarRegionModal";
import { calendarProps } from "../../types/types";


export default function Search() {
  const [days, setDays] = useState(3);
  const [calendarData, setCalendarData] = useState<calendarProps >();
  const [categories, setCategories] = useState({
    isSearch: true,
    isExperience: false,
  });
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showRegions, setShowRegions] = useState(false);

  const handleDates = () => {
    try {
      if (calendarData) {
        const calcStartDate = format(calendarData?.startDate || 0 , "dd/MM/yyyy");
        setStartDate(calcStartDate);
        const calcEndDate = format(calendarData?.endDate || 0, "dd/MM/yyyy");
        setEndDate(calcEndDate);
      } else {
        console.log("Something Went Wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (showDatePicker) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".navbar-date-picker")) {
          setShowDatePicker(false);
        }
        console.log("Closed");
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showDatePicker]);
  useEffect(() => {
    if (showRegions) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".region")) {
          setShowRegions(false);
        }
        console.log("Closed");
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showRegions]);

  useEffect(() => {
    handleDates();
  }, [calendarData]);

  return (
    <div className=" w-full h-full flex items-center justify-center gap-2  flex-col ">
      <div className="flex xl:fixed top-0 mt-0 xl:mt-5 h-full gap-10 text-[22px] font-semibold  ">
        <h1
          className="cursor-pointer hover:opacity-90 transition-opacity duration-200 h-max"
        >
          Stays
        </h1>
        <h1 className="opacity-50  hover:opacity-90 transition-opacity duration-200 cursor-not-allowed h-max">
          Experiences
        </h1>
        <h1 className="opacity-50 cursor-not-allowed hover:opacity-90 transition-opacity duration-200 h-max">
          Online Experiences
        </h1>
      </div>
      {categories.isSearch && (
        <div className="w-max  mx-10 relative z-[20000] items-center border justify-between mb-5 shadow-md rounded-full flex gap-5 lg:gap-10">
          <div
            className="flex  h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200 region  "
            onClick={() => setShowRegions(true)}
          >
            <div className=" px-10 flex flex-col  group-hover:border-r-0 ">
              <h1>Where</h1>
              <p>Search Destiantions</p>
            </div>
          </div>
          {showRegions && <NavbarRegionModal />}

          <div
            className="flex  h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200 navbar-date-picker  "
            onClick={() => setShowDatePicker(true)}
          >
            <div className=" px-10 flex flex-col border-l-2 group-hover:border-r-0 ">
              <h1>Check In</h1>
              <p>{startDate ? startDate : "Add Dates"}</p>
            </div>
          </div>
          <div
            className="flex relative h-full px-2 py-5 gap-10 w-max group  transition-colors duration-200 rounded-full hover:bg-gray-200 navbar-date-picker  "
            onClick={() => setShowDatePicker(true)}
          >
            <div className=" px-10 flex flex-col border-l-2 group-hover:border-r-0  ">
              <h1 className=" font-semibold ">Check Out</h1>
              <p className="text-slate-500 font-semibold">
                {endDate ? endDate : "Add Dates"}
              </p>
            </div>
          </div>
          {showDatePicker && (
            <NavbarDatePicker
              setDays={setDays}
              setCalendarData={setCalendarData}
            />
          )}

          <div className="flex  h-full px-2 py-5 gap-10 w-max group justify-between transition-colors duration-200 rounded-full hover:bg-gray-200  ">
            <div className=" px-10 flex flex-col  group-hover:border-r-0 border-l-2 ">
              <h1>Who</h1>
              <p>Add guests</p>
            </div>
            <div className=" p-4 border rounded-full cursor-not-allowed bg-red-500 hover:bg-red-600 hover:scale-105 duration-100 text-white  ">
              <IoSearch className="text-[21px] " />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
