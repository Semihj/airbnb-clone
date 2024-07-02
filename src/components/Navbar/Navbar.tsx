import airbnbjpg from "../../assets/airbnb.jpeg";
import { IoSearch } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileSearch from "./MobileSearch";
import { reduxProps } from "../../types/types";
export default function Navbar() {
  const liked_houses = useSelector((state:reduxProps) => state.likes.liked_houses);

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".navbar")) {
          setIsOpen(false);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [isOpen]);

  useEffect(() => {
    if (show) {
      const handleClickOutside = (e:any) => {
        if (!e.target.closest(".show")) {
          setShow(false);
        }
        console.log("Closed");
      };

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside); // Cleanup function
    }
  }, [show]);

  return (
    <div
      className={`w-screen h-[80px] ${
        isOpen && "md:h-[250px] navbar "
      } navbar fixed top-0 left-0 z-[10000] bg-white md:h-[100px] flex items-center justify-center md:justify-between p-2 md:py-4 transition-all duration-300 xl:px-20 border-b-2 `}
    >
      {showMobileSearch && <MobileSearch setShowMobileSearch={setShowMobileSearch} />}
      <div className="flex md:hidden justify-center px-2 h-full rounded-full w-full " onClick={() => setShowMobileSearch(true)} >
        <div className="flex w-full items-center gap-3    border-2 shadow-lg p-1  rounded-full">
          <IoSearch className="text-[25px] font-bold ml-2  " />
          <div className="flex flex-col  justify-center items-start">
            <h1 className="font-semibold text-[18px] ">Where to?</h1>
            <div className="flex items-center text-slate-600 justify-between text-[13px] gap-2  w-full">
              <p className="">Anywhere </p>
              <p>·</p>
              <p>Anyweek </p>
              <p>·</p>
              <p className="trunction"> Add guests</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full  relative hidden md:flex ${
          isOpen && "flex-wrap"
        } justify-between items-center gap-5 p-2 `}
      >
        {/* Logo */}
        <div className=" h-full w-auto relative flex-wrap ">
          <Link to={"/"}>
            <img
              src={airbnbjpg}
              className={` ${
                isOpen && "sticky  top-2 left-0 "
              } h-10 w-40 object-cover rounded-md cursor-pointer md:inline-block`}
              alt=""
            />
          </Link>
        </div>
        {/* Search Bar */}

        <div
          onClick={() => setIsOpen(true)}
          hidden={isOpen}
          className={` ${
            isOpen && "md:hidden"
          } md:flex justify-between items-center py-1  px-2 border-2 rounded-full shadow-sm hover:shadow-lg duration-300 cursor-pointer `}
        >
          <div className=" gap-4 flex font-semibold text-md lg:text-xl p-2">
            <h1>Anywhere</h1>
            <div className="border-r"></div>
          </div>
          <div className="  font-semibold gap-4 flex text-md lg:text-xl p-2">
            <h1>Any week</h1>
            <div className="border-r"></div>
          </div>

          <div className="flex  items-center gap-3 font-light lg:text-xl  text-md p-2">
            <h1 className="trunction line-clamp-1">Add guests</h1>
            <div className="bg-red-500 p-2 rounded-full">
              <IoSearch className="text-white text-xl" />
            </div>
          </div>
        </div>
        {/* Settings */}
        <div className="">
          <div
            className={`flex items-center gap-6 ${
              isOpen && "sticky  top-2 right-0 "
            } `}
          >
            <h1 className="text-xl font-semibold cursor-pointer  hover:rounded-full hover:bg-slate-100 duration-200 p-3">
              Airbnb your home
            </h1>
            <div className="flex gap-4 items-center  ">
              <div className="p-2 hover:rounded-full hover:bg-slate-100">
                <TbWorld className="w-7 h-7 cursor-pointer hover:shadow-xl duration-200 " />
              </div>
              <div className="border items-center flex rounded-full  gap-5 hover:shadow-xl duration-200 p-2 show">
                <div
                  className={`  ${
                    show
                      ? "inline-block absolute top-0 right-4 cursor-pointer w-max h-max "
                      : "hidden w-1 h-1 "
                  } show transition-all duration-200 `}
                >
                  <div className="mt-[85px] bg-white flex flex-col w-full h-max p-10 text-[22px] font-semibold rounded-md gap-5 ">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/favorites"} className="flex">
                      Favorites
                      {liked_houses.length > 0 && (
                        <div className="bg-red-600 text-white w-max h-5 px-2 py-3 font-s text-[17px] flex justify-center items-center rounded-full  ">
                          {liked_houses.length}
                        </div>
                      )}{" "}
                    </Link>
                    <h1 className="cursor-not-allowed" >About</h1>
                    <h1 className="cursor-not-allowed" >Sign In</h1>
                  </div>
                </div>
                <GiHamburgerMenu
                  className="w-7 h-7 cursor-pointer "
                  onClick={() => setShow(!show)}
                />
                <div className="w-10 h-10 cursor-pointer relative">
                  <CgProfile
                    className="w-10 h-10 cursor-pointer "
                    onClick={() => setShow(!show)}
                  />
                  {liked_houses.length > 0 && (
                    <div className="w-2 h-2 bg-red-600 top-0 right-1 rounded-full absolute "></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && <Search />}
      </div>
    </div>
  );
}
