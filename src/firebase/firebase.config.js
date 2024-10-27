// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXuSNBufeFj06psp31fmfYELP-f5E9yU",
  authDomain: "real-state-189fa.firebaseapp.com",
  projectId: "real-state-189fa",
  storageBucket: "real-state-189fa.appspot.com",
  messagingSenderId: "912107728662",
  appId: "1:912107728662:web:aaae410c8c8ca876a76a37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);