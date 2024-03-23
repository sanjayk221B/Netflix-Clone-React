// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD95UTLso-vBS9pi0FEdx8vkbiJZBBHkCs",
  authDomain: "netflix-76ac8.firebaseapp.com",
  projectId: "netflix-76ac8",
  storageBucket: "netflix-76ac8.appspot.com",
  messagingSenderId: "1045740117548",
  appId: "1:1045740117548:web:babd0490842b177a067b89",
  measurementId: "G-K34CCKKYMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
