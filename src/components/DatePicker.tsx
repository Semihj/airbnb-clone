import { useEffect } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';

export default function DatePicker({setDays,setCalendarData,months,scroll,direction}:{setDays:any,setCalendarData:any,months:number,scroll:boolean,direction:any}) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection'
    }
  ]);
  const totalDays = differenceInDays(state[0].endDate,state[0].startDate)
  setDays(totalDays)
  setCalendarData(state[0])
  
  useEffect(() => {
    setCalendarData(state[0])
  }, [state])
  
  
  

    

  return (
   
   <DateRangePicker
  onChange={(item:any) => setState([item.selection])}
  minDate={addDays(new Date(), 0)}
  months={months}
  ranges={state}
  scroll={{ enabled: scroll }}
  direction={direction}
/>
  );
}
