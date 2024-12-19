import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FallbackFunction = (error: Error) => any;
export const Attempt = async (fnAttempt: any, fallback: FallbackFunction) => {
  try {
    return await fnAttempt();
  } catch (error: any) {
    fallback(error);
  }
};
