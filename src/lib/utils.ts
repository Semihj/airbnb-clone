import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleClickOutside = (e,className,state) => {
  if(!e.target.closest(className)) {
    state(false)
  }
}