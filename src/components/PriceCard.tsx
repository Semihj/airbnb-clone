import { differenceInDays, format } from 'date-fns';
import  { useEffect, useState } from 'react'
import { calendarProps } from '../types/types';



export default function PriceCard({calendarData,price}:{calendarData:calendarProps | undefined,price:number}) {
    const [totalDays, setTotalDays] = useState(3)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    
    const handleDates = () => {
        try {
            if(calendarData) {
                  const calcStartDate:any = format(calendarData?.startDate || 0, "dd/MM/yyyy");
         setStartDate(calcStartDate)
         const calcEndDate:any = format(calendarData?.endDate || 0, "dd/MM/yyyy");
         setEndDate(calcEndDate)
         const calcTotalDays = differenceInDays(calendarData.endDate || 0,calendarData.startDate || 0)
         setTotalDays(calcTotalDays)
            }
           else {
            console.log("Something Went Wrong!");
            
           }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        
       handleDates()
    
    }, [calendarData])
    
    useEffect(() => {
       handleDates()
    
    }, [])
    
    
    

 
  return (
    <div className='m-5 mt-10 flex  flex-col '  >
        <div className="w-full flex justify-between items-center  ">
            <h1 className='font-bold lg:text-[27px] text-[22px]  ' >{price}$ <span className='lg:text-[20px] text-[17px] font-light ' >per night</span></h1>
            <p className='underline lg:text-[20px] text-[17px] text-gray-500 ' >34 reviews</p>
        </div>
        <div className="flex w-full border-2 rounded-lg mt-10 justify-between ">
            <div className="w-full border-r-2 gap-2 flex flex-col p-4">
                <h1 className='text-[23px] font-bold ' >Check-in</h1>
                <p className='text-[18px] text-gray-400 ' >{startDate} </p>
            </div>
            <div className="w-full border-r-2 gap-2 flex flex-col p-4">
                <h1 className='lg:text-[22px] text-[17px] font-bold ' >Check-out</h1>
                <p className='text-[18px] text-gray-400 ' >{endDate} </p>
            </div>
        </div>
        <div className="w-full justify-center items-center p-4 flex flex-col mt-5 gap-5">
            <button className='bg-green-500 p-3 rounded-lg w-full text-[20px] font-bold text-white cursor-not-allowed ' >Reserve</button>
            <p className='text-[21px] text-gray-500 ' >You won't be charged yet</p>
        </div>
        <div className="w-full flex flex-col p-5 border-b-2 ">
            <div className="w-full justify-between flex items-center">
                <p className='text-[20px] underline ' >{price}$ x {totalDays} nights </p>
                <p className='text-[20px]'>{price * totalDays}$</p>
            </div>
        </div>
        <div className="w-full flex flex-col p-5 ">
            <div className="w-full justify-between flex items-center">
                <p className='text-[24px] font-semibold  ' >Total before Taxes</p>
                <p className='text-[20px] font-semibold'>{price * totalDays}$ </p>
            </div>
        </div>
       
    </div>
  )
}
