import {getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-2JyBhaEFNwTFXaqQ0nOV3HY9ux2Lr2k",
  authDomain: "react-gaurav-portfolio.firebaseapp.com",
  projectId: "react-gaurav-portfolio",
  storageBucket: "react-gaurav-portfolio.appspot.com",
  messagingSenderId: "484824454726",
  appId: "1:484824454726:web:93f58b567b61ac4a235c47",
  measurementId: "G-Z19RGHLHGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore()