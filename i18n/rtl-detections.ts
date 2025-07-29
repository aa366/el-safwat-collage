"use client"
import { useLocale } from "next-intl"




export const LTRLocales =["en"]
export const locales = ["ar","en"]

export const useGetIsRTL =  ()=>{
    const locale =   useLocale()
    if(LTRLocales.find((e)=> locale == e )) return false
    return true

}
