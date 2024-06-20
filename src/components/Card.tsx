import React from "react";
import Slider from "react-slick";

import airbnbjpg from "../assets/airbnb.jpeg";
import airbnb1 from "../assets/airbnb1.jpg";
import airbnb2 from "../assets/airbnb2.jpg";
import airbnb3 from "../assets/airbnb3.jpg";
import { BsUpload } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: number;
  country: string;
  hosted_by: string;
  city: string;
  lat: number;
  lang: number;
  price: number;
  title: string;
  images: Array<String>;
};

export default function Card({ house }: CardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate()



  return (
    <div className="w-[80vw] flex flex-col md:w-[400px] rounded-xl relative  bg-gray-500 md:h-[400px] h-[200px] sm:h-[40vw]  " >
      {house.images ?
      <div className="w-full h-full">
        {isLiked ? (
          <div className="absolute right-2 top-2 z-[30] p-2 bg-gray-200 rounded-full hover:bg-white cursor-pointer duration-200 hover:scale-1.10 " onClick={() => setIsLiked(false)}>
          <FaHeart className="text-[21px] text-red-600"  />
          </div>
        ) : (
          <div className="absolute right-2 top-2 z-[30] p-2 bg-gray-200 rounded-full hover:bg-white cursor-pointer duration-200  hover:scale-1.10" onClick={() => setIsLiked(true)}>
          <FaRegHeart className="text-[21px] "  />
          </div>
        )}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full rounded-xl"

      >
        {house?.images?.map((path, index) => {
          return (
            <SwiperSlide className="w-full h-full" key={index}>
              <img src={path} className="w-full h-full object-cover" onClick={() => navigate(`/house/${house.id}`)} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div> 
      :<div className="w-full h-full animate-pulse">

      </div>
      }
    </div>
  );
}
