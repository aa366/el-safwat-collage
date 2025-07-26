
import { onAuthStateChanged, } from "firebase/auth";
import { auth } from "@/firebase/config";
import { liteStore } from "@/firebase/config";
import { getDoc ,doc} from "firebase/firestore/lite";


export async function getUserData(id:string) {
     
    const minData = await getDoc(doc(liteStore,"users",id)) || null

    

     onAuthStateChanged(auth, (cuerrentUser) => {
        if (cuerrentUser) {   
            return {user:cuerrentUser , data: minData} 
        } else {
            return null 
        }
    })

}
export async function checkVist(uid:string) {
    

    //  return new Promise<boolean>((resolve)=>{ })

    onAuthStateChanged(auth, (cuerrentUser) => {
        console.log(uid);

        
         if(!uid) return false

        return cuerrentUser?.uid == uid
       
    
    })
       

   
    
}