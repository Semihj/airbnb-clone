import  { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { houses } from "../utils/data";
import Map from "../components/Map";
import { IoShareOutline } from "react-icons/io5";
import { PiDotsNineThin } from "react-icons/pi";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import ShowImages from "../components/ShowImages";
import { HouseProps, calendarProps, reduxProps } from "../types/types";
import { LuDoorOpen } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { MdFreeCancellation } from "react-icons/md";
import DatePicker from "../components/DatePicker";
import PriceCard from "../components/PriceCard";
import Navbar from "../components/Navbar/Navbar.js";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like, unlike } from "../redux/user/UserSlice.ts";


export default function House() {
  const params:any = useParams();
  const [house, setHouse] = useState<HouseProps>();
  const [days, setDays] = useState(3);
  const [calendarData, setCalendarData] = useState<calendarProps>();
  const [lat, setLat] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [lang, setLang] = useState();
  const [showImages, setShowImages] = useState(false);
  const liked_houses = useSelector((state:reduxProps) => state.likes.liked_houses);
  const dispatch = useDispatch();

  console.log(house);
  

  useEffect(() => {
    const handleIsLiked = () => {
      liked_houses?.map((likeId:number) => {
        if (likeId === house?.id) setIsLiked(true);
      });
    };
    handleIsLiked();
  }, [liked_houses]);
  useEffect(() => {
    const handleIsLiked = () => {
      liked_houses?.map((likeId) => {
        if (likeId === house?.id) setIsLiked(true);
      });
    };
    handleIsLiked();
  }, []);

  useEffect(() => {
    const filteredHouse:any = houses.find(
      (house) => house.id === parseInt(params?.id)      
    ); // Ensure `params.id` is converted to a number

    if (filteredHouse) {
      setHouse(filteredHouse);
      setLat(filteredHouse?.lat);
      setLang(filteredHouse?.lang);
    }
  }, [params.id]);

  const handleLike = () => {
    setIsLiked(true);
    dispatch(like(house?.id));
  };
  const handleUnLike = () => {
    setIsLiked(false);
    dispatch(unlike(house?.id));
  };

  return (
    <div className="   lg:mx-20 flex justify-center items-center mx-5 ">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden absolute top-0 left-0 flex justify-between w-full items-center h-14 p-4 ">
        <div className="flex h-full justify-center items-center gap-2">
          <FaAngleLeft
            className="text-[20px] "
            onClick={() => window.history.back()}
          />
          <h1 className="text-[20px] " onClick={() => window.history.back()}>
            Homes
          </h1>
        </div>
        <div className="flex h-full justify-center items-center gap-2">
          <IoShareOutline className="text-[20px] " />
          {isLiked ? (
            <FaHeart
              className="text-red-600 text-[23px] cursor-pointer"
              onClick={() => handleUnLike()}
            />
          ) : (
            <FaRegHeart
              className="text-[23px] cursor-pointer"
              onClick={() => handleLike()}
            />
          )}
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 flex justify-between w-full items-center h-20  p-4 bg-white z-[10000] ">
        <div className="">hello</div>
      </div>
      <div className="md:mt-[120px] mt-10   w-full h-full flex justify-center items-center ">
        {!showImages && (
          <div className="h-full  w-full flex  flex-col justify-center  lg:mx-10 ">
            <div className="md:flex w-full justify-between items-center mb-4 hidden">
              <h1 className=" text-[21px] hidden md:inline font-bold cursor-pointer ">
                {house?.title}{" "}
              </h1>
              {isLiked ? (
                <FaHeart
                  className="text-red-600 text-[23px] cursor-pointer "
                  onClick={() => handleUnLike()}
                />
              ) : (
                <FaRegHeart
                  className="text-[23px] cursor-pointer  "
                  onClick={() => handleLike()}
                />
              )}
            </div>
            <div className=" relative hidden md:flex justify-between h-[50vh] xl:h-[75vh] w-full gap-2 lg:gap-6">
              <img
                src={house?.images && house?.images[0]}
                className="h-full w-[50%] rounded-lg cursor-pointer hover:brightness-75 transition-all duration-150 object-cover "
                alt=""
              />
              <div className="flex flex-wrap  h-full   gap-2">
                {house?.images &&
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
                  setShowImages(true);
                  window.scrollTo(0, 0);
                }}
              >
                <PiDotsNineThin className="text-[21px]  " />{" "}
                <span>Show All Images</span>{" "}
              </button>
            </div>
            <div className="md:hidden  w-[calc(100%+20px)]    h-[50vh] flex  ">
              <img
                src={house?.images && house?.images[0]}
                className=" w-full absolute top-14 left-0 h-[300px] rounded-b-md object-cover "
                alt=""
              />
              <button
                className="absolute top-[290px] right-4 border p-2 flex items-center gap-2 bg-white rounded-lg cursor-pointer hover:scale-95 transition-all duration-200 "
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
                      src={(house?.images && house?.images[1]) || ""}
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
                        <h1 className="text-[22px] font-bold ">Fast Wifi</h1>
                        <p>
                          At 316 Mbps, you can take video calls and stream
                          videos for your whole group.
                        </p>
                      </div>
                    </div>
                    <div className="flex  gap-5 lg:gap-10 w-full items-center">
                      <LuDoorOpen className="text-[35px] md:text-[42px]  " />
                      <div className="flex flex-col">
                        <h1 className="text-[22px] font-bold ">
                          Self-Check IN
                        </h1>
                        <p>Check yourself in with the smartlock.</p>
                      </div>
                    </div>
                    <div className="flex  gap-5 lg:gap-10 w-full items-center">
                      <MdFreeCancellation className="text-[35px] md:text-[42px]  " />
                      <div className="flex flex-col">
                        <h1 className="text-[22px] font-bold ">
                          Free cancellation before Aug 25
                        </h1>
                        <p>Get a full refund if you change your mind.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2   mt-10 min-h-[500px] w-[80vw] sm:w-[40vw] md:w-[80%]   ">
                  <div className="flex flex-col">
                    <h1 className="text-[22px] lg:text-[28px] font-bold ">
                      {days} Nights at {house?.city}{" "}
                    </h1>
                    {/* {calendarData && <p>{calendarData?.startDate} - {calendarData?.endDate} </p>}  */}
                  </div>
                  <div className="w-full h-full hidden lg:flex">
                    <DatePicker
                      setDays={setDays}
                      setCalendarData={setCalendarData}
                      scroll={false}
                      direction="horizontal"
                      months={2}
                    />
                  </div>
                  <div className="w-full h-full flex lg:hidden">
                    <DatePicker
                      setDays={setDays}
                      setCalendarData={setCalendarData}
                      scroll={false}
                      direction="horizontal"
                      months={1}
                    />
                  </div>
                </div>
              </div>
              <div className="sticky hidden md:flex  left-0 justify-end h-max top-20 flex-end   ">
                <div className="mt-10 w-full max-w-[450px] xl:w-[500px] rounded-[20px] shadow-lg h-max ml-2 lg:h-max ">
                  <PriceCard calendarData={calendarData} price={house?.price || 0} />
                </div>
              </div>
            </div>
            {lat && lang && (
              <div className="h-[270px] md:h-[600px] w-full  p-3 sm:p-10 m-auto flex justify-center items-center ">
                <Map position={[lat, lang]} />{" "}
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
              setShowImages(false);
              window.scrollTo(0, 0);
            }}
          />
          <IoShareOutline className="text-[21px] md:text-[26px]  text-black cursor-not-allowed" />
        </div>

        <ShowImages images={house?.images} />
      </div>
    </div>
  );
}
