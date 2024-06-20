import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useParams } from "react-router-dom";
import houseImg from "../assets/airbnb1.jpg";




export default function Map({position,houseData}:{position:Array,houseData:object}) {
  const markerRef1 = useRef(null);
  const markerRef2 = useRef(null);
  const params = useParams()
  useEffect(() => {
    if (markerRef1.current) {
      markerRef1.current.openPopup();
    }
    if (markerRef2.current) {
      markerRef2.current.openPopup();
    }
  }, [markerRef1, markerRef2,params.id]);

  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg "
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
 

<Marker position={position} ref={markerRef2} >
  <Popup open={true}>
   <div className="md:w-full md:h-full max-h-[240px] max-w-[200px] flex flex-col ">
    <img src={houseData.images[1]} className="object-cover max-w-full  " alt="" />
   <div className="flex justify-between items-center  "> 
    <h1 className="text-[21px] font-semibold " >{houseData.title} </h1>
    <p className="text-[20px] font-bold items-center flex " >{houseData.price} <span className="text-green-600 font-extrabold">$</span></p>
   </div>
   
   </div>
  </Popup>
</Marker>

      </MapContainer>
    </div>
  );
}
