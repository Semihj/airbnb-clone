import React, { useEffect } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';

export default function DatePicker({setDays,setCalendarData}:{setDays:any,setCalendarData:any}) {
  const [widthScreen, setWidthScreen] = useState(window.screen.width)
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
  
  
  
  useEffect(() => {
    setWidthScreen(window.screen.width)
    console.log(widthScreen);
  }, [window.screen.width])
  
   
    

  return (
   
   <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  minDate={addDays(new Date(), 0)}
  moveRangeOnFirstSelection={false}
  months={widthScreen > 850 ? 2 : 1}
  ranges={state}
  
  direction="horizontal"
/>
  );
}
