import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { houses } from "../utils/data";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { HouseProps, reduxProps } from "../types/types";

export default function Favorites() {
  const [favoriteHouses, setFavoriteHouses] = useState<Array<HouseProps>>([]);
  const likedHouses = useSelector((state: reduxProps) => state.likes.liked_houses);
  const navigate = useNavigate();
  const getLikedHouses = () => {
    houses.forEach((house) => {
      likedHouses.forEach((likeId:number) => {
        if (likeId === house.id) {
          setFavoriteHouses((prev:any) => [...prev, house]);
        }
      });
    });
  };

  console.log(favoriteHouses);

  useEffect(() => {
    getLikedHouses();
  }, []);

  return (
    <div className="w-screen h-full flex flex-col">
      <Navbar />
      <div className="md:hidden absolute top-0 left-0 flex justify-between w-full items-center h-14 p-4 ">
        <div className="flex h-full justify-center items-center gap-2">
          <FaAngleLeft
            className="text-[35px] "
            onClick={() => window.history.back()}
          />
        </div>
      </div>
      <div className="flex  flex-wrap justify-center p-10 w-full h-max gap-10 mt-20   md:mt-[120px] ">
        {favoriteHouses?.map((house:HouseProps) => {
          return (
            <div className="flex flex-col gap-3 " key={house?.id}>
              <Card house={house} />
              <div
                className="flex flex-col"
                onClick={() => navigate(`/house/${house?.id}`)}
              >
                <h1 className="text-[20px] font-semibold cursor-pointer ">
                  {house?.title}{" "}
                </h1>

                <p className="text-[18px] text-slate-500 cursor-pointer ">
                  {"Hosted By " + house?.hosted_by}{" "}
                </p>
                <p>
                  <span className="font-semibold cursor-pointer">
                    {house?.price}$
                  </span>{" "}
                  per guest{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
