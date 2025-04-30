import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateId = () => {
  return Math.floor(Math.random() * 10001);
};


export function moveArrayElement(arr:any[], oldIndex:number, newIndex:number) {
  if (newIndex >= arr.length) {
    newIndex = arr.length - 1;
  } else if (newIndex < 0) {
    newIndex = 0;
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}