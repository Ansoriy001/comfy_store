import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export function useGlobalContext(){
   const context = useContext(GlobalContext)

   if(!context){
    throw new Error("Shto to poshlo ne tak s GlobalContextProviderom()")
   }
   return context
}