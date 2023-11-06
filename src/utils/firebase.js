// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogappnextjs-c2b33.firebaseapp.com",
  projectId: "blogappnextjs-c2b33",
  storageBucket: "blogappnextjs-c2b33.appspot.com",
  messagingSenderId: "496827945565",
  appId: "1:496827945565:web:f3e8a4af1ef1192c2033b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);