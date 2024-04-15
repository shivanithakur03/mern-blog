// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2d721.firebaseapp.com",
  projectId: "mern-blog-2d721",
  storageBucket: "mern-blog-2d721.appspot.com",
  messagingSenderId: "329282350143",
  appId: "1:329282350143:web:2430db0c3e664341585c8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
