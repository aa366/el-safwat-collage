// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getFirestore as lite } from "firebase/firestore/lite";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain:  process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId:  process.env.NEXT_PUBLIC_PROJECT_ID, 
  storageBucket:  process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:  process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId:  process.env.NEXT_PUBLIC_APP_ID,
  measurementId:  process.env.NEXT_PUBLIC_MEASUREMENT_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const dbStore = getFirestore(app);
export const liteStore = lite(app);
// const analytics = getAnalytics(app);