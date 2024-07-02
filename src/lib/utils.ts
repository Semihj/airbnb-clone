import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleClickOutside = (e:any,className:any,state:any) => {
  if(!e.target.closest(className)) {
    state(false)
  }
}