// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,connectAuthEmulator, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu10pVp0b1IB4ummvQwg5ynvpvOyFE0SU",
  authDomain: "reel-18f61.firebaseapp.com",
  projectId: "reel-18f61",
  storageBucket: "reel-18f61.appspot.com",
  messagingSenderId: "1090894405351",
  appId: "1:1090894405351:web:590ae799cdb0671165cc42",
  measurementId: "G-NJB39X6RSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app);



// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, "http://localhost:3000");
// }

// export const passwordReset = async (email) => {
//   return await sendPasswordResetEmail(auth, email);
// }

// export const confirmThePasswordReset = async (oobCode, newPassword) => {
//   if (!oobCode || !newPassword) return;

//   return await confirmPasswordReset(auth, oobCode, newPassword);
// }