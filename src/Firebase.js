// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  addDoc,collection, serverTimestamp,getDocs,query,where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ856wpdvx9s_PrO0BIMagAqIsM1ULmC8",
  authDomain: "auth-a03cb.firebaseapp.com",
  projectId: "auth-a03cb",
  storageBucket: "auth-a03cb.firebasestorage.app",
  messagingSenderId: "790047802834",
  appId: "1:790047802834:web:edf64e8c599b4a4ea8340b",
  measurementId: "G-59T2R29L3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db, addDoc,collection, serverTimestamp,getDocs,query,where  };
