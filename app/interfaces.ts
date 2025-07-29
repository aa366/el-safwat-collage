import { Timestamp } from "firebase/firestore/lite";
import { getLocale } from "next-intl/server";
export interface User{
    name:string;
    birthDate?:Timestamp;
    joinAt:Timestamp ;
    role:"student" | "teacher"|"moderator" |"admin" |"member"
    courses?:{
      paid?:{date:Timestamp;id:string;imgUrl:string;title:string;describe:string;}[],
      published?:{date:Timestamp;id:string;imgUrl:string;title:string;describe:string;}[],
      favorite?:{date:Timestamp;id:string;imgUrl:string;title:string;describe:string;}[],
    };
    
    bio?:string;
    profileURL?:string;
    grade?:string;
    arabicName?:string;
    email?:string;
    emailVerified?:boolean;
  

}
export const IsRight = async ()=>{
  const arr = ["ar"]
  const currentLang = await getLocale()
 if( (arr.map((lang)=> lang === currentLang).includes(true))) return true
 return false 
}
