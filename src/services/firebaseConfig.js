
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDnBPQMDI1ZGkPYid_KoxEBrEDCtOpWbPw",
  authDomain: "clase1349890.firebaseapp.com",
  projectId: "clase1349890",
  storageBucket: "clase1349890.appspot.com",
  messagingSenderId: "217747531010",
  appId: "1:217747531010:web:43ad74d4e427c794220e1b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)