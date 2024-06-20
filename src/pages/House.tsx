import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { houses } from "../utils/data";
import Map from "../components/Map";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { IoShareOutline } from "react-icons/io5";
import { PiDotsNineThin } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";
import ShowImages from "../components/ShowImages";
import { House } from "../types/types";
import { LuDoorOpen } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { MdFreeCancellation } from "react-icons/md";
import DatePicker from "../components/DatePicker";
import PriceCard from "../components/PriceCard";
import Navbar from "../components/Navbar";

type calendarProps =    {
  startDate: Date,
  endDate: Date,
  key: string
}


export default function House() {
  const params = useParams();
  const [house, setHouse] = useState<House>({});
  const [days,setDays] = useState(3)
  const [calendarData,setCalendarData] = useState<calendarProps>({})
  const [lat, setLat] = useState();
  const [lang, setLang] = useState();
  const [showImages, setShowImages] = useState(false);

  console.log(calendarData.endDate);
  
  console.log(house.utilities);
  console.log(days);
  
  useEffect(() => {
    const filteredHouse = houses.find(
      (house) => house.id === parseInt(params.id)
    ); // Ensure `params.id` is converted to a number

    if (filteredHouse) {
      setHouse(filteredHouse);
      setLat(filteredHouse.lat);
      setLang(filteredHouse.lang);
    }
  }, [params.id]);

  console.log(calendarData);
  
  return (
    <div className="   lg:mx-20 flex justify-center items-center mx-5 ">
      <div className="hidden md:flex">
        <Navbar/>
      </div>
      <div className="md:mt-[120px]  w-full h-full flex justify-center items-center ">
        {!showImages && (
          <div className="h-full  w-full flex  flex-col justify-center  lg:mx-10 mx-5">
            <h1 className="mb-4 text-[21px] hidden md:inline font-bold cursor-pointer ">
              {house.title}{" "}
            </h1>
            <div className=" relative hidden md:flex justify-between h-[50vh] xl:h-[75vh] w-full gap-2 lg:gap-6">
              <img
                src={house.images && house?.images[0]}
                className="h-full w-[50%] rounded-lg cursor-pointer hover:brightness-75 transition-all duration-150 object-cover "
                alt=""
              />
              <div className="flex flex-wrap  h-full   gap-2">
                {house.images &&
                  house?.images.slice(1, 5).map((img, index) => (
                    <div className=" w-[48%] h-[48%] " key={index}>
                      <img
                        src={img}
                        className="object-cover h-full  w-full rounded-md hover:brightness-75 transition-all duration-150 cursor-pointer  "
                        alt=""
                      />
                    </div>
                  ))}
              </div>
              <button
                className="absolute bottom-5 right-5 lg:right-12 border p-2 flex items-center gap-2 bg-white rounded-lg cursor-pointer hover:scale-95 transition-all duration-200 "
                onClick={() => {
              
                  setShowImages(true)
                  window.scrollTo(0,0)
                
                }}
              >
                <PiDotsNineThin className="text-[21px]  " />{" "}
                <span>Show All Images</span>{" "}
              </button>
            </div>
            <div className="md:hidden  w-[calc(100%+20px)]    h-[50vh] flex  ">
              <img
                src={house.images && house?.images[0]}
                className=" w-full absolute top-0 left-0 h-[300px] rounded-b-md object-cover "
                alt=""
              />
              <button
                className="absolute top-[250px] right-4 border p-2 flex items-center gap-2 bg-white rounded-lg cursor-pointer hover:scale-95 transition-all duration-200 "
                onClick={() => setShowImages(true)}
              >
                <PiDotsNineThin className="text-[21px]  " />{" "}
                <span>Show All Images</span>{" "}
              </button>
            </div>
            
            <div className="flex  relative w-full ">
              
              <div className="flex flex-col w-full">
              <div className="w-full flex flex-col mt-5 lg:mt-10 gap-5  ">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[22px] font-bold ">
                    {house?.city}, {house?.country}{" "}
                  </h1>
                  <div className="flex gap-2 flex-wrap  items-center ">
                    {house?.utilities?.map((utility, index) => {
                      return (
                        <p key={index}>
                          {" "}
                          {index !== 0 && "·"} {utility}{" "}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className=" w-full xl:max-w-[50vw] p-2 border-b-2 border-t-2 flex  gap-5 ">
                  <img
                    src={(house.images && house?.images[1]) || ""}
                    className="rounded-full object-cover cursor-pointer h-20 w-20"
                    alt=""
                  />
                  <div className="flex flex-col  ">
                    <h1 className="text-[22px] font-bold cursor-pointer ">
                      Hosted By {house?.hosted_by}{" "}
                    </h1>
                    <p className="text-[20px] text-slate-500 cursor-pointer ">
                      Designer at Large
                    </p>
                  </div>
                </div>
                <div className="flex flex-col max-w-[500px] gap-5 mt-4 ">
                  <div className="flex  gap-5 lg:gap-10 w-full items-center">
                    <FaWifi className="text-[35px] md:text-[42px]  " />
                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold ">Fast Wifi</h1>
                      <p>
                        At 316 Mbps, you can take video calls and stream videos
                        for your whole group.
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-5 lg:gap-10 w-full items-center">
                    <LuDoorOpen className="text-[35px] md:text-[42px]  " />
                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold ">Self-Check IN</h1>
                      <p>Check yourself in with the smartlock.</p>
                    </div>
                  </div>
                  <div className="flex  gap-5 lg:gap-10 w-full items-center">
                    <MdFreeCancellation className="text-[35px] md:text-[42px]  " />
                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold ">
                        Free cancellation before Aug 25
                      </h1>
                      <p>Get a full refund if you change your mind.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2   mt-10 min-h-[500px] w-[80vw] sm:w-[40vw] md:w-[90%]   ">
                <div className="flex flex-col">
                  <h1 className="text-[24px] lg:text-[28px] font-bold " >{days} Nights at {house.city} </h1>
                {/*   <p>{calendarData?.startDate} - {calendarData?.endDate} </p> */}
                </div>
                <DatePicker setDays={setDays} setCalendarData={setCalendarData} />
              </div>
              </div>
              <div className="sticky hidden xl:flex  w-[60%] right-0 justify-end h-max top-20 flex-end   ">
                    <div className="mt-10 border-4 w-full max-w-[450px]  rounded-[40px] shadow-lg h-max"> 
                       <PriceCard  calendarData={calendarData} price={house.price}/>
                    </div>
              </div>
            </div>
            {lat && lang && (
              <div className="h-[270px] md:h-[600px] w-full  p-3 sm:p-10 m-auto flex justify-center items-center ">
                <Map position={[lat, lang]} houseData={house} />{" "}
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`   gap-2    absolute bottom-0 w-screen h-1 transition-all duration-1000  ${
          showImages
            ? "w-screen flex flex-col h-[calc(100%+300px)]  top-0 left-0 z-[29999] bg-white "
            : "hidden"
        }`}
      >
        <div className="flex w-full  fixed top-0 left-0 justify-between bg-white p-4 cursor-pointer ">
          <FaArrowLeft
            className="text-[21px] md:text-[26px]  text-black cursor-pointer  "
            onClick={() => {
              
              setShowImages(false)
              window.scrollTo(0,0)
            
            }}
          />
          <IoShareOutline className="text-[21px] md:text-[26px]  text-black cursor-not-allowed" />
        </div>

        <ShowImages images={house?.images} />
      </div>
    </div>
  );
}
