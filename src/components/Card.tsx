

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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {like,unlike} from "../redux/user/UserSlice.ts"
import { reduxProps } from "../types/types.js";

type CardProps = {
  house: {
    id: number;
    country: string;
    hosted_by: string;
    city: string;
    lat: number;
    lang: number;
    price: number;
    title: string;
    images: Array<string>;
  };
};


export default function Card({ house }: CardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const liked_houses:Array<Number> = useSelector((state:reduxProps) => state.likes.liked_houses);
  const dispatch = useDispatch()
  
  
 

  useEffect(() => {
    if (liked_houses?.includes(house?.id)) {
      setIsLiked(true);
    }
  }, [liked_houses]);
  
  const handleLike = async (id:number) => {
    setIsLiked(true)
    if (!liked_houses?.includes(id)) {
      dispatch(like(id));
    }
  };
  
  const handleUnLike = async (id:number) => {
    setIsLiked(false)
    if (liked_houses.includes(id)) {
      dispatch(unlike(id));
    }
  };

  const navigate = useNavigate()



  return (
    <div className="w-[80vw] flex flex-col md:w-[400px] rounded-xl relative  bg-gray-500 md:h-[400px] h-[200px] sm:h-[40vw]  " >
      {house.images ?
      <div className="w-full h-full">
        {isLiked ? (
          <button className="absolute right-2 top-2 z-[30] p-2 bg-gray-200 rounded-full hover:bg-white cursor-pointer duration-200 hover:scale-1.10 " onClick={(e) => {
            e.preventDefault()
            handleUnLike(house?.id)
            
            }} >
          <FaHeart className="text-[21px] text-red-600"  />
          </button>
        ) : (
          <button className="absolute right-2 top-2 z-[30] p-2 bg-gray-200 rounded-full hover:bg-white cursor-pointer duration-200  hover:scale-1.10" onClick={(e) => {
            e.preventDefault()
            handleLike(house?.id)
            
            }} >
          <FaRegHeart className="text-[21px] " />
          </button>
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
        {house?.images?.map((path:string, index:number) => {
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
