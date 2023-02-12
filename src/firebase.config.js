import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTF7z6FwanJxCQQMTeaLQ60SUnefHukFI",
  authDomain: "hackathon-2023-4d57b.firebaseapp.com",
  projectId: "hackathon-2023-4d57b",
  storageBucket: "hackathon-2023-4d57b.appspot.com",
  messagingSenderId: "828024128272",
  appId: "1:828024128272:web:a3487a564e574f26279b95",
  measurementId: "G-MLC36XBLNC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);