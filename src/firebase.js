// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwOJ_HwK-ghEkx772vOJ70_CmNo6RGrw",
  authDomain: "challenge-e653e.firebaseapp.com",
  projectId: "challenge-e653e",
  storageBucket: "challenge-e653e.appspot.com",
  messagingSenderId: "36197392859",
  appId: "1:36197392859:web:8012a9330858e8b90f87fe",
  measurementId: "G-XQB48FYKT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
