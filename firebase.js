// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCreVnqLbz09Oj3xUHQLkbxEJa3h6DOLrI",
  authDomain: "eventos-y-celebracion.firebaseapp.com",
  projectId: "eventos-y-celebracion",
  storageBucket: "eventos-y-celebracion.appspot.com",
  messagingSenderId: "525010816913",
  appId: "1:525010816913:web:1ab02c5d1739eb51e65430",
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);
export const db = getFirestore(app);

