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
    requests: {from:string;to:string;msgType:"ChangeRole"|"AddRelation"|"changeGrade";msg?:string}[]
    uid:string;
    relations?:{Type:"student"|"teacher"|"moderator";uid:string}[];
    bio?:string;
    profileURL?:string;
    grade?:string;
    arabicName?:string;
    email?:string;
    emailVerified?:boolean;
    balance?:number;

}
export const IsRight = async ()=>{
  const arr = ["ar"]
  const currentLang = await getLocale()
 if( (arr.map((lang)=> lang === currentLang).includes(true))) return true
 return false 
}
