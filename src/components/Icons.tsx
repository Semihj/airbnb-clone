import React, { useRef, useState } from "react";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export default function Icons() {
  const rowRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false)

  if(rowRef?.current?.scrollLeft === 0) {
    setIsHidden(true)
  }
  

  const scrollRight = () => {
    if (rowRef.current) {

      rowRef.current.scrollLeft += 500;
      rowRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };
  const scrollLeft = () => {
    if (rowRef.current) { 
      console.log(rowRef?.current.scrollLeft);
      
      rowRef.current.scrollLeft -= 500;
     
      
      rowRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <div className=" w-full   flex fixed h-[100px]  bg-white z-[100] left-0 border-b-2 mt-[75px] md:mt-[100px] "> 
    
      <div
        className="p-5 flex gap-10 md:gap-20 mx-6 md:mx-20 h-full  w-full overflow-x-scroll md:overflow-hidden items-center relative scroll"
        ref={rowRef}
      >
    <button  className={`sticky left-0  hidden md:inline-block cursor-pointer text-[24px] p-2 rounded-full right-arrow bg-white border-2 ${rowRef?.current?.scrollLeft === 0 && "hidden"}  z-10`} onClick={scrollLeft}><FaAngleLeft/></button>
      
        {Array.from({ length: 30 }).map((icon, index) => (
          <div
            className="flex flex-col  justify-center opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer "
            key={index}
          >
            <LiaSwimmingPoolSolid className="text-[42px]" />
            <p>Pools</p>
          </div>
        ))}
       <button className="sticky  right-0 hidden md:inline-block cursor-pointer text-[24px] p-2 rounded-full right-arrow bg-white border-2  z-10" onClick={scrollRight}><FaAngleRight/></button>
        
      </div>
    </div>
  );
}
