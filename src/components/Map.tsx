import { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";




export default function Map({position}:{position:any}) {
  const markerRef1:any = useRef(null);
  const markerRef2:any = useRef(null);
  const params = useParams()
  useEffect(() => {
    if (markerRef1?.current) {
      markerRef1?.current?.openPopup();
    }
    if (markerRef2.current) {
      markerRef2?.current?.openPopup();
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

</Marker>

      </MapContainer>
    </div>
  );
}
