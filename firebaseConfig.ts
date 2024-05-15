import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhN3gDK7whwQIm9TOVafB0VcRj5kljD8",
  authDomain: "jdtodolist-2ee77.firebaseapp.com",
  projectId: "jdtodolist-2ee77",
  storageBucket: "jdtodolist-2ee77.appspot.com",
  messagingSenderId: "200131407970",
  appId: "1:200131407970:web:095654cae42ea102baa13b",
  measurementId: "G-371HDTW48M"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)