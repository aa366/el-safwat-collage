import { Timestamp } from "firebase/firestore/lite";

export interface User{
    name:string;
    birthDate?:Timestamp;
    joinAt:Timestamp ;
    role:"student" | "teacher"|"moderator" |"admin" |"member"
    courses?:{
      paid?:{date:Timestamp;id:string;}[],
      published?:{date:Timestamp;id:string;}[],
      favorite?:{date:Timestamp;id:string;}[],
    };
    uid:string;
    relations?:{Type:"student"|"teacher"|"moderator";uid:string}[];
    bio?:string;
    profileURL?:string;
    grade?:string;
    balance?:number

}
