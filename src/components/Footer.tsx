import { MouseEventHandler, useEffect, useState } from "react"
import { footerData } from "../utils/data";

export default function Footer() {


    const defaultGetAways = {
        popular:false,
        art:false
    }
    const [cities,setCities] = useState([])
    const [chosen,setChosen] = useState("popular")
    const [index,setIndex] = useState(11);
    const [getAways, setGetAways] = useState({
        popular:true,
        art:false
    })

    const getCities = () => {
        footerData?.map((data) => {
            if(data.name === chosen) return setCities(data.cities)
                
        })
    }
    useEffect(() => {
        getCities()
    }, [chosen])

    useEffect(() => {
        getCities()
    }, [])
    

      
      const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
      
        // Safely access the ID using optional chaining and type assertion
        const clickedId = e.currentTarget?.id;
       
        if (clickedId) {
          setGetAways({ ...defaultGetAways, [clickedId]: true });
          setChosen(e.currentTarget?.id)
           // Update state using spread syntax
        } else {
          // Handle cases where the element might not have an ID
          console.error("Clicked element does not have an ID");
        }
      };
      
  
    
  return (
    <div className="w-full h-full bg-slate-100">
    <div className=" mt-20 lg:mx-10  justify-center flex flex-col p-4 gap-5  " >
        <h1 className="text-[25px] font-bold p-3 " >Inspiration For Future getaways</h1>
        <div className="flex p-3 border-b-4 relative">
        <div className="flex w-[80vw] md:w-max gap-10 overflow-x-auto p-2   ">
            {
                footerData.map((category,index) => {
                   return <div className="" key={index}>
                    <div className="w-max transition-all duration-200" id={category.name} onClick={handleClick}>
                        <h1 className="cursor-pointer w-full " >{category.title} </h1>
                        {getAways[category.name] && <div className='absolute w-[70px] h-1 bottom-[-4px] transition-all duration-200  bg-black  '></div>}
                    </div>
                   </div>
                })
            }
         
          
        
       
       </div>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2  grid-template-row p-4 gap-10 ">
            {cities?.slice(0,index).map((city,index) => {
              return  <div className="flex flex-col  " key={index}>
                    <h1 className="text-[21px] font-semibold cursor-pointer " >{city?.city_name} </h1>
                    <h1 className="text-[18px] text-slate-600 cursor-pointer " >{city?.type} </h1>
                </div>
            })}
          {  cities.length > index &&  <div className="flex gap-2 cursor-pointer" onClick={() => setIndex(40)}>
                <h1>Show More</h1>
            </div>}
        </div>
    </div></div>
  )
}
