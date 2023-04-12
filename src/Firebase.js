// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBFw_3Pq2X013scWIrM9C4eXq-Y2DotXP0",
  authDomain: "clone-b791f.firebaseapp.com",
  databaseURL: "https://clone-b791f-default-rtdb.firebaseio.com",
  projectId: "clone-b791f",
  storageBucket: "clone-b791f.appspot.com",
  messagingSenderId: "268391809974",
  appId: "1:268391809974:web:3940d5dbb0978ada397717"
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);