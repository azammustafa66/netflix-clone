// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtG7wW2WX8cV3N0o-PHQf5vLOkBg2dyxg",
  authDomain: "netflix-clone-a1487.firebaseapp.com",
  projectId: "netflix-clone-a1487",
  storageBucket: "netflix-clone-a1487.appspot.com",
  messagingSenderId: "284160949083",
  appId: "1:284160949083:web:181a37e726614eadbf387e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
