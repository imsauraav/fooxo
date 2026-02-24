// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fooxo-food.firebaseapp.com",
  projectId: "fooxo-food",
  storageBucket: "fooxo-food.firebasestorage.app",
  messagingSenderId: "349500685695",
  appId: "1:349500685695:web:e24fa4880166464c3aae4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}