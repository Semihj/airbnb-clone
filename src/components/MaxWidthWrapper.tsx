import React from 'react'
import { Outlet } from 'react-router-dom';

export default function MaxWidthWrapper({children}) {
  return (
    <div className="check   bg-gray-200  ">
    <div className='mx-20  flex justify-center flex-wrap gap-10 mt-[200px] md:mt-[260px]   ' >
         {children}
    </div>
    </div>
  )
}
