import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Icons from "../components/Icons";
import Map from "../components/Map";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar";
import { houses } from "../utils/data";

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col" >
        <Navbar/><Icons/>
       <MaxWidthWrapper> 
        
        {houses.map((card,index) => {
          return <div className="flex flex-col gap-3" key={index}>
            <Card house={card}  />
          <div className="flex flex-col" onClick={() => navigate(`/house/${card.id}`)}> 
          <h1 className="text-[20px] font-semibold cursor-pointer " >{card.title} </h1>
           
           <p className="text-[18px] text-slate-500 cursor-pointer " >{"Hosted By " + card.hosted_by} </p>
           <p><span className="font-semibold cursor-pointer" >{card.price}$</span> per guest </p>
</div>
            </div>
        })}
        </MaxWidthWrapper>
        {/* <Map/> */}
    </div>
  )
}
