import { IoCloseCircleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { regions } from "../../utils/data";
import { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import { format } from "date-fns";
import { calendarProps } from "../../types/types";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function MobileSearch({
  setShowMobileSearch,
}: {
  setShowMobileSearch: any;
}) {
  const [showRegions, setShowRegions] = useState(true);
  const [showDate, setShowDate] = useState(false);
  const [choosedRegion, setChoosedRegion] = useState("I'm flexible");
  const [showAddGuests, setShowAddGuests] = useState(false);
  const [days, setDays] = useState(3);
  const [date, setDate] = useState<string>();
  const [calendarData, setCalendarData] = useState<calendarProps>();
  const [showSettings, setShowSettings] = useState(false)
  



 

  const handleDate = () => {
    console.log(days);
    
    if (calendarData?.startDate) {
      const endMonth = format(calendarData?.endDate || 0, "MMM");
      const startMonth = format(calendarData.startDate, "MMM");
      const startDateDay = format(calendarData.startDate, "dd");
      const endDateDay = format(calendarData?.endDate || 0, "dd");
      const isSameMonth = startMonth === endMonth;
     

      if (isSameMonth) {
        return setDate(`${startMonth} ${startDateDay}-${endDateDay}`);
      } else {
        return setDate(
          `${startMonth} ${startDateDay}-${endDateDay} ${endMonth}`
        );
      }
    } else {
      console.log("No calendarData");
    }
  };

  useEffect(() => {
    if (calendarData?.startDate) {
      handleDate();
    }
  }, [calendarData]);

  useEffect(() => {
    if (showRegions) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".show-regions")) {
          setShowRegions(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showRegions]);

  useEffect(() => {
    if (showDate) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".show-date-picker")) {
          setShowDate(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showDate]);
  useEffect(() => {
    if (showAddGuests) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".show-add-guests")) {
          setShowAddGuests(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showAddGuests]);
  useEffect(() => {
    if (showSettings) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".show-settings")) {
          setShowSettings(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [showSettings]);

  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col items-center px-5 pt-5  overflow-hidden w-screen bg-white z-[100000] ">
      <div className="w-full flex h-max  gap-5 items-center px-2 relative">
        <IoCloseCircleOutline
          className="text-[30px] "
          onClick={() => setShowMobileSearch(false)}
        />
        <div className="flex gap-5 items-center">
          <h1 className=" text-[20px] font-semibold  ">Stays</h1>

          <h1 className="text-[20px] text-gray-500 hover:text-black transition-all font-semibold ">
            Experiences
          </h1>
          
          
        </div>
       <IoMdSettings className="text-[30px] show-settings " onClick={() => setShowSettings(!showSettings)} />
        {showSettings && <div className="absolute bottom-0 right-2 bg-white h-0 w-40 cursor-pointer show-settings z-[1000000]  ">
          <div className="h-max bg-white border mt-3 w-full flex flex-col p-4 gap-4 ">
          <Link to={"/"} className="flex gap-2 items-center" onClick={() => setShowMobileSearch(false)}><FaHome className="text-[22px] " /> Home</Link>
          <Link to={"/favorites"} className="flex gap-2 items-center " onClick={() => setShowMobileSearch(false)}  ><FaStar className="text-[22px] "/> Favorites</Link>
          </div>

          </div> }
      </div>
 
      {showRegions ? (
        <div className="w-full flex flex-col rounded-[30px] bg-white shadow-xl border show-regions mt-5 h-[320px] p-5 gap-5 ">
          <div className="w-full flex justify-between">
            <h1 className="font-semibold">Where To</h1>
            <h1 className="font-semibold"> {choosedRegion} </h1>
          </div>
          <div className="flex w-full border-2 border-gray-300 gap-2 p-4 items-center  rounded-md">
            <div className="">
              {" "}
              <IoSearch className="text-[22px] " />
            </div>
            <input
              type="text"
              readOnly
              className="  focus:outline-none bg-white  "
              onClick={() => alert("It's Read Only")}
              placeholder="Search destinations"
            />
          </div>
          <div className="flex flex-wrap items-center h-max min-w-full overflow-y-scroll gap-5 ">
            {regions?.map((region, index) => {
              return (
                <div
                  className="flex flex-col gap-2 w-[100px] h-[150px]  "
                  key={index}
                  onClick={() => setChoosedRegion(region.name)}
                >
                  <img
                    src={region.img}
                    className=" rounded-md h-[120px] w-full object-cover  "
                    alt=""
                  />
                  <h1 className="font-semibold">{region.name} </h1>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className="bg-white border rounded-[20px] shadow-md mt-5 px-5 py-4 flex justify-between w-full show-regions  "
          onClick={() => setShowRegions(true)}
        >
          <h1 className="text-gray-500 ">Where </h1>
          <h1 className="font-semibold show-regions ">{choosedRegion}</h1>
        </div>
      )}
      {showDate ? (
        <div className="w-full relative flex flex-col rounded-t-[30px] bg-white shadow-xl border-t  mt-5 h-full show-date-picker   ">
          <h1 className="font-semibold  text-[22px] p-2 px-4 ">
            When's your trip?
          </h1>
          <DatePicker
            setDays={setDays}
            setCalendarData={setCalendarData}
            months={1}
            scroll={true}
            direction="vertical"
          />
          <div className="absolute bottom-2 rounded-b-[25px] w-full justify-between items-center p-5 left-0 flex border-t-2 bg-white shadow-lg h-20  ">
            <h1
              className="font-semibold underline"
              onClick={() => setShowDate(false)}
            >
              Skip
            </h1>
            <button
              className="bg-black/90 px-10 py-2 rounded-md text-white show-add-guests "
              onClick={() => {
                setShowDate(false);
                setShowAddGuests(true);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div
          className="bg-white border rounded-[20px] shadow-md mt-2 px-5 py-4 flex justify-between w-full show-date-picker "
          onClick={() => setShowDate(true)}
        >
          <h1 className="text-gray-500 ">When </h1>
          <h1 className="font-semibold show-date-picker">
            {date && date !== "" ? date : "Add dates"}
          </h1>
        </div>
      )}

      {showAddGuests ? (
        <div className="bg-white border rounded-[20px] shadow-md mt-2 px-5 py-4 flex flex-col justify-between w-full show-add-guests gap-3 ">
          <h1 className="font-semibold text-[22px] " >Who's coming?</h1>
          <div className="flex justify-between border-b pb-2  flex-wrap w-full ">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-[18px] " >Adults</h1>
              <p className="text-[14px] text-gray-400 " >Ages 13 or above</p>
            </div>
            <div className="flex items-center gap-2 ml-5 ">
              <button className="bg-white  rounded-full px-[12px] py-[3px] text-center  border shadow-sm  " >-</button>
              <h1>0 </h1>
              <button className="bg-white  rounded-full px-[12px] py-[3px] text-center  border shadow-sm  " > +</button>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 flex-wrap">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-[18px] " >Children</h1>
              <p className="text-[14px] text-gray-400 " >Ages 2-12</p>
            </div>
            <div className="flex items-center gap-4 ">
              <button className="bg-white  rounded-full px-4 py-2 shadow-sm " >-</button>
              <h1>0 </h1>
              <button className="bg-white  rounded-full px-4 py-2 shadow-sm " > +</button>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 flex-wrap">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-[18px] " >Infants</h1>
              <p className="text-[14px] text-gray-400 " >Under 2</p>
            </div>
            <div className="flex items-center gap-4 ">
              <button className="bg-white  rounded-full px-4 py-2 shadow-sm " >-</button>
              <h1>0 </h1>
              <button className="bg-white  rounded-full px-4 py-2 shadow-sm " > +</button>
            </div>
          </div>
        </div>
      ) : showDate ? (
        ""
      ) : (
        <div
          className="bg-white border rounded-[20px] shadow-md mt-2 px-5 py-4 flex justify-between w-full show-add-guests  "
          onClick={() => setShowAddGuests(true)}
        >
          <h1 className="text-gray-500 show-add-guests">Who </h1>
          <h1 className="font-semibold show-add-guests">Add guests</h1>
        </div>
      )}
      {showDate ? (
        <div className="fixed bottom-0 w-full flex  "></div>
      ) : (
        <div className="fixed bottom-0 w-full flex justify-between items-center h-max border-t px-5 py-4 bg-white ">
          <h1 className="font-semibold underline text-[17px] " onClick={() => {
            setChoosedRegion("I'm flexible")        
            setDate("")  
            setShowAddGuests(false)
          }} >Clear All</h1>
          <button className="flex items-center bg-pink-600 px-6 h-10 py-6 rounded-md gap-2 text-white">
            <IoSearch className="text-[19px] " />{" "}
            <span className="text-[19px] cursor-not-allowed ">Search</span>{" "}
          </button>
        </div>
      )}
    </div>
  );
}
