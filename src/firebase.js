import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBij3AsT5H07-ExJ-jUMdXmFfI-RISqnuQ",

  authDomain: "philochat-14e10.firebaseapp.com",

  projectId: "philochat-14e10",

  storageBucket: "philochat-14e10.appspot.com",

  messagingSenderId: "587061535427",

  appId: "1:587061535427:web:56f0309950a73accf03876"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
